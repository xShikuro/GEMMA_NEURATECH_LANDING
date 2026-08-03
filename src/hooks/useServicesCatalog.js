import { useEffect, useMemo, useState } from 'react'
import { fetchServicesCatalog } from '../api/servicesApi'

export function useServicesCatalog(language, fallbackCopy) {
  const [remoteCatalog, setRemoteCatalog] = useState(null)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const loadCatalog = async () => {
      setStatus('loading')
      setError(null)

      try {
        const catalog = await fetchServicesCatalog({ language, signal: controller.signal })
        setRemoteCatalog(catalog)
        setStatus('success')
      } catch (requestError) {
        if (requestError.name === 'AbortError') {
          return
        }

        setRemoteCatalog(null)
        setError(requestError)
        setStatus('error')
      }
    }

    loadCatalog()

    return () => controller.abort()
  }, [language])

  return useMemo(() => {
    const hasRemotePricing = Boolean(remoteCatalog?.pricing?.length)
    const hasRemoteServices = Boolean(remoteCatalog?.services?.length)

    return {
      pricing: hasRemotePricing ? remoteCatalog.pricing : fallbackCopy.pricing,
      services: hasRemoteServices ? remoteCatalog.services : fallbackCopy.services,
      status,
      error,
      isFromApi: hasRemotePricing || hasRemoteServices,
    }
  }, [error, fallbackCopy.pricing, fallbackCopy.services, remoteCatalog, status])
}
