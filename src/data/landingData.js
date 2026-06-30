export const techStack = [
  { name: 'PyTorch', icon: 'siPytorch' },
  { name: 'TensorFlow', icon: 'siTensorflow' },
  { name: 'Kubernetes', icon: 'siKubernetes' },
  { name: 'NVIDIA CUDA', icon: 'siNvidia' },
  { name: 'Docker', icon: 'siDocker' },
  { name: 'Ray', icon: 'siRay' },
  { name: 'Python', icon: 'siPython' },
  { name: 'React', icon: 'siReact' },
  { name: 'Vite', icon: 'siVite' },
  { name: 'TypeScript', icon: 'siTypescript' },
  { name: 'JavaScript', icon: 'siJavascript' },
  { name: 'Node.js', icon: 'siNodedotjs' },
  { name: 'Next.js', icon: 'siNextdotjs' },
  { name: 'FastAPI', icon: 'siFastapi' },
  { name: 'Django', icon: 'siDjango' },
  { name: 'Hugging Face', icon: 'siHuggingface' },
  { name: 'LangChain', icon: 'siLangchain' },
  { name: 'OpenCV', icon: 'siOpencv' },
  { name: 'PostgreSQL', icon: 'siPostgresql' },
  { name: 'MongoDB', icon: 'siMongodb' },
  { name: 'Redis', icon: 'siRedis' },
  { name: 'GraphQL', icon: 'siGraphql' },
  { name: 'Kafka', icon: 'siApachekafka' },
  { name: 'Airflow', icon: 'siApacheairflow' },
  { name: 'Elasticsearch', icon: 'siElasticsearch' },
  { name: 'Prometheus', icon: 'siPrometheus' },
  { name: 'Grafana', icon: 'siGrafana' },
  { name: 'Terraform', icon: 'siTerraform' },
  { name: 'Ansible', icon: 'siAnsible' },
  { name: 'Google Cloud', icon: 'siGooglecloud' },
  { name: 'Yandex Cloud', icon: 'siYandexcloud' },
  { name: 'Cloudflare', icon: 'siCloudflare' },
]

const sharedStats = [
  { icon: 'i-crown', values: [5, 6, 7, 8], suffix: '+' },
  { icon: 'i-chip', min: 50, max: 160, suffix: '+' },
  { icon: 'i-users', values: ['24/7', '365', '100%'] },
  { icon: 'i-shield', min: 99.1, max: 99.9, decimals: 1, suffix: '%' },
]

const solutionMeta = [
  { neuralIcon: true },
  { icon: 'i-chip' },
  { icon: 'i-network' },
  { icon: 'i-lock' },
]

const caseMeta = [
  { art: 'brain' },
  { art: 'chart' },
  { art: 'robot' },
]

const whyIcons = ['i-network', 'i-gear', 'i-users', 'i-shield']

function withMeta(items, meta) {
  return items.map((item, index) => ({ ...meta[index], ...item }))
}

