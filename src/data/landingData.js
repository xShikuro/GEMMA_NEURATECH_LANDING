import { checkoutOfferEn, checkoutOfferRu, checkoutOfferUz } from './offerTerms.js'
import { pricingNoteEn, pricingNoteRu, pricingNoteUz, pricingPlansEn, pricingPlansRu, pricingPlansUz } from './pricingPlans.js'

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
  { icon: 'i-gear' },
  { icon: 'i-users' },
  { icon: 'i-shield' },
  { icon: 'i-info' },
  { icon: 'i-brain' },
  { icon: 'i-crown' },
  { icon: 'i-chip' },
  { icon: 'i-network' },
]

const caseMeta = [
  { art: 'brain' },
  { art: 'chart' },
  { art: 'robot' },
  { art: 'network' },
  { art: 'shield' },
  { art: 'cube' },
  { art: 'brain' },
  { art: 'chart' },
  { art: 'robot' },
  { art: 'network' },
]

const whyIcons = ['i-network', 'i-gear', 'i-users', 'i-shield']
const processIcons = ['i-info', 'i-layers', 'i-chip', 'i-shield']

function withMeta(items, meta) {
  return items.map((item, index) => ({ ...meta[index], ...item }))
}

const techModalContent = {
  ru: {
    eyebrow: 'Технологический стек',
    title: 'Стек Gemma Neuratech',
    intro: 'Собираем технологии под задачу: от прототипа модели до production-инфраструктуры, мониторинга и безопасной интеграции.',
    closeLabel: 'Закрыть стек технологий',
    cta: 'Обсудить проект',
    ctaText: 'Подбираем стек под бизнес-задачу, данные, сроки и требования к надежности.',
    categories: [
      {
        title: 'AI / Machine Learning',
        text: 'Модели, компьютерное зрение, NLP, RAG-системы и интеллектуальные ассистенты.',
        technologies: ['PyTorch', 'TensorFlow', 'Hugging Face', 'OpenCV', 'LangChain'],
      },
      {
        title: 'Backend',
        text: 'API, личные кабинеты, админ-панели, интеграции и серверная логика продукта.',
        technologies: ['Python', 'FastAPI', 'Django', 'Node.js', 'GraphQL'],
      },
      {
        title: 'Frontend',
        text: 'Интерфейсы, dashboards, клиентские порталы и интерактивные веб-приложения.',
        technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vite'],
      },
      {
        title: 'Data',
        text: 'Хранение, подготовка, потоковая обработка и аналитическая основа для моделей.',
        technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Airflow'],
      },
      {
        title: 'Cloud / Infrastructure',
        text: 'Деплой, масштабирование, GPU-инфраструктура и отказоустойчивые окружения.',
        technologies: ['Docker', 'Kubernetes', 'NVIDIA CUDA', 'Yandex Cloud', 'Google Cloud', 'Cloudflare'],
      },
      {
        title: 'DevOps / MLOps',
        text: 'CI/CD, мониторинг, наблюдаемость, релизы моделей и контроль качества.',
        technologies: ['Prometheus', 'Grafana', 'Terraform', 'Ansible', 'Ray'],
      },
      {
        title: 'Security',
        text: 'Контроль доступа, безопасные API, резервное копирование и защита данных.',
        technologies: ['Cloudflare', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
      },
    ],
  },
  en: {
    eyebrow: 'Technology stack',
    title: 'Gemma Neuratech stack',
    intro: 'We select technologies around the task: from model prototypes to production infrastructure, monitoring, and secure integration.',
    closeLabel: 'Close technology stack',
    cta: 'Discuss a project',
    ctaText: 'We choose the stack around business goals, data, timeline, and reliability requirements.',
    categories: [
      {
        title: 'AI / Machine Learning',
        text: 'Models, computer vision, NLP, RAG systems, and intelligent assistants.',
        technologies: ['PyTorch', 'TensorFlow', 'Hugging Face', 'OpenCV', 'LangChain'],
      },
      {
        title: 'Backend',
        text: 'APIs, user portals, admin panels, integrations, and product server logic.',
        technologies: ['Python', 'FastAPI', 'Django', 'Node.js', 'GraphQL'],
      },
      {
        title: 'Frontend',
        text: 'Interfaces, dashboards, client portals, and interactive web applications.',
        technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vite'],
      },
      {
        title: 'Data',
        text: 'Storage, preparation, streaming, and analytical foundations for models.',
        technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Airflow'],
      },
      {
        title: 'Cloud / Infrastructure',
        text: 'Deployment, scaling, GPU infrastructure, and resilient environments.',
        technologies: ['Docker', 'Kubernetes', 'NVIDIA CUDA', 'Yandex Cloud', 'Google Cloud', 'Cloudflare'],
      },
      {
        title: 'DevOps / MLOps',
        text: 'CI/CD, monitoring, observability, model releases, and quality control.',
        technologies: ['Prometheus', 'Grafana', 'Terraform', 'Ansible', 'Ray'],
      },
      {
        title: 'Security',
        text: 'Access control, secure APIs, backups, and data protection.',
        technologies: ['Cloudflare', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
      },
    ],
  },
  uz: {
    eyebrow: 'Texnologik stack',
    title: 'Gemma Neuratech stacki',
    intro: 'Texnologiyalarni vazifaga mos tanlaymiz: model prototipidan production infratuzilma, monitoring va xavfsiz integratsiyagacha.',
    closeLabel: 'Texnologiyalar oynasini yopish',
    cta: 'Loyihani muhokama qilish',
    ctaText: 'Stack biznes maqsad, maʼlumotlar, muddat va ishonchlilik talablariga qarab tanlanadi.',
    categories: [
      {
        title: 'AI / Machine Learning',
        text: 'Modellar, kompyuter ko‘rishi, NLP, RAG tizimlari va intellektual assistentlar.',
        technologies: ['PyTorch', 'TensorFlow', 'Hugging Face', 'OpenCV', 'LangChain'],
      },
      {
        title: 'Backend',
        text: 'API, shaxsiy kabinetlar, admin panellar, integratsiyalar va server logikasi.',
        technologies: ['Python', 'FastAPI', 'Django', 'Node.js', 'GraphQL'],
      },
      {
        title: 'Frontend',
        text: 'Interfeyslar, dashboardlar, mijoz portallari va interaktiv web-ilovalar.',
        technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vite'],
      },
      {
        title: 'Data',
        text: 'Saqlash, tayyorlash, oqimli qayta ishlash va modellar uchun analitik asos.',
        technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Airflow'],
      },
      {
        title: 'Cloud / Infrastructure',
        text: 'Deploy, masshtablash, GPU infratuzilma va barqaror muhitlar.',
        technologies: ['Docker', 'Kubernetes', 'NVIDIA CUDA', 'Yandex Cloud', 'Google Cloud', 'Cloudflare'],
      },
      {
        title: 'DevOps / MLOps',
        text: 'CI/CD, monitoring, kuzatuvchanlik, model relizlari va sifat nazorati.',
        technologies: ['Prometheus', 'Grafana', 'Terraform', 'Ansible', 'Ray'],
      },
      {
        title: 'Security',
        text: 'Kirish nazorati, xavfsiz API, zaxira nusxalar va maʼlumotlarni himoya qilish.',
        technologies: ['Cloudflare', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
      },
    ],
  },
}

const solutionModalContent = {
  ru: {
    eyebrow: 'Детали решения',
    closeLabel: 'Закрыть описание решения',
    scopeTitle: 'Что входит',
    scopeItems: [
      'Анализ задачи, данных, ограничений и критериев успешного запуска.',
      'Проектирование архитектуры, модели, API и пользовательского сценария.',
      'Подготовка прототипа, тестирование качества и план production-внедрения.',
    ],
    workflowTitle: 'Как внедряем',
    workflowItems: [
      'Проводим техническую диагностику и фиксируем измеримые цели.',
      'Собираем MVP или пилот, проверяем гипотезы на реальных данных.',
      'Интегрируем решение в инфраструктуру, добавляем мониторинг и документацию.',
    ],
    resultTitle: 'Результат',
    resultItems: [
      'Рабочий AI-модуль или цифровой сервис под конкретный бизнес-процесс.',
      'Понятная архитектура, документация и сценарий дальнейшего развития.',
      'Поддержка, улучшение качества и подготовка к масштабированию.',
    ],
    ctaTitle: 'Хотите разобрать задачу?',
    ctaText: 'Расскажите нам о проекте, и мы предложим подходящий формат пилота или внедрения.',
    cta: 'Связаться с нами',
  },
  en: {
    eyebrow: 'Solution details',
    closeLabel: 'Close solution details',
    scopeTitle: 'Included',
    scopeItems: [
      'Analysis of the task, data, constraints, and launch success criteria.',
      'Architecture, model, API, and user workflow design.',
      'Prototype preparation, quality testing, and production rollout planning.',
    ],
    workflowTitle: 'Implementation flow',
    workflowItems: [
      'We run technical diagnostics and define measurable goals.',
      'We build an MVP or pilot and validate hypotheses on real data.',
      'We integrate the solution into infrastructure, monitoring, and documentation.',
    ],
    resultTitle: 'Result',
    resultItems: [
      'A working AI module or digital service for a specific business process.',
      'Clear architecture, documentation, and a roadmap for further development.',
      'Support, quality improvement, and preparation for scaling.',
    ],
    ctaTitle: 'Want to review a task?',
    ctaText: 'Tell us about the project, and we will suggest the right pilot or implementation format.',
    cta: 'Contact us',
  },
  uz: {
    eyebrow: 'Yechim tafsilotlari',
    closeLabel: 'Yechim tafsilotlarini yopish',
    scopeTitle: 'Nimalar kiradi',
    scopeItems: [
      'Vazifa, maʼlumotlar, cheklovlar va ishga tushirish mezonlarini tahlil qilish.',
      'Arxitektura, model, API va foydalanuvchi ssenariysini loyihalash.',
      'Prototip tayyorlash, sifatni tekshirish va production joriy etish rejasini tuzish.',
    ],
    workflowTitle: 'Qanday joriy qilamiz',
    workflowItems: [
      'Texnik diagnostika o‘tkazamiz va o‘lchanadigan maqsadlarni belgilaymiz.',
      'MVP yoki pilot yig‘amiz, gipotezalarni real maʼlumotlarda tekshiramiz.',
      'Yechimni infratuzilmaga ulaymiz, monitoring va hujjatlarni qo‘shamiz.',
    ],
    resultTitle: 'Natija',
    resultItems: [
      'Aniq biznes jarayon uchun ishlaydigan AI-modul yoki raqamli servis.',
      'Tushunarli arxitektura, hujjatlar va keyingi rivojlanish yo‘l xaritasi.',
      'Qo‘llab-quvvatlash, sifatni oshirish va masshtablashga tayyorgarlik.',
    ],
    ctaTitle: 'Vazifani muhokama qilamizmi?',
    ctaText: 'Loyiha haqida yozing, biz mos pilot yoki joriy etish formatini taklif qilamiz.',
    cta: 'Bog‘lanish',
  },
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
      modal: solutionModalContent.ru,
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
        {
          title: 'AI-консалтинг и аудит',
          text: 'Оценка идей, данных, рисков и архитектуры перед запуском AI-проекта.',
        },
        {
          title: 'Интеграция AI в бизнес-процессы',
          text: 'Встраиваем модели, ассистентов и автоматизацию в рабочие сценарии компании.',
        },
        {
          title: 'Data engineering',
          text: 'Собираем, очищаем и структурируем данные для аналитики, обучения и эксплуатации моделей.',
        },
        {
          title: 'Корпоративные AI-ассистенты',
          text: 'Проектируем ассистентов для поддержки, продаж, внутренних знаний и операционных команд.',
        },
        {
          title: 'Прогнозная аналитика',
          text: 'Строим модели прогнозирования спроса, нагрузки, рисков и ключевых бизнес-показателей.',
        },
        {
          title: 'Интеллектуальная автоматизация',
          text: 'Создаем сценарии, где AI сокращает ручные операции и ускоряет принятие решений.',
        },
        {
          title: 'Обработка естественного языка',
          text: 'Классификация, поиск, анализ документов и текстовые ассистенты для внутренних процессов.',
        },
        {
          title: 'AI-интеграции через API',
          text: 'Подключаем интеллектуальные сервисы к сайтам, CRM, кабинетам и внутренним системам.',
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
        agreement: checkoutOfferRu,
        terms: [
          'Стоимость пакета является стартовой и может уточняться после согласования технического задания.',
          'Работы начинаются после подтверждения заказа, оплаты и согласования объема услуг.',
          'Данные карты в текущей версии не сохраняются и будут передаваться только платежному провайдеру после подключения платежного шлюза.',
        ],
        acceptText: 'Я ознакомился с публичной офертой GEMMA NEURATECH IT и принимаю условия оказания услуг, обработки данных, оплаты и возвратов.',
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
      modal: techModalContent.ru,
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
        {
          tag: 'Telecom',
          title: 'Прогнозирование нагрузки сети',
          text: 'Модели для предсказания пикового трафика и оптимизации сетевых ресурсов.',
        },
        {
          tag: 'EdTech',
          title: 'Персональный AI-тьютор',
          text: 'Ассистент для адаптивного обучения, проверки заданий и подсказок по материалам.',
        },
        {
          tag: 'Finance',
          title: 'Скоринг и оценка рисков',
          text: 'ML-система для оценки заявок, сегментации клиентов и раннего выявления рисков.',
        },
        {
          tag: 'Operations',
          title: 'Автоматизация службы поддержки',
          text: 'AI-помощник для обработки обращений, поиска ответов и маршрутизации заявок.',
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
      modal: solutionModalContent.en,
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
        {
          title: 'AI consulting and audit',
          text: 'Assessing ideas, data, risks, and architecture before an AI project launch.',
        },
        {
          title: 'AI business integration',
          text: 'Embedding models, assistants, and automation into company workflows.',
        },
        {
          title: 'Data engineering',
          text: 'Collecting, cleaning, and structuring data for analytics, training, and model operations.',
        },
        {
          title: 'Enterprise AI assistants',
          text: 'Designing assistants for support, sales, internal knowledge, and operations teams.',
        },
        {
          title: 'Predictive analytics',
          text: 'Building models for demand, workload, risk, and key business metric forecasting.',
        },
        {
          title: 'Intelligent automation',
          text: 'Creating workflows where AI reduces manual operations and speeds up decisions.',
        },
        {
          title: 'Natural language processing',
          text: 'Classification, search, document analysis, and text assistants for internal processes.',
        },
        {
          title: 'AI API integrations',
          text: 'Connecting intelligent services to websites, CRMs, portals, and internal systems.',
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
        agreement: checkoutOfferEn,
        terms: [
          'The package price is a starting estimate and may be clarified after the technical scope is approved.',
          'Work starts after the order, payment, and scope of services are confirmed.',
          'Card data is not stored in the current version and will be passed only to a payment provider after the payment gateway is connected.',
        ],
        acceptText: 'I have read the GEMMA NEURATECH IT public offer and accept the service, data processing, payment, and refund terms.',
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
      modal: techModalContent.en,
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
        {
          tag: 'Telecom',
          title: 'Network load forecasting',
          text: 'Models for predicting traffic peaks and optimizing network resources.',
        },
        {
          tag: 'EdTech',
          title: 'Personal AI tutor',
          text: 'Assistant for adaptive learning, assignment checks, and contextual hints.',
        },
        {
          tag: 'Finance',
          title: 'Scoring and risk assessment',
          text: 'ML system for application scoring, customer segmentation, and early risk detection.',
        },
        {
          tag: 'Operations',
          title: 'Support desk automation',
          text: 'AI assistant for request processing, answer search, and ticket routing.',
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

content.uz = {
  navLinks: [
    { href: '#about', label: 'Biz haqimizda' },
    { href: '#tech', label: 'Texnologiyalar' },
    { href: '#solutions', label: 'Yechimlar' },
    { href: '#cases', label: 'Keyslar' },
    { href: '#roadmap', label: 'Jarayon' },
  ],
  header: {
    navLabel: 'Asosiy navigatsiya',
    contact: 'Bog‘lanish',
    switchLabel: 'Tilni almashtirish',
  },
  hero: {
    title: ['Advanced', 'Neural', 'Architectures'],
    text: 'Ilg‘or neyron arxitekturalar asosida yangi avlod intellektual tizimlarini yaratamiz.',
    primary: 'Batafsil',
    secondary: 'Bog‘lanish',
  },
  stats: withMeta([
    { label: 'Bozordagi tajriba', min: 4, max: 7, suffix: '+' },
    { label: 'Loyihalar', min: 45, max: 80, suffix: '+' },
    { label: 'Qo‘llab-quvvatlash', values: ['24/7', '12/7', '24/7'] },
    { label: 'Barqarorlik', min: 98.7, max: 99.9, decimals: 1, suffix: '%' },
  ], sharedStats),
  about: {
    eyebrow: 'Biz haqimizda',
    titleStart: 'Kelajakni shakllantiradigan',
    titleAccent: 'innovatsiyalar',
    paragraphs: [
      'Gemma Neuratech IT - Toshkent shahrida "GEMMA NEURATECH IT" MCHJ sifatida ro‘yxatdan o‘tgan IT-kompaniya.',
      'Kompaniya 26.05.2026 sanasidan IT Park rezidenti bo‘lib, AI-loyihalar uchun intellektual yechimlar, dasturiy mahsulotlar va muhandislik infratuzilmasini rivojlantiradi.',
    ],
    button: 'Kompaniya haqida',
  },
  solutions: {
    title: 'Yechimlarimiz',
    details: 'Batafsil',
    previous: 'Oldingi yechim',
    next: 'Keyingi yechim',
    modal: solutionModalContent.uz,
    items: withMeta([
      {
        title: 'Neyron tarmoqlar',
        text: 'Biznes jarayonlarini avtomatlashtirish, tahlil qilish va qaror qabul qilish uchun AI-modellar.',
      },
      {
        title: 'MLOps infratuzilmasi',
        text: 'AI-mahsulotlarni barqaror chiqarish uchun o‘qitish pipeline, monitoring va release jarayonlari.',
      },
      {
        title: 'Edge AI',
        text: 'Qurilmalar, sensorlar va lokal infratuzilma uchun tezkor intellektual hisoblash.',
      },
      {
        title: 'Ma’lumotlar xavfsizligi',
        text: 'Kirish nazorati, ma’lumotlarni himoya qilish va AI-yechimlarni xavfsiz integratsiya qilish.',
      },
      {
        title: 'Raqamli platformalar',
        text: 'Kabinetlar, admin panellar, xizmat kataloglari va mahsulot interfeyslari.',
      },
      {
        title: 'Analitika va dashboardlar',
        text: 'Ma’lumotlarni ko‘rish, metrikalar, hisobotlar va biznes monitoring.',
      },
      {
        title: 'AI-konsalting va audit',
        text: 'AI-loyiha boshlanishidan oldin g‘oya, ma’lumotlar, xavflar va arxitekturani baholash.',
      },
      {
        title: 'AI-ni biznes jarayonlarga ulash',
        text: 'Modellar, assistentlar va avtomatlashtirishni kompaniya ish jarayonlariga integratsiya qilish.',
      },
      {
        title: 'Data engineering',
        text: 'Analitika, o‘qitish va model ekspluatatsiyasi uchun ma’lumotlarni yig‘ish va tartiblash.',
      },
      {
        title: 'Korporativ AI-assistentlar',
        text: 'Qo‘llab-quvvatlash, savdo, ichki bilimlar va operatsion jamoalar uchun assistentlar.',
      },
      {
        title: 'Prognoz analitikasi',
        text: 'Talab, yuklama, xavflar va asosiy biznes ko‘rsatkichlarini prognoz qilish modellari.',
      },
      {
        title: 'Intellektual avtomatlashtirish',
        text: 'AI qo‘l mehnatini kamaytiradigan va qaror qabul qilishni tezlashtiradigan ssenariylar.',
      },
      {
        title: 'Tabiiy tilni qayta ishlash',
        text: 'Klassifikatsiya, qidiruv, hujjat tahlili va ichki jarayonlar uchun matnli assistentlar.',
      },
      {
        title: 'AI API integratsiyalari',
        text: 'Intellektual servislarni saytlar, CRM, kabinetlar va ichki tizimlarga ulash.',
      },
    ], solutionMeta),
  },
  pricing: {
    title: 'Xizmat paketlari',
    action: 'Paketni sotib olish',
    includedLabel: 'Nimalar kiradi',
    note: pricingNoteUz,
    checkout: {
      eyebrow: 'Checkout',
      termsTitle: 'Shartlarni tasdiqlang',
      paymentTitle: 'Paket uchun to‘lov',
      successTitle: 'To‘lov so‘rovi tayyor',
      stepTerms: 'Shartlar',
      stepPayment: 'To‘lov',
      summaryLabel: 'Tanlangan paket',
      agreement: checkoutOfferUz,
      acceptText: 'Men GEMMA NEURATECH IT ommaviy ofertasi bilan tanishdim va xizmat, ma’lumotlarga ishlov berish, to‘lov hamda qaytarish shartlarini qabul qilaman.',
      continueLabel: 'To‘lovga o‘tish',
      backLabel: 'Ortga',
      payLabel: 'To‘lovni tasdiqlash',
      doneLabel: 'Tayyor',
      closeLabel: 'Checkoutni yopish',
      secureText: 'To‘lov formasi kelajakda to‘lov provayderi orqali tokenizatsiya qilish uchun tayyorlangan.',
      successText: 'Xarid ssenariysi tayyor. Backend va to‘lov shlyuzi ulangandan so‘ng bu bosqich real to‘lov yaratadi.',
      fields: {
        name: 'Ism va familiya',
        email: 'Email',
        phone: 'Telefon',
        cardName: 'Kartadagi ism',
        cardNumber: 'Karta raqami',
        expiry: 'Muddat',
        cvc: 'CVC',
      },
    },
    items: pricingPlansUz,
  },
  tech: {
    title: 'Texnologiyalar',
    all: 'Barchasini ko‘rsatish',
    modal: techModalContent.uz,
  },
  cases: {
    title: 'Keyslar',
    details: 'Keysni ko‘rish',
    previous: 'Oldingi keys',
    next: 'Keyingi keys',
    items: withMeta([
      { tag: 'Tibbiyot', title: 'Tibbiy tasvirlar diagnostikasi', text: 'KT va MRT tasvirlarini tahlil qilish hamda diagnostika jarayonini avtomatlashtirish uchun AI-yechim.' },
      { tag: 'Fintech', title: 'Algoritmik savdo platformasi', text: 'Bozor tahlili va qaror qabul qilish uchun yuqori tezlikdagi AI-platforma.' },
      { tag: 'Industrial', title: 'Ishlab chiqarishda predictive maintenance', text: 'Uskuna nosozliklarini oldindan aniqlash uchun prediktiv analitika tizimi.' },
      { tag: 'Retail', title: 'Talabni prognozlash', text: 'Ombor, sotuv va marketing ssenariylarini rejalashtirish uchun ML-model.' },
      { tag: 'Security', title: 'Xavfsizlik monitoringi', text: 'Anomaliyalar va xavfli hodisalarni aniqlash uchun real vaqtli nazorat.' },
      { tag: 'Cloud', title: 'AI infratuzilma', text: 'Bulutli servislar, pipeline va kuzatuvchanlikka ega AI-mahsulot arxitekturasi.' },
      { tag: 'Telecom', title: 'Tarmoq yuklamasini prognozlash', text: 'Trafik cho‘qqilarini oldindan ko‘rish va tarmoq resurslarini optimallashtirish modellari.' },
      { tag: 'EdTech', title: 'Shaxsiy AI-tyutor', text: 'Moslashuvchan ta’lim, topshiriqlarni tekshirish va kontekstli maslahatlar uchun assistent.' },
      { tag: 'Finance', title: 'Skoring va risk baholash', text: 'Arizalarni baholash, mijozlarni segmentlash va xavflarni erta aniqlash uchun ML-tizim.' },
      { tag: 'Operations', title: 'Support xizmatini avtomatlashtirish', text: 'Murojaatlarni qayta ishlash, javob topish va ticket yo‘naltirish uchun AI-yordamchi.' },
    ], caseMeta),
  },
  why: {
    title: 'Nega Gemma Neuratech',
    items: withMeta([
      { title: 'Muhandislik yondashuvi', text: 'G‘oyani prototipdan production darajasidagi tizimgacha olib boramiz.' },
      { title: 'AI ekspertiza', text: 'Neyron tarmoqlar, data pipeline va model sifatiga e’tibor beramiz.' },
      { title: 'Shaffof jarayon', text: 'Bosqichlar, metrikalar va natijalar bo‘yicha aniq nazorat nuqtalari.' },
      { title: 'Ishonchlilik', text: 'Sifat, xavfsizlik va qo‘llab-quvvatlash standartlari.' },
    ], whyIcons.map((icon) => ({ icon }))),
  },
  process: {
    title: 'Loyihani qanday ishga tushiramiz',
    eyebrow: 'Jarayon',
    text: 'Tadqiqotdan production ishga tushirishgacha qisqa iteratsiyalar, shaffof metrikalar va aniq checkpointlar orqali harakat qilamiz.',
    items: withMeta([
      { step: '01', title: 'Muammo diagnostikasi', text: 'Biznes maqsad, ma’lumotlar, cheklovlar va muvaffaqiyat mezonlarini aniqlaymiz.' },
      { step: '02', title: 'Prototiplash', text: 'Tekshiriladigan model yig‘amiz, gipotezalarni sinaymiz va arxitekturani tanlaymiz.' },
      { step: '03', title: 'Muhandislik launch', text: 'Pipeline, API, monitoring va infratuzilmani barqaror ishlashga tayyorlaymiz.' },
      { step: '04', title: 'Rivojlantirish va support', text: 'Model sifatini yaxshilaymiz, metrikalarni kuzatamiz va mahsulotni rivojlantiramiz.' },
    ], processIcons.map((icon) => ({ icon }))),
  },
  lab: {
    title: 'Muhandislik bazasi',
    eyebrow: 'Laboratoriya',
    text: 'AI-tizimlarni ma’lumot versiyalash, kuzatuvchanlik, xavfsiz yetkazib berish va sifat nazorati bilan muhandislik mahsuloti sifatida quramiz.',
    cards: [
      { title: 'Data foundation', text: 'Sxemalar, tozalash, validatsiya, datasetlar va drift nazorati.', icon: 'i-layers' },
      { title: 'Model core', text: 'Eksperimentlar, o‘qitish, benchmark va production optimizatsiya.', icon: 'i-brain' },
      { title: 'Production loop', text: 'CI/CD, monitoring, alertlar va modellarni doimiy yaxshilash.', icon: 'i-gear' },
    ],
    metrics: ['Past latency', 'Xavfsiz pipeline', 'Observable AI'],
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Loyihangizni muhokama qilamizmi?',
    text: 'So‘rov yuboring yoki to‘g‘ridan-to‘g‘ri yozing - biz bog‘lanamiz va loyiha tafsilotlarini aniqlashtiramiz.',
    link: 'So‘rov yuborish',
    linkHref: '/contact',
    directEmailLabel: 'Aloqa pochtasi',
    directEmail: companyEmail,
    name: 'Ismingiz',
    email: 'Email',
    message: 'Xabar',
    submit: 'Xabar yuborish',
    success: 'Xabar yuborildi',
  },
  footer: {
    description: '"GEMMA NEURATECH IT" MCHJ. Raqamli mahsulotlar uchun IT-yechimlar, AI-tizimlar va muhandislik infratuzilmasini ishlab chiqamiz.',
    directionsLabel: 'Yo‘nalishlar',
    cta: 'Loyihani muhokama qilamizmi?',
    ctaButton: 'So‘rov yuborish',
    navTitle: 'Navigatsiya',
    servicesTitle: 'Xizmatlar',
    technologiesTitle: 'Texnologiyalar',
    contactsTitle: 'Kontaktlar',
    location: 'O‘zbekiston, Toshkent sh., Olmazor tumani, Chig‘atoy Oqtepa MFY, Taxtapul Darvoza ko‘chasi, 396-uy',
    email: companyEmail,
    phone: companyPhone,
    contactItems: ['"GEMMA NEURATECH IT" MCHJ', 'Ro‘yxatdan o‘tgan: 07.05.2026', 'IT Park rezidenti: 26.05.2026 dan'],
    services: ['Neyron tarmoqlar ishlab chiqish', 'Edge AI', 'Taqsimlangan hisoblash', 'AI xavfsizligi'],
    technologies: ['Neyron tarmoqlar', 'Kompyuter ko‘rishi', 'Bulutli hisoblash', 'MLOps pipeline'],
    copyright: '© 2026 Gemma Neuratech IT. Barcha huquqlar himoyalangan.',
    tagline: 'Advanced Neural Architectures',
  },
}
