import {
  siAnsible,
  siApacheairflow,
  siApachekafka,
  siCloudflare,
  siDjango,
  siDocker,
  siElasticsearch,
  siFastapi,
  siGooglecloud,
  siGrafana,
  siGraphql,
  siHuggingface,
  siJavascript,
  siKubernetes,
  siLangchain,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siNvidia,
  siOpencv,
  siPostgresql,
  siPrometheus,
  siPytorch,
  siPython,
  siRay,
  siReact,
  siRedis,
  siTensorflow,
  siTerraform,
  siTypescript,
  siVite,
  siYandexcloud,
} from 'simple-icons'

const techIcons = {
  siAnsible,
  siApacheairflow,
  siApachekafka,
  siCloudflare,
  siDjango,
  siDocker,
  siElasticsearch,
  siFastapi,
  siGooglecloud,
  siGrafana,
  siGraphql,
  siHuggingface,
  siJavascript,
  siKubernetes,
  siLangchain,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siNvidia,
  siOpencv,
  siPostgresql,
  siPrometheus,
  siPytorch,
  siPython,
  siRay,
  siReact,
  siRedis,
  siTensorflow,
  siTerraform,
  siTypescript,
  siVite,
  siYandexcloud,
}

export default function TechIcon({ icon, name }) {
  const simpleIcon = techIcons[icon]

  if (!simpleIcon) {
    return <span className="tech-icon tech-icon--fallback">{name.slice(0, 2)}</span>
  }

  return (
    <svg
      className="tech-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ color: `#${simpleIcon.hex}` }}
    >
      <path d={simpleIcon.path} />
    </svg>
  )
}
