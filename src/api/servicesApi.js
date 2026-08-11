const defaultServicesEndpoint = '/api/v1/services/'
const defaultApiBaseUrl = 'https://api.gemmaneuratech.net'

function getServicesEndpoint(language) {
  const endpoint = import.meta.env.VITE_SERVICES_ENDPOINT || defaultServicesEndpoint
  const explicitBaseUrl = import.meta.env.VITE_SERVICES_API_BASE_URL || import.meta.env.VITE_API_BASE_URL
  const baseUrl = explicitBaseUrl || (import.meta.env.DEV ? window.location.origin : defaultApiBaseUrl)
  const url = new URL(endpoint, baseUrl)

  if (language && !url.searchParams.has('lang')) {
    url.searchParams.set('lang', language)
  }

  return url.toString()
}

function formatAmount(amount, currency) {
  const numericAmount = Number(amount)

  if (!Number.isFinite(numericAmount)) {
    return ''
  }

  const normalizedCurrency = currency || 'UZS'
  const formattedAmount = new Intl.NumberFormat('ru-RU', {
    maximumFractionDigits: 0,
  }).format(numericAmount)

  if (normalizedCurrency.toUpperCase() === 'UZS') {
    return `${formattedAmount} сум`
  }

  return `${formattedAmount} ${normalizedCurrency}`
}

function normalizeFeature(feature) {
  if (typeof feature === 'string') {
    return feature
  }

  return feature?.title || feature?.name || feature?.text || ''
}

function normalizePlan(plan) {
  const amount =
    plan.amount ??
    plan.price_from ??
    plan.priceFrom ??
    plan.priceAmount ??
    plan.price_value ??
    plan.priceValue ??
    (typeof plan.price === 'number' ? plan.price : undefined)
  const currency = plan.currency || plan.priceCurrency || plan.currencyCode || 'UZS'
  const price = typeof plan.price === 'string' ? plan.price : formatAmount(amount, currency)
  const features = plan.features || plan.includes || plan.included || plan.items || plan.benefits || []

  return {
    id: plan.id || plan.slug || plan.code || plan.name,
    service_id: plan.service_id || plan.serviceId || plan.id,
    name: plan.name || plan.title || 'Service package',
    price,
    amount,
    currency,
    period: plan.period || plan.subtitle || plan.category || plan.type || '',
    text: plan.text || plan.description || plan.shortDescription || plan.short_description || '',
    features: Array.isArray(features) ? features.map(normalizeFeature).filter(Boolean) : [],
  }
}

function normalizeService(service) {
  return {
    id: service.id || service.slug || service.code || service.title || service.name,
    title: service.title || service.name || 'Service',
    text: service.text || service.description || service.shortDescription || service.short_description || '',
    icon: service.icon || service.iconId || service.icon_id || 'i-chip',
  }
}

function readCatalogPayload(payload) {
  if (Array.isArray(payload)) {
    return { pricing: payload, services: [] }
  }

  const data = payload?.data || payload?.result || payload || {}

  return {
    pricing: data.pricing || data.plans || data.packages || data.tariffs || data.items || [],
    services: data.services || data.directions || data.categories || [],
  }
}

export async function fetchServicesCatalog({ language, signal } = {}) {
  const response = await fetch(getServicesEndpoint(language), {
    headers: {
      Accept: 'application/json',
    },
    signal,
  })

  const contentType = response.headers.get('content-type') || ''
  const payload = contentType.includes('application/json') ? await response.json() : null

  if (!response.ok) {
    throw new Error(payload?.message || payload?.error?.message || 'Could not load services catalog.')
  }

  if (!payload) {
    throw new Error('Services API returned a non-JSON response.')
  }

  const catalog = readCatalogPayload(payload)

  return {
    pricing: catalog.pricing.filter((item) => item && item.active !== false).map(normalizePlan),
    services: catalog.services.filter((item) => item && item.active !== false).map(normalizeService),
  }
}
