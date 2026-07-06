import { useState } from 'react'
import CheckoutModal from '../checkout/CheckoutModal'
import SvgIcon from '../icons/SvgIcon'
import SectionHead from '../ui/SectionHead'

export function PricingCards({ actionLabel, checkoutCopy, includedLabel, plans }) {
  const [selectedPlan, setSelectedPlan] = useState(null)

  return (
    <>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article className="pricing-card" key={plan.name}>
            <span>{plan.period}</span>
            <h2>{plan.name}</h2>
            <strong>{plan.price}</strong>
            <p>{plan.text}</p>
            <em className="pricing-card__included">{includedLabel}</em>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button className="pricing-card__link" type="button" onClick={() => setSelectedPlan(plan)}>
              {actionLabel}
              <SvgIcon id="i-arrow" />
            </button>
          </article>
        ))}
      </div>

      {selectedPlan ? (
        <CheckoutModal copy={checkoutCopy} plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
      ) : null}
    </>
  )
}

export default function Pricing({ copy }) {
  return (
    <section className="section-block tech-frame reveal" id="pricing">
      <SectionHead title={copy.title} />
      <PricingCards
        actionLabel={copy.action}
        checkoutCopy={copy.checkout}
        includedLabel={copy.includedLabel}
        plans={copy.items}
      />
      <p className="page-note">{copy.note}</p>
    </section>
  )
}
