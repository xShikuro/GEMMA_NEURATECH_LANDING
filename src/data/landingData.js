import { pricingNoteEn, pricingNoteRu, pricingPlansEn, pricingPlansRu } from './pricingPlans.js'

const companyEmail = 'Gemmaneuratech@gmail.com'
const companyPhone = '+998772827474'

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
  { icon: 'i-crown' },
  { icon: 'i-chip' },
  { icon: 'i-users' },
  { icon: 'i-shield' },
]

const solutionMeta = [
  { neuralIcon: true },
  { icon: 'i-chip' },
  { icon: 'i-network' },
  { icon: 'i-lock' },
  { icon: 'i-cube' },
  { icon: 'i-layers' },
]

const caseMeta = [
  { art: 'brain' },
  { art: 'chart' },
  { art: 'robot' },
  { art: 'network' },
  { art: 'shield' },
  { art: 'cube' },
]

const whyIcons = ['i-network', 'i-gear', 'i-users', 'i-shield']
const processIcons = ['i-info', 'i-layers', 'i-chip', 'i-shield']

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
      { href: '#roadmap', label: 'Процесс' },
    ],
    header: {
      navLabel: 'Основная навигация',
      contact: 'Связаться с нами',
      switchLabel: 'Переключить язык на английский',
    },
    hero: {
      title: ['Advanced', 'Neural', 'Architectures'],
      text: 'Создаем интеллектуальные системы нового поколения на базе передовых нейронных архитектур',
      primary: 'Узнать больше',
      secondary: 'Связаться с нами',
    },
    stats: withMeta([
      { label: 'Лет на рынке', min: 4, max: 7, suffix: '+' },
      { label: 'Проектов', min: 45, max: 80, suffix: '+' },
      { label: 'Поддержка', values: ['24/7', '12/7', '24/7'] },
      { label: 'Стабильность', min: 98.7, max: 99.9, decimals: 1, suffix: '%' },
    ], sharedStats),
    about: {
      eyebrow: 'О нас',
      titleStart: 'Инновации, которые формируют',
      titleAccent: 'будущее',
      paragraphs: [
        'Gemma Neuratech IT - IT-компания, зарегистрированная как "GEMMA NEURATECH IT" MCHJ (ООО) в городе Ташкенте.',
        'Компания является резидентом IT Park с 26.05.2026 и развивает интеллектуальные решения, программные продукты и инженерную инфраструктуру для AI-проектов.',
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
          text: 'Проектирование и обучение нейронных сетей любой сложности под ваши задачи.',
        },
        {
          title: 'Edge AI и обработка в реальном времени',
          text: 'Интеллектуальные алгоритмы для устройств с ограниченными ресурсами.',
        },
        {
          title: 'Распределенные вычисления',
          text: 'Масштабируемые решения на базе кластеров, ускорителей и облачной инфраструктуры.',
        },
        {
          title: 'AI-безопасность и защита данных',
          text: 'Безопасность моделей, данных и процессов на всех уровнях AI-стека.',
        },
        {
          title: 'Компьютерное зрение',
          text: 'Детекция, сегментация и анализ видеопотоков для промышленных и городских систем.',
        },
        {
          title: 'MLOps-инфраструктура',
          text: 'Пайплайны обучения, мониторинг моделей и стабильные релизы AI-продуктов.',
        },
      ], solutionMeta),
    },
    pricing: {
      title: 'Пакеты услуг',
      includedLabel: 'Что входит',
      action: 'Купить пакет',
      note: pricingNoteRu,
      checkout: {
        eyebrow: 'Checkout',
        termsTitle: 'Подтвердите условия',
        paymentTitle: 'Оплата пакета',
        successTitle: 'Заявка на оплату подготовлена',
        stepTerms: 'Условия',
        stepPayment: 'Оплата',
        summaryLabel: 'Выбранный пакет',
        terms: [
          'Стоимость пакета является стартовой и может уточняться после согласования технического задания.',
          'Работы начинаются после подтверждения заказа, оплаты и согласования объема услуг.',
          'Данные карты в текущей версии не сохраняются и будут передаваться только платежному провайдеру после подключения платежного шлюза.',
        ],
        acceptText: 'Я принимаю условия оказания услуг, обработку персональных данных и правила оплаты.',
        continueLabel: 'Перейти к оплате',
        backLabel: 'Назад',
        payLabel: 'Подтвердить оплату',
        doneLabel: 'Готово',
        closeLabel: 'Закрыть checkout',
        secureText: 'Платежная форма подготовлена под будущую токенизацию через платежный провайдер.',
        successText: 'Сценарий покупки готов. После подключения backend и платежного шлюза здесь будет создаваться реальный платеж.',
        fields: {
          name: 'Имя и фамилия',
          email: 'Email',
          phone: 'Телефон',
          cardName: 'Имя на карте',
          cardNumber: 'Номер карты',
          expiry: 'Срок',
          cvc: 'CVC',
        },
      },
      items: pricingPlansRu,
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
          text: 'ИИ-решение для автоматического анализа и диагностики снимков КТ и МРТ.',
        },
        {
          tag: 'Fintech',
          title: 'Алгоритмическая торговая платформа',
          text: 'Высокоскоростная AI-платформа для анализа рынка и принятия торговых решений.',
        },
        {
          tag: 'Industrial',
          title: 'Predictive Maintenance на производстве',
          text: 'Система предиктивной аналитики для предотвращения сбоев оборудования.',
        },
        {
          tag: 'Retail',
          title: 'Персонализация клиентских сценариев',
          text: 'Модель рекомендаций, которая адаптирует витрины и офферы под поведение клиентов.',
        },
        {
          tag: 'Security',
          title: 'Мониторинг аномалий в инфраструктуре',
          text: 'Потоковый анализ логов и сетевых событий для раннего обнаружения угроз.',
        },
        {
          tag: 'Logistics',
          title: 'Оптимизация маршрутов доставки',
          text: 'Прогнозирование нагрузки и динамическое планирование маршрутов в реальном времени.',
        },
      ], caseMeta),
    },
    why: {
      title: 'Почему мы',
      items: withMeta([
        {
          title: 'Экспертиза',
          text: 'Команда ученых и инженеров с мировым опытом в AI и машинном обучении.',
        },
        {
          title: 'Индивидуальный подход',
          text: 'Каждое решение создается под конкретные задачи и бизнес-цели.',
        },
        {
          title: 'Инновации',
          text: 'Постоянные исследования и внедрение передовых технологий.',
        },
        {
          title: 'Надежность',
          text: 'Высокие стандарты качества, безопасности и поддержки на всех этапах.',
        },
      ], whyIcons.map((icon) => ({ icon }))),
    },
    process: {
      title: 'Как мы запускаем проект',
      eyebrow: 'Процесс',
      text: 'Двигаемся от исследования к промышленному запуску без лишнего шума: короткие итерации, прозрачные метрики и понятные контрольные точки.',
      items: withMeta([
        {
          step: '01',
          title: 'Диагностика задачи',
          text: 'Разбираем бизнес-цель, данные, ограничения и критерии успеха будущей системы.',
        },
        {
          step: '02',
          title: 'Прототипирование',
          text: 'Быстро собираем проверяемую модель, тестируем гипотезы и выбираем архитектуру.',
        },
        {
          step: '03',
          title: 'Инженерный запуск',
          text: 'Разворачиваем пайплайны, API, мониторинг и инфраструктуру для стабильной работы.',
        },
        {
          step: '04',
          title: 'Рост и поддержка',
          text: 'Улучшаем качество модели, следим за метриками и развиваем продукт после релиза.',
        },
      ], processIcons.map((icon) => ({ icon }))),
    },
    lab: {
      title: 'Инженерная база',
      eyebrow: 'Лаборатория',
      text: 'Собираем AI-системы как инженерные продукты: с версионированием данных, наблюдаемостью, безопасной доставкой и контролем качества.',
      cards: [
        {
          title: 'Data foundation',
          text: 'Схемы данных, очистка, валидация, датасеты и контроль дрейфа.',
          icon: 'i-layers',
        },
        {
          title: 'Model core',
          text: 'Эксперименты, обучение, бенчмарки и оптимизация под продакшен.',
          icon: 'i-brain',
        },
        {
          title: 'Production loop',
          text: 'CI/CD, мониторинг, алерты и регулярное улучшение моделей.',
          icon: 'i-gear',
        },
      ],
      metrics: ['Low latency', 'Secure pipelines', 'Observable AI'],
    },
    contact: {
      eyebrow: 'Контакт',
      title: 'Готовы обсудить ваш проект?',
      text: 'Оставьте заявку или напишите нам напрямую - мы свяжемся с вами и уточним детали проекта.',
      link: 'Оставить заявку',
      linkHref: '/contact',
      directEmailLabel: 'Почта для связи',
      directEmail: companyEmail,
      name: 'Ваше имя',
      email: 'Email',
      message: 'Сообщение',
      submit: 'Отправить сообщение',
      success: 'Сообщение отправлено',
    },
    footer: {
      description: '"GEMMA NEURATECH IT" MCHJ (ООО). Разрабатываем IT-решения, AI-системы и инженерную инфраструктуру для цифровых продуктов.',
      directionsLabel: 'Направления',
      cta: 'Готовы обсудить проект?',
      ctaButton: 'Оставить заявку',
      navTitle: 'Навигация',
      servicesTitle: 'Услуги',
      technologiesTitle: 'Технологии',
      contactsTitle: 'Контакты',
      location: 'Узбекистан, г. Ташкент, Алмазарский район, МФЙ Чилтогон, ул. Тахтапул Дарвоза, дом 396-У',
      email: companyEmail,
      phone: companyPhone,
      contactItems: ['"GEMMA NEURATECH IT" MCHJ (ООО)', 'Регистрация: 07.05.2026', 'IT Park Resident с 26.05.2026'],
      services: ['Разработка нейронных сетей', 'Edge AI', 'Распределенные вычисления', 'AI-безопасность'],
      technologies: ['Нейронные сети', 'Компьютерное зрение', 'Облачные вычисления', 'MLOps-пайплайны'],
      copyright: '© 2026 Gemma Neuratech IT. Все права защищены.',
      tagline: 'Advanced Neural Architectures',
    },
  },
  en: {
    navLinks: [
      { href: '#about', label: 'About' },
      { href: '#tech', label: 'Technologies' },
      { href: '#solutions', label: 'Solutions' },
      { href: '#cases', label: 'Cases' },
      { href: '#roadmap', label: 'Process' },
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
      { label: 'Years in market', min: 4, max: 7, suffix: '+' },
      { label: 'Projects', min: 45, max: 80, suffix: '+' },
      { label: 'Support', values: ['24/7', '12/7', '24/7'] },
      { label: 'Stability', min: 98.7, max: 99.9, decimals: 1, suffix: '%' },
    ], sharedStats),
    about: {
      eyebrow: 'About us',
      titleStart: 'Innovation shaping the',
      titleAccent: 'future',
      paragraphs: [
        'Gemma Neuratech IT is an IT company registered as "GEMMA NEURATECH IT" MCHJ (LLC) in Tashkent, Uzbekistan.',
        'The company has been an IT Park Resident since 26.05.2026 and develops intelligent solutions, software products, and engineering infrastructure for AI projects.',
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
        {
          title: 'Computer vision',
          text: 'Detection, segmentation, and video stream analytics for industry and smart cities.',
        },
        {
          title: 'MLOps infrastructure',
          text: 'Training pipelines, model monitoring, and reliable releases for AI products.',
        },
      ], solutionMeta),
    },
    pricing: {
      title: 'Service packages',
      includedLabel: 'Included',
      action: 'Buy package',
      note: pricingNoteEn,
      checkout: {
        eyebrow: 'Checkout',
        termsTitle: 'Confirm terms',
        paymentTitle: 'Package payment',
        successTitle: 'Payment request prepared',
        stepTerms: 'Terms',
        stepPayment: 'Payment',
        summaryLabel: 'Selected package',
        terms: [
          'The package price is a starting estimate and may be clarified after the technical scope is approved.',
          'Work starts after the order, payment, and scope of services are confirmed.',
          'Card data is not stored in the current version and will be passed only to a payment provider after the payment gateway is connected.',
        ],
        acceptText: 'I accept the service terms, personal data processing, and payment rules.',
        continueLabel: 'Continue to payment',
        backLabel: 'Back',
        payLabel: 'Confirm payment',
        doneLabel: 'Done',
        closeLabel: 'Close checkout',
        secureText: 'The payment form is prepared for future tokenization through a payment provider.',
        successText: 'The purchase flow is ready. After backend and payment gateway integration, this step will create a real payment.',
        fields: {
          name: 'Full name',
          email: 'Email',
          phone: 'Phone',
          cardName: 'Name on card',
          cardNumber: 'Card number',
          expiry: 'Expiry',
          cvc: 'CVC',
        },
      },
      items: pricingPlansEn,
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
        {
          tag: 'Retail',
          title: 'Customer scenario personalization',
          text: 'Recommendation models that adapt catalogs and offers to customer behavior.',
        },
        {
          tag: 'Security',
          title: 'Infrastructure anomaly monitoring',
          text: 'Streaming analysis of logs and network events for early threat detection.',
        },
        {
          tag: 'Logistics',
          title: 'Delivery route optimization',
          text: 'Load forecasting and dynamic route planning in real time.',
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
    process: {
      title: 'How we launch a project',
      eyebrow: 'Process',
      text: 'We move from research to production launch through short iterations, transparent metrics, and clear checkpoints.',
      items: withMeta([
        {
          step: '01',
          title: 'Problem diagnostics',
          text: 'We map the business goal, data, constraints, and success criteria for the future system.',
        },
        {
          step: '02',
          title: 'Prototyping',
          text: 'We assemble a testable model, validate hypotheses, and choose the architecture.',
        },
        {
          step: '03',
          title: 'Engineering launch',
          text: 'We deploy pipelines, APIs, monitoring, and infrastructure for stable operation.',
        },
        {
          step: '04',
          title: 'Growth and support',
          text: 'We improve model quality, monitor metrics, and evolve the product after release.',
        },
      ], processIcons.map((icon) => ({ icon }))),
    },
    lab: {
      title: 'Engineering foundation',
      eyebrow: 'Lab',
      text: 'We build AI systems as engineered products with data versioning, observability, safe delivery, and quality control.',
      cards: [
        {
          title: 'Data foundation',
          text: 'Schemas, cleaning, validation, datasets, and drift control.',
          icon: 'i-layers',
        },
        {
          title: 'Model core',
          text: 'Experiments, training, benchmarks, and production optimization.',
          icon: 'i-brain',
        },
        {
          title: 'Production loop',
          text: 'CI/CD, monitoring, alerts, and continuous model improvement.',
          icon: 'i-gear',
        },
      ],
      metrics: ['Low latency', 'Secure pipelines', 'Observable AI'],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Ready to discuss your project?',
      text: 'Send a request or write to us directly - we will contact you and clarify the project details.',
      link: 'Send a request',
      linkHref: '/contact',
      directEmailLabel: 'Contact email',
      directEmail: companyEmail,
      name: 'Your name',
      email: 'Email',
      message: 'Message',
      submit: 'Send message',
      success: 'Message sent',
    },
    footer: {
      description: '"GEMMA NEURATECH IT" MCHJ (LLC). We develop IT solutions, AI systems, and engineering infrastructure for digital products.',
      directionsLabel: 'Focus areas',
      cta: 'Ready to discuss a project?',
      ctaButton: 'Send request',
      navTitle: 'Navigation',
      servicesTitle: 'Services',
      technologiesTitle: 'Technologies',
      contactsTitle: 'Contacts',
      location: '396-U, Takhtapul Darvoza St., Chiltogon mahalla, Almazar district, Tashkent, Uzbekistan',
      email: companyEmail,
      phone: companyPhone,
      contactItems: ['"GEMMA NEURATECH IT" MCHJ (LLC)', 'Registered: 07.05.2026', 'IT Park Resident since 26.05.2026'],
      services: ['Neural network development', 'Edge AI', 'Distributed computing', 'AI security'],
      technologies: ['Neural networks', 'Computer vision', 'Cloud computing', 'MLOps pipelines'],
      copyright: '© 2026 Gemma Neuratech IT. All rights reserved.',
      tagline: 'Advanced Neural Architectures',
    },
  },
}
