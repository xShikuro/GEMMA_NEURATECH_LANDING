const defaultPaymentPaths = {
  hamkor: '/api/v1/payments/hamkorbank/create',
  'orient-finans': '/api/v1/payments/orientfinansbank/create',
  kapital: '/api/v1/payments/kapitalbank/create',
  sqb: '/api/v1/payments/sqb/create',
}

function getApiBaseUrl() {
  return import.meta.env.VITE_PAYMENT_API_BASE_URL || import.meta.env.VITE_API_BASE_URL || window.location.origin
}

function getPaymentCreateUrl(bank) {
  const path = bank?.paymentCreatePath || defaultPaymentPaths[bank?.id] || `/api/v1/payments/${bank?.id}/create`
  return new URL(path, getApiBaseUrl()).toString()
}

function getServiceId(plan) {
  return (
    plan.service_id ||
    plan.serviceId ||
    plan.id ||
    plan.slug ||
    plan.code ||
    import.meta.env.VITE_DEFAULT_SERVICE_ID ||
    plan.name
  )
}

function getAmount(plan) {
  const amount = Number(plan.amount ?? plan.price_from ?? plan.priceFrom ?? plan.priceAmount ?? plan.price_value ?? plan.priceValue)

  if (Number.isFinite(amount) && amount > 0) {
    return amount
  }

  const parsedAmount = Number(String(plan.price || '').replace(/\D/g, ''))
  return Number.isFinite(parsedAmount) ? parsedAmount : 0
}

function getPaymentStatusUrl(externalId) {
  return new URL(`/api/v1/payments/hamkorbank/status/${encodeURIComponent(externalId)}`, getApiBaseUrl()).toString()
}

function getPaymentUrl(responseBody) {
  return (
    responseBody?.payment_url ||
    responseBody?.paymentUrl ||
    responseBody?.redirectUrl ||
    responseBody?.redirect_url ||
    responseBody?.url ||
    responseBody?.result?.payment_url ||
    responseBody?.result?.paymentUrl ||
    responseBody?.result?.redirectUrl ||
    responseBody?.result?.redirect_url ||
    responseBody?.result?.url
  )
}

function unwrapPaymentResponse(responseBody) {
  return responseBody?.data || responseBody?.result || responseBody || {}
}

function getResponseErrorMessage(responseBody, fallback) {
  if (typeof responseBody?.message === 'string') {
    return responseBody.message
  }

  if (typeof responseBody?.error === 'string') {
    return responseBody.error
  }

  if (typeof responseBody?.error?.message === 'string') {
    return responseBody.error.message
  }

  return fallback
}

function buildDetails({ bank, draft, plan }) {
  return [
    `Package: ${plan.name}`,
    `Customer: ${draft.name}`,
    `Email: ${draft.email}`,
    `Phone: ${draft.phone}`,
    `Project: ${draft.projectName}`,
    `Type: ${draft.projectType}`,
    `Description: ${draft.description}`,
    `Bank: ${bank?.name || ''}`,
  ].filter((item) => !item.endsWith(': ') && !item.endsWith(': undefined')).join('\n')
}

export async function createPaymentLink({ bank, draft, messages = {}, plan, signal }) {
  if (bank?.id !== 'hamkor') {
    throw new Error(messages.bankUnavailable || 'Real payment is currently connected only through Hamkor Bank.')
  }

  const serviceId = getServiceId(plan)

  const amount = getAmount(plan)

  if (!amount) {
    throw new Error(messages.missingAmount || 'The selected service does not have a valid amount.')
  }

  let response

  try {
    response = await fetch(getPaymentCreateUrl(bank), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        amount,
        details: buildDetails({ bank, draft, plan }),
        hold: false,
      }),
      signal,
    })
  } catch {
    throw new Error(`${messages.network || 'Payment backend is unavailable.'} URL: ${getPaymentCreateUrl(bank)}`)
  }

  const responseBody = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(getResponseErrorMessage(responseBody, messages.error || 'Could not create payment link.'))
  }

  const payment = unwrapPaymentResponse(responseBody)
  const paymentUrl = getPaymentUrl(responseBody)

  if (!paymentUrl) {
    throw new Error(messages.missingUrl || 'Backend response did not include payment_url.')
  }

  sessionStorage.setItem('gemma:lastPayment', JSON.stringify({
    id: payment.id || '',
    external_id: payment.external_id || '',
    service_id: serviceId,
    amount,
    bank: bank?.id || '',
    status: payment.status || '',
    created_at: payment.created_at || '',
  }))

  return {
    paymentUrl,
    payment: responseBody,
  }
}

export async function fetchHamkorPaymentStatus({ externalId, signal }) {
  if (!externalId) {
    throw new Error('Missing external_id.')
  }

  const response = await fetch(getPaymentStatusUrl(externalId), {
    headers: {
      Accept: 'application/json',
    },
    signal,
  })
  const responseBody = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(getResponseErrorMessage(responseBody, 'Could not load payment status.'))
  }

  return unwrapPaymentResponse(responseBody)
}