export const content = {
  ru: {
    navLinks: [
      { href: '#about', label: 'О нас' },
      { href: '#tech', label: 'Технологии' },
      { href: '#solutions', label: 'Решения' },
      { href: '#cases', label: 'Кейсы' },
      { href: '#news', label: 'Новости' },
    ],
    header: {
      navLabel: 'Основная навигация',
      contact: 'Связаться с нами',
      switchLabel: 'Переключить язык на английский',
    },
    hero: {
      title: ['Advanced', 'Neural', 'Architectures'],
      text: 'Создаём интеллектуальные системы нового поколения на базе передовых нейронных архитектур',
      primary: 'Узнать больше',
      secondary: 'Связаться с нами',
    },
    stats: withMeta([
      { label: 'Лет на рынке' },
      { label: 'Проектов' },
      { label: 'Поддержка' },
      { label: 'Надежность' },
    ], sharedStats),
    about: {
      eyebrow: 'О нас',
      titleStart: 'Инновации, которые формируют',
      titleAccent: 'будущее',
      paragraphs: [
        'Gemma Neuratech - международная IT-компания и исследовательский центр, специализирующийся на разработке передовых нейронных архитектур и интеллектуальных систем.',
        'Мы объединяем науку, технологии и инженерное мастерство для решения самых сложных задач нашего времени.',
      ],
      button: 'Подробнее о компании',
    },
    solutions: {
      title: 'Наши решения',
      previous: 'Предыдущие решения',
      next: 'Следующие решения',
      details: 'Подробнее',
      items: withMeta([
        {
          title: 'Разработка нейронных сетей',
          text: 'Проектирование и обучение нейронных сетей любой сложности под ваши задачи',
        },
        {
          title: 'Edge AI и обработка в реальном времени',
          text: 'Интеллектуальные алгоритмы для устройств с ограниченными ресурсами',
        },
        {
          title: 'Распределённые вычисления',
          text: 'Масштабируемые решения на базе кластеров и облачной инфраструктуры',
        },
        {
          title: 'AI-безопасность и защита данных',
          text: 'Обеспечение безопасности моделей, данных и процессов на всех уровнях',
        },
      ], solutionMeta),
    },
    tech: {
      title: 'Технологии',
      all: 'Все технологии',
    },
    cases: {
      title: 'Кейсы',
      previous: 'Предыдущие кейсы',
      next: 'Следующие кейсы',
      details: 'Смотреть кейс',
      items: withMeta([
        {
          tag: 'Медицина',
          title: 'Система диагностики медицинских изображений',
          text: 'ИИ-решение для автоматического анализа и диагностики снимков КТ и МРТ',
        },
        {
          tag: 'Fintech',
          title: 'Алгоритмическая торговая платформа',
          text: 'Высокоскоростная AI-платформа для анализа рынка и принятия торговых решений',
        },
        {
          tag: 'Industrial',
          title: 'Predictive Maintenance на производстве',
          text: 'Система предиктивной аналитики для предотвращения сбоев оборудования',
        },
      ], caseMeta),
    },
    why: {
      title: 'Почему мы',
      items: withMeta([
        {
          title: 'Экспертиза',
          text: 'Команда ученых и инженеров с мировым опытом в AI и машинном обучении',
        },
        {
          title: 'Индивидуальный подход',
          text: 'Каждое решение создаётся под конкретные задачи и бизнес-цели',
        },
        {
          title: 'Инновации',
          text: 'Постоянные исследования и внедрение передовых технологий',
        },
        {
          title: 'Надежность',
          text: 'Высокие стандарты качества, безопасности и поддержки на всех этапах',
        },
      ], whyIcons.map((icon) => ({ icon }))),
    },
    contact: {
      eyebrow: 'Контакт',
      title: 'Готовы обсудить ваш проект?',
      text: 'Свяжитесь с нами - мы поможем воплотить ваши идеи в интеллектуальные решения.',
      link: 'Связаться с нами',
      name: 'Ваше имя',
      email: 'Email',
      message: 'Сообщение',
      submit: 'Отправить сообщение',
      success: 'Сообщение отправлено',
    },
    footer: {
      description: 'Проектируем интеллектуальные системы, нейронные архитектуры и надежную инфраструктуру для AI-продуктов.',
      directionsLabel: 'Направления',
      cta: 'Готовы обсудить пилот?',
      ctaButton: 'Связаться',
      navTitle: 'Навигация',
      servicesTitle: 'Услуги',
      technologiesTitle: 'Технологии',
      contactsTitle: 'Контакты',
      location: 'Лондон, Великобритания',
      services: ['Разработка нейронных сетей', 'Edge AI', 'Распределённые вычисления', 'AI-безопасность'],
      technologies: ['Нейронные сети', 'Компьютерное зрение', 'Облачные вычисления', 'MLOps-пайплайны'],
      copyright: '© 2024 Gemma Neuratech. Все права защищены.',
      tagline: 'Advanced Neural Architectures',
    },
  },
  en: {
    navLinks: [
      { href: '#about', label: 'About' },
      { href: '#tech', label: 'Technologies' },
      { href: '#solutions', label: 'Solutions' },
      { href: '#cases', label: 'Cases' },
      { href: '#news', label: 'News' },
    ],
    header: {
      navLabel: 'Primary navigation',
      contact: 'Get in touch',
      switchLabel: 'Switch language to Russian',
    },
    hero: {
      title: ['Advanced', 'Neural', 'Architectures'],
      text: 'We build next-generation intelligent systems powered by advanced neural architectures.',
      primary: 'Learn more',
      secondary: 'Get in touch',
    },
    stats: withMeta([
      { label: 'Years in market' },
      { label: 'Projects' },
      { label: 'Support' },
      { label: 'Reliability' },
    ], sharedStats),
    about: {
      eyebrow: 'About us',
      titleStart: 'Innovation shaping the',
      titleAccent: 'future',
      paragraphs: [
        'Gemma Neuratech is an international IT company and research center focused on advanced neural architectures and intelligent systems.',
        'We combine science, technology, and engineering craft to solve the most complex challenges of our time.',
      ],
      button: 'More about us',
    },
    solutions: {
      title: 'Our solutions',
      previous: 'Previous solutions',
      next: 'Next solutions',
      details: 'Details',
      items: withMeta([
        {
          title: 'Neural network development',
          text: 'Designing and training neural networks of any complexity for your business tasks.',
        },
        {
          title: 'Edge AI and real-time processing',
          text: 'Intelligent algorithms for devices with limited compute and memory resources.',
        },
        {
          title: 'Distributed computing',
          text: 'Scalable systems based on clusters, accelerators, and cloud infrastructure.',
        },
        {
          title: 'AI security and data protection',
          text: 'Protecting models, data, and processes across every layer of the AI stack.',
        },
      ], solutionMeta),
    },
    tech: {
      title: 'Technologies',
      all: 'All technologies',
    },
    cases: {
      title: 'Cases',
      previous: 'Previous cases',
      next: 'Next cases',
      details: 'View case',
      items: withMeta([
        {
          tag: 'Healthcare',
          title: 'Medical image diagnostics system',
          text: 'AI solution for automated analysis and diagnostics of CT and MRI scans.',
        },
        {
          tag: 'Fintech',
          title: 'Algorithmic trading platform',
          text: 'High-speed AI platform for market analysis and trading decision support.',
        },
        {
          tag: 'Industrial',
          title: 'Predictive maintenance for production',
          text: 'Predictive analytics system for preventing equipment downtime.',
        },
      ], caseMeta),
    },
    why: {
      title: 'Why us',
      items: withMeta([
        {
          title: 'Expertise',
          text: 'Scientists and engineers with global experience in AI and machine learning.',
        },
        {
          title: 'Custom approach',
          text: 'Every solution is designed around specific business goals and constraints.',
        },
        {
          title: 'Innovation',
          text: 'Continuous research and adoption of advanced technologies.',
        },
        {
          title: 'Reliability',
          text: 'High standards for quality, security, and support at every project stage.',
        },
      ], whyIcons.map((icon) => ({ icon }))),
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Ready to discuss your project?',
      text: 'Get in touch and we will help turn your ideas into intelligent solutions.',
      link: 'Get in touch',
      name: 'Your name',
      email: 'Email',
      message: 'Message',
      submit: 'Send message',
      success: 'Message sent',
    },
    footer: {
      description: 'We design intelligent systems, neural architectures, and reliable infrastructure for AI products.',
      directionsLabel: 'Focus areas',
      cta: 'Ready to discuss a pilot?',
      ctaButton: 'Get in touch',
      navTitle: 'Navigation',
      servicesTitle: 'Services',
      technologiesTitle: 'Technologies',
      contactsTitle: 'Contacts',
      location: 'London, United Kingdom',
      services: ['Neural network development', 'Edge AI', 'Distributed computing', 'AI security'],
      technologies: ['Neural networks', 'Computer vision', 'Cloud computing', 'MLOps pipelines'],
      copyright: '© 2024 Gemma Neuratech. All rights reserved.',
      tagline: 'Advanced Neural Architectures',
    },
  },
}
