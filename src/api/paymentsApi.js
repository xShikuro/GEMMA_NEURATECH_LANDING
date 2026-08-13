const defaultPaymentPaths = {
  hamkor: '/api/v1/payments/hamkorbank/create',
  'orient-finans': '/api/v1/payments/orientfinansbank/create',
  kapital: '/api/v1/payments/multicard/create',
  sqb: '/api/v1/payments/create',
}

const enabledPaymentBanks = new Set(['hamkor', 'kapital', 'sqb'])
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const fallbackServiceIdsByName = {
  'ai platform': '2954a51c-3f7c-4e6c-926a-ae7ef13a1dbe',
  automation: 'f789b0d3-5337-4f92-88c4-0931742dbf23',
  enterprise: 'bd516ba6-3c44-4c80-808f-a32338f8fd09',
  growth: '6e144fa6-c97a-414a-9f6d-2364bf9e6aca',
  launch: 'e2344218-f7de-4191-9e24-571460b24283',
  start: '38ecd37c-6407-49a4-9b2a-7db42c371a5c',
}

function getApiBaseUrl() {
  return window.location.origin
}

function getPaymentCreateUrl(bank) {
  const path = bank?.paymentCreatePath || defaultPaymentPaths[bank?.id] || `/api/v1/payments/${bank?.id}/create`
  return new URL(path, getApiBaseUrl()).toString()
}

function getUuidCandidate(value) {
  const normalizedValue = String(value ?? '').trim()
  return uuidPattern.test(normalizedValue) ? normalizedValue : ''
}

function getServiceId(plan) {
  const planName = String(plan.name || plan.title || '').trim().toLowerCase()

  return (
    getUuidCandidate(plan.service_id) ||
    getUuidCandidate(plan.serviceId) ||
    getUuidCandidate(plan.id) ||
    getUuidCandidate(plan.slug) ||
    getUuidCandidate(plan.code) ||
    getUuidCandidate(import.meta.env.VITE_DEFAULT_SERVICE_ID) ||
    fallbackServiceIdsByName[planName] ||
    ''
  )
}

function normalizeAmountValue(value) {
  const normalizedValue = String(value ?? '')
    .replace(',', '.')
    .replace(/[^\d.]/g, '')

  if (!normalizedValue) {
    return ''
  }

  const numericAmount = Number(normalizedValue)

  return Number.isFinite(numericAmount) && numericAmount > 0 ? normalizedValue : ''
}

function getAmount(plan) {
  const amount = normalizeAmountValue(
    plan.amount ?? plan.price_from ?? plan.priceFrom ?? plan.priceAmount ?? plan.price_value ?? plan.priceValue,
  )

  return amount || normalizeAmountValue(plan.price)
}

function getPaymentStatusUrl({ bank = 'hamkor', externalId }) {
  const statusPaths = {
    hamkor: `/api/v1/payments/hamkorbank/status/${encodeURIComponent(externalId)}`,
    kapital: `/api/v1/payments/multicard/status/${encodeURIComponent(externalId)}`,
    sqb: `/api/v1/payments/status/${encodeURIComponent(externalId)}`,
  }

  return new URL(statusPaths[bank] || statusPaths.hamkor, getApiBaseUrl()).toString()
}

function getPaymentUrl(responseBody) {
  return (
    responseBody?.payment_url ||
    responseBody?.paymentUrl ||
    responseBody?.checkout_url ||
    responseBody?.checkoutUrl ||
    responseBody?.short_link ||
    responseBody?.shortLink ||
    responseBody?.redirectUrl ||
    responseBody?.redirect_url ||
    responseBody?.url ||
    responseBody?.result?.payment_url ||
    responseBody?.result?.paymentUrl ||
    responseBody?.result?.checkout_url ||
    responseBody?.result?.checkoutUrl ||
    responseBody?.result?.short_link ||
    responseBody?.result?.shortLink ||
    responseBody?.result?.redirectUrl ||
    responseBody?.result?.redirect_url ||
    responseBody?.result?.url ||
    responseBody?.data?.payment_url ||
    responseBody?.data?.paymentUrl ||
    responseBody?.data?.checkout_url ||
    responseBody?.data?.checkoutUrl ||
    responseBody?.data?.short_link ||
    responseBody?.data?.shortLink ||
    responseBody?.data?.redirectUrl ||
    responseBody?.data?.redirect_url ||
    responseBody?.data?.url
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
    `Bank: ${bank?.name || ''}`,
  ].filter((item) => !item.endsWith(': ') && !item.endsWith(': undefined')).join('\n')
}

function buildPaymentRequestBody({ amount, bank, draft, plan, serviceId }) {
  const baseBody = {
    service_id: serviceId || null,
    amount,
  }

  if (bank?.id === 'kapital') {
    return baseBody
  }

  if (bank?.id === 'sqb') {
    return {
      ...baseBody,
      details: buildDetails({ bank, draft, plan }),
      email: draft.email || null,
      currency: '860',
      country: 'UZ',
    }
  }

  return {
    ...baseBody,
    details: buildDetails({ bank, draft, plan }),
    hold: false,
  }
}

export async function createPaymentLink({ bank, draft, messages = {}, plan, signal }) {
  if (!enabledPaymentBanks.has(bank?.id)) {
    throw new Error(messages.bankUnavailable || 'Real payment is currently connected through Hamkor Bank, Kapital Bank, and SQB.')
  }

  const serviceId = getServiceId(plan)

  const amount = getAmount(plan)

  if (!serviceId) {
    throw new Error(messages.missingServiceId || 'The selected service does not have a valid service_id.')
  }

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
      body: JSON.stringify(buildPaymentRequestBody({ amount, bank, draft, plan, serviceId })),
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
    external_id: payment.external_id || payment.invoice_id || payment.order_id || '',
    invoice_id: payment.invoice_id || '',
    order_id: payment.order_id || '',
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

export async function fetchPaymentStatus({ bank = 'hamkor', externalId, signal }) {
  if (!externalId) {
    throw new Error('Missing payment identifier.')
  }

  const response = await fetch(getPaymentStatusUrl({ bank, externalId }), {
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
