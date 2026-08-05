import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { fetchHamkorPaymentStatus } from '../api/paymentsApi'
import SvgIcon from '../components/icons/SvgIcon'

const successAliases = new Set(['success', 'paid', 'payed', 'confirmed', '3', '14'])
const pendingAliases = new Set(['pending', 'created', 'holded', 'processing', '1', '2'])
const failedAliases = new Set(['failed', 'failure', 'declined', 'cancel', 'canceled', 'cancelled', 'returned', '4', '5'])

const resultLabels = {
  ru: {
    amount: 'Сумма',
    bank: 'Банк',
    createdAt: 'Создан',
    checking: 'Проверяем финальный статус платежа через backend...',
    lookupError: 'Не удалось получить актуальный статус платежа. Если деньги списались, поддержка проверит операцию по external_id.',
  },
  en: {
    amount: 'Amount',
    bank: 'Bank',
    createdAt: 'Created',
    checking: 'Checking the final payment status through the backend...',
    lookupError: 'Could not fetch the current payment status. If money was charged, support can check the operation by external_id.',
  },
  uz: {
    amount: 'Summa',
    bank: 'Bank',
    createdAt: 'Yaratilgan',
    checking: 'Backend orqali yakuniy to‘lov statusi tekshirilmoqda...',
    lookupError: 'To‘lov statusini olib bo‘lmadi. Pul yechilgan bo‘lsa, support external_id orqali tekshiradi.',
  },
}

function readStoredPayment() {
  try {
    return JSON.parse(sessionStorage.getItem('gemma:lastPayment') || 'null')
  } catch {
    return null
  }
}

function getFirstQueryValue(searchParams, names) {
  return names.map((name) => searchParams.get(name)).find(Boolean) || ''
}

function normalizeStatus(value) {
  const status = String(value || '').trim().toLowerCase()

  if (successAliases.has(status)) {
    return 'success'
  }

  if (pendingAliases.has(status)) {
    return 'pending'
  }

  if (failedAliases.has(status)) {
    return 'failed'
  }

  return 'error'
}

function formatAmount(amount) {
  const numericAmount = Number(amount)

  if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
    return amount || ''
  }

  return `${new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 }).format(numericAmount)} сум`
}

function formatDate(value) {
  if (!value) {
    return ''
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export default function PaymentResultPage({ copy, defaultStatus = '', language = 'ru' }) {
  const [searchParams] = useSearchParams()
  const labels = resultLabels[language] || resultLabels.ru
  const storedPayment = useMemo(() => readStoredPayment(), [])
  const [remotePayment, setRemotePayment] = useState(null)
  const [statusLookup, setStatusLookup] = useState({ externalId: '', state: 'idle', error: '' })
  const queryStatus = getFirstQueryValue(searchParams, ['status', 'state', 'payment_status'])
  const queryExternalId = getFirstQueryValue(searchParams, ['external_id', 'externalId', 'ext_id', 'order_id', 'invoice_id'])
  const storedPaymentForResult = defaultStatus && !queryExternalId ? null : storedPayment
  const externalId =
    queryExternalId ||
    remotePayment?.external_id ||
    storedPaymentForResult?.external_id ||
    ''
  const paymentId =
    getFirstQueryValue(searchParams, ['payment_id', 'paymentId', 'pay_id', 'id']) ||
    remotePayment?.id ||
    storedPaymentForResult?.id ||
    ''
  const statusValue = remotePayment?.status || queryStatus || defaultStatus || storedPaymentForResult?.status
  const lookupState = externalId && statusLookup.externalId !== externalId ? 'loading' : statusLookup.state
  const lookupError = statusLookup.externalId === externalId ? statusLookup.error : ''
  const statusKey = lookupState === 'loading' && !statusValue ? 'pending' : normalizeStatus(statusValue)
  const status = copy.statuses[statusKey] || copy.statuses.error
  const amount = remotePayment?.amount || storedPaymentForResult?.amount || searchParams.get('amount')
  const bank = storedPaymentForResult?.bank || searchParams.get('bank')
  const createdAt = remotePayment?.created_at || storedPaymentForResult?.created_at || searchParams.get('created_at')

  useEffect(() => {
    if (!externalId) {
      return undefined
    }

    const controller = new AbortController()

    fetchHamkorPaymentStatus({ externalId, signal: controller.signal })
      .then((payment) => {
        setRemotePayment(payment)
        setStatusLookup({ externalId, state: 'success', error: '' })

        sessionStorage.setItem('gemma:lastPayment', JSON.stringify({
          ...storedPaymentForResult,
          ...payment,
          external_id: payment.external_id || externalId,
          bank: storedPaymentForResult?.bank || 'hamkor',
        }))
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          return
        }

        setStatusLookup({
          externalId,
          state: 'error',
          error: error instanceof Error ? error.message : labels.lookupError,
        })
      })

    return () => controller.abort()
  }, [externalId, labels.lookupError, storedPaymentForResult])

  return (
    <div className="route-page payment-result-page">
      <section className="page-hero tech-frame reveal">
        <div>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h1>{copy.title}</h1>
          <p>{copy.text}</p>
        </div>
      </section>

      <section className="section-block tech-frame reveal">
        <article className={`checkout-status payment-result-card checkout-status--${status.tone || statusKey}`}>
          <div className="checkout-status__signal" aria-hidden="true">
            <SvgIcon id={status.icon || 'i-info'} />
          </div>

          <div className="checkout-status__content">
            <span className="checkout-status__eyebrow">{status.eyebrow}</span>
            <h3>{status.title}</h3>
            <p>{status.text}</p>
            {lookupState === 'loading' ? <p className="checkout-step-note">{labels.checking}</p> : null}
            {lookupError ? <p className="checkout-step-note checkout-step-note--error">{lookupError}</p> : null}

            {status.details?.length ? (
              <ul className="checkout-status__details">
                {status.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}

            <div className="checkout-status__meta">
              <span>
                <em>{copy.statusLabel}</em>
                <strong>{statusKey}</strong>
              </span>
              {externalId ? (
                <span>
                  <em>{copy.externalIdLabel}</em>
                  <strong>{externalId}</strong>
                </span>
              ) : null}
              {paymentId ? (
                <span>
                  <em>{copy.paymentIdLabel}</em>
                  <strong>{paymentId}</strong>
                </span>
              ) : null}
              {amount ? (
                <span>
                  <em>{labels.amount}</em>
                  <strong>{formatAmount(amount)}</strong>
                </span>
              ) : null}
              {bank ? (
                <span>
                  <em>{labels.bank}</em>
                  <strong>{bank}</strong>
                </span>
              ) : null}
              {createdAt ? (
                <span>
                  <em>{labels.createdAt}</em>
                  <strong>{formatDate(createdAt)}</strong>
                </span>
              ) : null}
            </div>

            <div className="checkout-actions checkout-status__actions payment-result-actions">
              <Link className="btn btn--outline" to="/services">
                {copy.servicesLabel}
              </Link>
              <Link className="btn btn--primary" to="/">
                {copy.homeLabel}
                <SvgIcon id="i-arrow" />
              </Link>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}
