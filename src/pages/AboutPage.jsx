import SvgIcon from '../components/icons/SvgIcon'
import CertificatePanel from '../components/sections/CertificatePanel'
import SectionHead from '../components/ui/SectionHead'
import egrpoDocument from '../assets/documents/gemma-egrpo-director-khurshidbek.pdf'
import registrationDocument from '../assets/documents/gemma-registration-document.pdf'
import itParkCertificate from '../assets/images/it-park-resident-certificate.jpg'

const documentFiles = {
  egrpo: egrpoDocument,
  registration: registrationDocument,
}

export default function AboutPage({ copy }) {
  return (
    <div className="route-page">
      <section className="page-hero page-hero--split tech-frame reveal">
        <div>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h1>{copy.title}</h1>
          <p>{copy.text}</p>
        </div>
        <div className="page-stat-grid">
          {copy.stats.map((stat) => (
            <article key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block tech-frame reveal">
        <SectionHead title={copy.legalTitle} />
        <div className="legal-grid">
          {copy.legalDetails.map((item) => (
            <article className="legal-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block tech-frame reveal">
        <SectionHead title={copy.documentsTitle || copy.certificate.title} />
        <div className="certificate-stack">
          <CertificatePanel copy={copy.certificate} image={itParkCertificate} />
          {copy.documents?.map((documentItem) => (
            <CertificatePanel
              key={documentItem.heading}
              copy={documentItem}
              file={documentFiles[documentItem.file]}
            />
          ))}
        </div>
      </section>

      <section className="section-block tech-frame reveal">
        <SectionHead title={copy.presentationsTitle} />
        <div className="presentation-grid">
          {copy.presentations.map((item) => (
            <article className="presentation-card" key={item.title}>
              <span>{item.tag}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <SvgIcon id="i-layers" />
            </article>
          ))}
        </div>
      </section>

      <section className="section-block tech-frame reveal">
        <SectionHead title={copy.reviewsTitle} />
        <div className="review-grid">
          {copy.reviews.map((review) => (
            <article className="review-card" key={review.author}>
              <p>{review.quote}</p>
              <span>{review.author}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
