const companyName = '"GEMMA NEURATECH IT" MCHJ'
const companyAddressRu = 'Узбекистан, г. Ташкент, Алмазарский район, МФЙ Чилтогон, ул. Тахтапул Дарвоза, дом 396-У'
const companyAddressEn = '396-U, Takhtapul Darvoza St., Chiltogon mahalla, Almazar district, Tashkent, Uzbekistan'
const companyAddressUz = 'O‘zbekiston, Toshkent sh., Olmazor tumani, Chig‘atoy Oqtepa MFY, Taxtapul Darvoza ko‘chasi, 396-uy'
const companyEmail = 'Gemmaneuratech@gmail.com'
const supportEmail = 'support@gemmaneuratech.uz'

export const legalContent = {
  ru: {
    offer: {
      eyebrow: 'Юридические документы',
      title: 'Публичная оферта',
      subtitle: 'Оказание IT-услуг, разработка AI-систем и предоставление доступа к платформе GEMMA NEURATECH.',
      updated: 'Редакция от 05.08.2026',
      intro: [
        `Настоящая публичная оферта публикуется ${companyName} в соответствии с законодательством Республики Узбекистан и является официальным предложением заключить договор в электронной форме.`,
        'Оплата услуги, тарифа или инвойса считается полным и безоговорочным акцептом условий оферты.',
      ],
      meta: [
        { label: 'Исполнитель', value: companyName },
        { label: 'Статус', value: 'IT Park Uzbekistan Resident' },
        { label: 'Адрес', value: companyAddressRu },
        { label: 'Контакт', value: companyEmail },
      ],
      sections: [
        {
          title: '1. Термины и акцепт',
          items: [
            'Оферта адресована физическим лицам, индивидуальным предпринимателям и юридическим лицам, приобретающим цифровые продукты и IT-услуги для профессиональной, коммерческой или предпринимательской деятельности.',
            'Акцептом признается 100% предварительная оплата по инвойсу или через платежный сценарий сайта.',
            'Заказчик подтверждает, что ознакомился с условиями оказания услуг, оплаты, возврата, обработки данных и технологическими рисками.',
          ],
        },
        {
          title: '2. Предмет договора',
          items: [
            'Исполнитель оказывает услуги в сфере информационных технологий, разработки систем искусственного интеллекта, цифровых платформ и инженерной инфраструктуры.',
            'Готовые IT-услуги предоставляются в функционально завершенном виде; индивидуальные разработки выполняются по согласованному техническому заданию или инвойсу.',
            'В состав работ могут входить AI-модели, web-приложения, интерфейсы, API, облачная инфраструктура, MLOps-пайплайны, системы безопасности и интеграции.',
          ],
        },
        {
          title: '3. Этапы индивидуальной разработки',
          items: [
            'Предпроектный анализ: оценка задачи, сбор данных, анализ рисков и формирование технического плана.',
            'Прототипирование: создание тестовой версии продукта для проверки гипотез и демонстрации промежуточного результата.',
            'Внедрение и запуск: финальная инженерная реализация, интеграция в инфраструктуру Заказчика, мониторинг и базовое техническое обслуживание.',
          ],
        },
        {
          title: '4. Права и обязанности Исполнителя',
          items: [
            'Исполнитель обязуется оказать услуги в соответствии с техническим заданием, инвойсом и применимым законодательством Республики Узбекистан.',
            'Готовый цифровой продукт, исходный код, лицензионные ключи, доступы или материалы направляются на электронную почту Заказчика.',
            'Исполнитель вправе требовать 100% предоплату, переносить сроки при задержке данных со стороны Заказчика и привлекать третьих лиц, сохраняя ответственность за результат.',
          ],
        },
        {
          title: '5. Права и обязанности Заказчика',
          items: [
            'Заказчик обязан предоставить достоверные исходные данные, доступы к инфраструктуре и действующий адрес электронной почты.',
            'Заказчик проверяет цифровой продукт в течение 5 рабочих дней с момента получения и направляет мотивированное уведомление при выявлении ошибок или ненадлежащего качества.',
            'Заказчик использует продукт только в законных целях, не выполняет обратную разработку закрытого кода и обеспечивает сохранность логинов, паролей и ключей доступа.',
          ],
        },
        {
          title: '6. Оплата и стоимость услуг',
          items: [
            'Стоимость услуг определяется тарифами на сайте или фиксируется в индивидуальном инвойсе.',
            'Расчеты с резидентами Республики Узбекистан осуществляются в национальной валюте - сум.',
            'Оплата производится банковским переводом, через интегрированные платежные системы сайта или банковские карты, если соответствующий способ доступен.',
            'Комиссии банков, платежных систем и расходы на перевод оплачиваются Заказчиком, если иное не согласовано отдельно.',
          ],
        },
        {
          title: '7. Передача результата и приемка',
          items: [
            'После подтверждения 100% оплаты Исполнитель передает результат, доступы, ключи, исходный код или иные материалы на электронную почту Заказчика.',
            'По факту оказания услуг может быть оформлен акт оказанных услуг, в том числе через электронный документооборот.',
            'Если в течение 5 рабочих дней не получен мотивированный письменный отказ, услуги считаются оказанными надлежащим образом и принятыми.',
          ],
        },
        {
          title: '8. Возврат средств',
          items: [
            'Возврат возможен при обоснованной претензии о ненадлежащем качестве, направленной в течение 5 рабочих дней с момента передачи продукта.',
            'При возврате удерживаются фактически понесенные расходы: налоги, банковские и платежные комиссии, сторонние сервисы и затраченные инженерные часы.',
            'После истечения 5 рабочих дней требования о возврате не принимаются; обращения рассматриваются в рамках технического обслуживания.',
          ],
        },
        {
          title: '9. AI-риски и ограничение ответственности',
          items: [
            'Заказчик понимает вероятностный характер AI-систем: модели могут выдавать неточные, неожиданные или требующие проверки результаты.',
            'Исполнитель не гарантирует достижение конкретных коммерческих показателей и не отвечает за управленческие решения Заказчика, принятые на основе AI-результатов.',
            'Максимальная имущественная ответственность Исполнителя ограничена суммой, фактически оплаченной по конкретному инвойсу.',
          ],
        },
        {
          title: '10. Конфиденциальность и персональные данные',
          items: [
            'Акцепт оферты означает согласие на обработку персональных, корпоративных, контактных, технических и финансовых данных для исполнения договора.',
            'Данные используются для идентификации Заказчика, оказания услуг, оформления документов, поддержки, платежей и улучшения платформы.',
            'Передача третьим лицам допускается только для исполнения услуг, работы платежей, технических сервисов или по законному запросу государственных органов.',
          ],
        },
        {
          title: '11. Форс-мажор и технологические сбои',
          items: [
            'Форс-мажор включает чрезвычайные обстоятельства, глобальные сбои интернета, кибератаки, сбои облачных провайдеров, платежных шлюзов и ограничения государственных органов.',
            'Пострадавшая сторона уведомляет другую сторону по электронной почте в течение 3 календарных дней.',
            'На период форс-мажора исполнение обязательств приостанавливается без применения штрафных санкций.',
          ],
        },
        {
          title: '12. Споры, изменение и действие оферты',
          items: [
            'Претензии рассматриваются в досудебном порядке в течение 15 календарных дней.',
            'При недостижении соглашения спор передается в суд по месту регистрации Исполнителя в соответствии с законодательством Республики Узбекистан.',
            'Исполнитель вправе изменять оферту, публикуя новую редакцию на сайте. Обязательства, возникшие до изменения, исполняются по согласованным условиям.',
          ],
        },
      ],
    },
    privacy: {
      eyebrow: 'Юридические документы',
      title: 'Политика конфиденциальности',
      subtitle: 'Как GEMMA NEURATECH IT обрабатывает, хранит и защищает данные клиентов и пользователей сайта.',
      updated: 'Редакция от 05.08.2026',
      intro: [
        'Политика описывает порядок обработки персональных, корпоративных, контактных, технических и финансовых данных при использовании сайта, оплате услуг и взаимодействии с компанией.',
        `Оператор данных: ${companyName}. Контакт для обращений по данным: ${supportEmail}.`,
      ],
      meta: [
        { label: 'Оператор', value: companyName },
        { label: 'Адрес', value: companyAddressRu },
        { label: 'Support', value: supportEmail },
        { label: 'Срок хранения', value: 'Срок договора и 5 лет после прекращения для бухгалтерских и налоговых целей' },
      ],
      sections: [
        {
          title: '1. Какие данные обрабатываются',
          items: [
            'Идентификационные данные: ФИО, данные организации, реквизиты и сведения, необходимые для оформления договора или документов.',
            'Контактные данные: email, телефон, адреса, сообщения из форм обратной связи и переписка с компанией.',
            'Технические и финансовые данные: IP-адрес, технические идентификаторы, сведения о платежах, транзакциях и выбранных услугах.',
          ],
        },
        {
          title: '2. Цели обработки',
          items: [
            'Идентификация клиента, оказание IT-услуг, создание инвойсов, оформление актов и иных документов.',
            'Поддержка, коммуникация по проекту, обработка заявок, улучшение работы сайта и цифровых продуктов.',
            'Проведение платежей, учет операций, выполнение требований законодательства и защита прав компании.',
          ],
        },
        {
          title: '3. Хранение и локализация',
          items: [
            'Данные хранятся на защищенных серверах и в рабочих системах, используемых для оказания услуг.',
            'Компания принимает разумные правовые, организационные и технические меры для защиты данных от неправомерного доступа, изменения, раскрытия или уничтожения.',
            'Трансграничная передача допускается только в объеме, необходимом для работы цифровых продуктов, платежей, облачных сервисов и технической поддержки.',
          ],
        },
        {
          title: '4. Передача третьим лицам',
          items: [
            'Данные могут передаваться платежным провайдерам, банкам, хостингам, облачным сервисам, подрядчикам и техническим партнерам только для исполнения услуг.',
            'Передача государственным органам осуществляется при наличии законного запроса.',
            'Использование данных в маркетинговых целях без отдельного согласия клиента не осуществляется.',
          ],
        },
        {
          title: '5. Права пользователя',
          items: [
            'Пользователь может запросить доступ к своим данным, их уточнение, ограничение обработки или удаление в случаях, предусмотренных законом.',
            'Отзыв согласия возможен через официальный контакт компании, но может сделать дальнейшее оказание услуг невозможным.',
            'Запросы по данным направляются на email поддержки с указанием сути обращения и данных для идентификации заявителя.',
          ],
        },
        {
          title: '6. Безопасность аккаунтов и доступов',
          items: [
            'Клиент отвечает за сохранность переданных ему логинов, паролей, токенов, ключей API и иных учетных данных.',
            'О компрометации доступа необходимо незамедлительно уведомить компанию.',
            'Компания не отвечает за убытки, возникшие из-за нарушения клиентом правил цифровой безопасности.',
          ],
        },
      ],
    },
    refund: {
      eyebrow: 'Юридические документы',
      title: 'Возврат средств',
      subtitle: 'Условия проверки качества, претензий и возврата оплаты за IT-услуги и цифровые продукты GEMMA NEURATECH IT.',
      updated: 'Редакция от 05.08.2026',
      intro: [
        'Возврат средств регулируется публичной офертой GEMMA NEURATECH IT и применяется к IT-услугам, индивидуальной разработке и готовым цифровым продуктам.',
        'Покупка цифровой услуги предполагает 100% предварительную оплату и последующую проверку результата в установленный срок.',
      ],
      meta: [
        { label: 'Срок проверки', value: '5 рабочих дней с момента передачи результата' },
        { label: 'Канал обращения', value: supportEmail },
        { label: 'Основание', value: 'Обоснованная претензия о ненадлежащем качестве' },
        { label: 'Исполнитель', value: companyName },
      ],
      sections: [
        {
          title: '1. Когда возможен возврат',
          items: [
            'Возврат возможен, если Заказчик выявил ненадлежащее качество цифрового продукта или IT-услуги и направил официальную мотивированную претензию в течение 5 рабочих дней.',
            'Претензия должна описывать проблему, содержать подтверждающие материалы и позволять Исполнителю воспроизвести ошибку или проверить качество результата.',
            'Если претензия признана обоснованной, возврат выполняется в порядке, предусмотренном офертой и применимым законодательством.',
          ],
        },
        {
          title: '2. Когда возврат не производится',
          items: [
            'По истечении 5 рабочих дней с момента передачи результата требования о возврате не принимаются.',
            'Возврат не производится, если результат соответствует согласованному техническому заданию, инвойсу или описанию выбранного тарифа.',
            'Субъективное несоответствие ожиданиям Заказчика, изменение бизнес-задачи или отказ от проекта после начала работ не являются самостоятельным основанием для полного возврата.',
          ],
        },
        {
          title: '3. Удерживаемые расходы',
          items: [
            'При согласованном возврате из суммы могут удерживаться фактически понесенные расходы Исполнителя.',
            'К таким расходам относятся налоги, банковские комиссии, комиссии платежных систем, стоимость сторонних сервисов, облачной инфраструктуры и фактически затраченные инженерные часы.',
            'Размер удержаний определяется исходя из объема уже выполненных работ и подтвержденных расходов.',
          ],
        },
        {
          title: '4. Порядок обращения',
          items: [
            `Обращение направляется на ${supportEmail} с указанием имени, email, выбранной услуги, даты оплаты и описания проблемы.`,
            'Исполнитель рассматривает претензию в разумный срок и может запросить дополнительные данные, доступы, скриншоты, технические записи или иную информацию.',
            'Если возможно устранить недостаток без возврата, обращение может быть обработано в рамках технического обслуживания.',
          ],
        },
        {
          title: '5. Срок и способ возврата',
          items: [
            'Одобренный возврат производится тем же способом, которым была выполнена оплата, либо иным согласованным сторонами способом.',
            'Срок фактического зачисления зависит от банка, платежного провайдера и правил платежной системы.',
            'Банковские и платежные комиссии могут не возвращаться, если они уже удержаны третьими лицами.',
          ],
        },
      ],
    },
  },
}

legalContent.en = {
  offer: {
    eyebrow: 'Legal documents',
    title: 'Public Offer',
    subtitle: 'IT services, AI system development, and access to the GEMMA NEURATECH platform.',
    updated: 'Version dated 05.08.2026',
    intro: [
      `This public offer is published by ${companyName} under the laws of the Republic of Uzbekistan and is an official proposal to conclude an electronic agreement.`,
      'Payment for a service, tariff, or invoice is treated as full and unconditional acceptance of the offer terms.',
    ],
    meta: [
      { label: 'Contractor', value: companyName },
      { label: 'Status', value: 'IT Park Uzbekistan Resident' },
      { label: 'Address', value: companyAddressEn },
      { label: 'Contact', value: companyEmail },
    ],
    sections: [
      { title: '1. Terms and acceptance', items: ['The offer is addressed to individuals, entrepreneurs, and legal entities purchasing digital products and IT services for professional or commercial use.', 'Acceptance means 100% prepayment by invoice or through the website payment flow.', 'The customer confirms review of the service, payment, refund, data processing, and technology risk terms.'] },
      { title: '2. Subject of the agreement', items: ['The contractor provides IT services, AI systems, digital platforms, and engineering infrastructure.', 'Ready-made IT services are delivered in a completed functional form; custom development is performed under an approved specification or invoice.', 'Work may include AI models, web applications, interfaces, APIs, cloud infrastructure, MLOps pipelines, security systems, and integrations.'] },
      { title: '3. Custom development stages', items: ['Pre-project analysis: task assessment, data collection, risk analysis, and technical planning.', 'Prototyping: building a test version to validate hypotheses and show intermediate results.', 'Implementation and launch: final engineering work, integration, monitoring, and basic technical maintenance.'] },
      { title: '4. Contractor rights and duties', items: ['The contractor performs services according to the specification, invoice, and applicable laws of Uzbekistan.', 'Deliverables, source code, license keys, accesses, or materials are sent to the customer email.', 'The contractor may require 100% prepayment, shift deadlines if required data is delayed, and involve third parties while remaining responsible for the result.'] },
      { title: '5. Customer rights and duties', items: ['The customer must provide accurate source data, infrastructure access, and a valid email address.', 'The customer reviews the digital product within 5 business days after receipt and sends a reasoned notice if defects are found.', 'The customer uses the product only for lawful purposes, does not reverse-engineer closed code, and protects credentials and access keys.'] },
      { title: '6. Payment and service price', items: ['The price is defined by website tariffs or an individual invoice.', 'Payments with Uzbekistan residents are made in the national currency, UZS.', 'Payment may be made by bank transfer, website payment systems, or bank cards if the method is available.', 'Bank and payment system fees are paid by the customer unless separately agreed otherwise.'] },
      { title: '7. Delivery and acceptance', items: ['After 100% payment is confirmed, deliverables, accesses, keys, source code, or materials are sent to the customer email.', 'A service act may be issued after services are delivered, including through electronic document systems.', 'If no reasoned written refusal is received within 5 business days, the services are deemed properly delivered and accepted.'] },
      { title: '8. Refunds', items: ['Refunds are possible only for a justified quality claim sent within 5 business days after delivery.', 'Approved refunds are reduced by actual costs: taxes, bank and payment fees, third-party services, and engineering hours already spent.', 'After 5 business days, refund claims are not accepted; requests are handled as technical maintenance.'] },
      { title: '9. AI risks and liability limitation', items: ['The customer understands the probabilistic nature of AI systems: models may produce inaccurate, unexpected, or review-required results.', 'The contractor does not guarantee specific commercial outcomes and is not liable for business decisions made using AI outputs.', 'The contractor’s maximum property liability is limited to the amount actually paid under the specific invoice.'] },
      { title: '10. Confidentiality and personal data', items: ['Acceptance includes consent to process personal, corporate, contact, technical, and financial data for contract performance.', 'Data is used for identification, service delivery, documents, support, payments, and platform improvement.', 'Third-party transfer is allowed only for service delivery, payments, technical providers, or lawful government requests.'] },
      { title: '11. Force majeure and technology failures', items: ['Force majeure includes extraordinary events, global internet outages, cyberattacks, cloud provider failures, payment gateway failures, and government restrictions.', 'The affected party notifies the other party by email within 3 calendar days.', 'Obligations are suspended during force majeure without penalties.'] },
      { title: '12. Disputes, changes, and validity', items: ['Claims are reviewed through a pre-trial procedure within 15 calendar days.', 'Unresolved disputes are submitted to the court at the contractor’s registered location under Uzbekistan law.', 'The contractor may update the offer by publishing a new version on the website. Existing obligations remain governed by agreed terms.'] },
    ],
  },
  privacy: {
    eyebrow: 'Legal documents',
    title: 'Privacy Policy',
    subtitle: 'How GEMMA NEURATECH IT processes, stores, and protects client and website user data.',
    updated: 'Version dated 05.08.2026',
    intro: ['This policy describes processing of personal, corporate, contact, technical, and financial data when using the website, paying for services, and communicating with the company.', `Data operator: ${companyName}. Data requests: ${supportEmail}.`],
    meta: [
      { label: 'Operator', value: companyName },
      { label: 'Address', value: companyAddressEn },
      { label: 'Support', value: supportEmail },
      { label: 'Retention', value: 'Agreement term and 5 years after termination for accounting and tax purposes' },
    ],
    sections: [
      { title: '1. Data we process', items: ['Identification data: full name, company information, requisites, and data required for contracts or documents.', 'Contact data: email, phone, addresses, contact form messages, and correspondence.', 'Technical and financial data: IP address, technical identifiers, payment data, transaction history, and selected services.'] },
      { title: '2. Processing purposes', items: ['Customer identification, IT service delivery, invoices, acts, and other documents.', 'Support, project communication, request handling, website and product improvement.', 'Payments, accounting, legal compliance, and protection of company rights.'] },
      { title: '3. Storage and localization', items: ['Data is stored on protected servers and work systems used to provide services.', 'The company applies reasonable legal, organizational, and technical measures against unauthorized access, modification, disclosure, or destruction.', 'Cross-border transfer is allowed only as needed for digital products, payments, cloud services, and technical support.'] },
      { title: '4. Third-party transfer', items: ['Data may be transferred to payment providers, banks, hosting providers, cloud services, contractors, and technical partners only to perform services.', 'Data is provided to government authorities only upon lawful request.', 'Marketing use without separate customer consent is not performed.'] },
      { title: '5. User rights', items: ['Users may request access, correction, restriction, or deletion of their data where provided by law.', 'Consent withdrawal is possible through the official company contact, but may make service delivery impossible.', 'Data requests should be sent to support email with the request details and identification information.'] },
      { title: '6. Account and access security', items: ['The client is responsible for protecting logins, passwords, tokens, API keys, and other credentials.', 'The company must be notified immediately about access compromise.', 'The company is not liable for losses caused by the client’s violation of digital security rules.'] },
    ],
  },
  refund: {
    eyebrow: 'Legal documents',
    title: 'Refund Policy',
    subtitle: 'Quality review, claims, and refund terms for GEMMA NEURATECH IT services and digital products.',
    updated: 'Version dated 05.08.2026',
    intro: [
      'Refunds are governed by the GEMMA NEURATECH IT public offer and apply to IT services, custom development, and ready-made digital products.',
      'A digital service purchase is made on a 100% prepayment basis and is followed by a quality review period.',
    ],
    meta: [
      { label: 'Review period', value: '5 business days after delivery' },
      { label: 'Request channel', value: supportEmail },
      { label: 'Grounds', value: 'Reasoned claim about improper quality' },
      { label: 'Contractor', value: companyName },
    ],
    sections: [
      { title: '1. When a refund is possible', items: ['A refund is possible if the customer identifies improper quality of a digital product or IT service and sends an official reasoned claim within 5 business days.', 'The claim must describe the issue, include supporting materials, and allow the contractor to reproduce the defect or verify the quality of the result.', 'If the claim is accepted as justified, the refund is processed under the public offer and applicable law.'] },
      { title: '2. When a refund is not provided', items: ['After 5 business days from delivery, refund claims are not accepted.', 'A refund is not provided if the result matches the approved specification, invoice, or description of the selected tariff.', 'Subjective mismatch with expectations, a changed business task, or refusal to continue the project after work has started is not an independent ground for a full refund.'] },
      { title: '3. Deducted expenses', items: ['If a refund is approved, actual contractor expenses may be deducted from the refunded amount.', 'Such expenses include taxes, bank fees, payment system fees, third-party services, cloud infrastructure, and engineering hours already spent.', 'The deduction amount is determined based on completed work and documented expenses.'] },
      { title: '4. How to submit a request', items: [`Requests are sent to ${supportEmail} with the name, email, selected service, payment date, and issue description.`, 'The contractor reviews the claim and may request additional data, accesses, screenshots, technical logs, or other information.', 'If the defect can be fixed without a refund, the request may be handled within technical maintenance.'] },
      { title: '5. Refund time and method', items: ['An approved refund is made by the same payment method or another method agreed by the parties.', 'Actual crediting time depends on the bank, payment provider, and payment system rules.', 'Bank and payment system fees may be non-refundable if already charged by third parties.'] },
    ],
  },
}

legalContent.uz = {
  offer: {
    eyebrow: 'Yuridik hujjatlar',
    title: 'Ommaviy oferta',
    subtitle: 'IT-xizmatlar, AI-tizimlarni ishlab chiqish va GEMMA NEURATECH platformasidan foydalanish shartlari.',
    updated: '05.08.2026 tahriri',
    intro: [
      `Ushbu ommaviy oferta ${companyName} tomonidan O‘zbekiston Respublikasi qonunchiligiga muvofiq e’lon qilinadi va elektron shaklda shartnoma tuzish bo‘yicha rasmiy taklif hisoblanadi.`,
      'Xizmat, tarif yoki invoys bo‘yicha to‘lov oferta shartlarini to‘liq va so‘zsiz qabul qilish hisoblanadi.',
    ],
    meta: [
      { label: 'Ijrochi', value: companyName },
      { label: 'Maqom', value: 'IT Park Uzbekistan rezidenti' },
      { label: 'Manzil', value: companyAddressUz },
      { label: 'Aloqa', value: companyEmail },
    ],
    sections: [
      { title: '1. Atamalar va aksept', items: ['Oferta raqamli mahsulotlar va IT-xizmatlarni professional yoki tijorat maqsadida xarid qiluvchi jismoniy shaxslar, tadbirkorlar va yuridik shaxslarga qaratilgan.', 'Aksept invoys bo‘yicha yoki sayt to‘lov jarayoni orqali 100% oldindan to‘lov amalga oshirilganda yuzaga keladi.', 'Buyurtmachi xizmat, to‘lov, qaytarish, ma’lumotlarga ishlov berish va texnologik xatarlar shartlari bilan tanishganini tasdiqlaydi.'] },
      { title: '2. Shartnoma predmeti', items: ['Ijrochi axborot texnologiyalari, sun’iy intellekt tizimlari, raqamli platformalar va muhandislik infratuzilmasi bo‘yicha xizmatlar ko‘rsatadi.', 'Tayyor IT-xizmatlar yakunlangan funksional ko‘rinishda taqdim etiladi; individual ishlab chiqish texnik topshiriq yoki invoys asosida bajariladi.', 'Ish tarkibiga AI-modellar, web-ilovalar, interfeyslar, API, cloud infratuzilma, MLOps pipeline, xavfsizlik tizimlari va integratsiyalar kirishi mumkin.'] },
      { title: '3. Individual ishlab chiqish bosqichlari', items: ['Loyiha oldi tahlili: vazifani baholash, ma’lumot yig‘ish, xatarlarni tahlil qilish va texnik reja tuzish.', 'Prototiplash: gipotezalarni tekshirish va oraliq natijani ko‘rsatish uchun test versiya yaratish.', 'Joriy etish va ishga tushirish: yakuniy muhandislik ishlari, integratsiya, monitoring va bazaviy texnik xizmat.'] },
      { title: '4. Ijrochining huquq va majburiyatlari', items: ['Ijrochi xizmatlarni texnik topshiriq, invoys va O‘zbekiston Respublikasi qonunchiligiga muvofiq bajaradi.', 'Natija, dastlabki kod, litsenziya kalitlari, kirish huquqlari yoki materiallar Buyurtmachining elektron pochtasiga yuboriladi.', 'Ijrochi 100% oldindan to‘lov talab qilishga, Buyurtmachi ma’lumotlarni kechiktirganda muddatlarni ko‘chirishga va uchinchi shaxslarni jalb qilishga haqli.'] },
      { title: '5. Buyurtmachining huquq va majburiyatlari', items: ['Buyurtmachi ishonchli dastlabki ma’lumotlar, infratuzilmaga kirish va amaldagi email manzilini taqdim etishi shart.', 'Buyurtmachi mahsulotni olganidan keyin 5 ish kuni ichida tekshiradi va kamchilik aniqlansa asoslantirilgan bildirishnoma yuboradi.', 'Buyurtmachi mahsulotdan faqat qonuniy maqsadlarda foydalanadi, yopiq kodni teskari muhandislik qilmaydi va login, parol hamda kalitlarni himoya qiladi.'] },
      { title: '6. To‘lov va xizmat qiymati', items: ['Xizmat narxi saytdagi tariflar yoki individual invoys bilan belgilanadi.', 'O‘zbekiston rezidentlari bilan hisob-kitoblar milliy valyutada - so‘mda amalga oshiriladi.', 'To‘lov bank o‘tkazmasi, saytga ulangan to‘lov tizimlari yoki bank kartalari orqali amalga oshirilishi mumkin.', 'Bank va to‘lov tizimlari komissiyalari, agar alohida kelishilmagan bo‘lsa, Buyurtmachi tomonidan to‘lanadi.'] },
      { title: '7. Natijani topshirish va qabul qilish', items: ['100% to‘lov tasdiqlangach, natija, ruxsatlar, kalitlar, dastlabki kod yoki boshqa materiallar Buyurtmachining email manziliga yuboriladi.', 'Xizmat ko‘rsatilgach dalolatnoma rasmiylashtirilishi mumkin, shu jumladan elektron hujjat aylanish tizimlari orqali.', '5 ish kuni ichida asoslantirilgan yozma rad etish kelmasa, xizmatlar lozim darajada ko‘rsatilgan va qabul qilingan hisoblanadi.'] },
      { title: '8. Mablag‘ni qaytarish', items: ['Qaytarish faqat mahsulot sifati bo‘yicha asosli talab 5 ish kuni ichida yuborilganda mumkin.', 'Tasdiqlangan qaytarishda soliqlar, bank va to‘lov komissiyalari, uchinchi tomon xizmatlari hamda sarflangan muhandislik soatlari chegirib qolinadi.', '5 ish kunidan keyin qaytarish talablari qabul qilinmaydi; murojaatlar texnik xizmat doirasida ko‘rib chiqiladi.'] },
      { title: '9. AI-xatarlar va javobgarlik chegarasi', items: ['Buyurtmachi AI-tizimlar ehtimoliy xususiyatga ega ekanini tushunadi: modellar noaniq yoki tekshirish talab qiladigan natijalar berishi mumkin.', 'Ijrochi aniq tijorat natijasini kafolatlamaydi va AI natijalariga asoslangan biznes qarorlar uchun javobgar bo‘lmaydi.', 'Ijrochining maksimal mulkiy javobgarligi aniq invoys bo‘yicha amalda to‘langan summa bilan cheklanadi.'] },
      { title: '10. Maxfiylik va shaxsga doir ma’lumotlar', items: ['Ofertani qabul qilish shartnomani bajarish uchun shaxsiy, korporativ, aloqa, texnik va moliyaviy ma’lumotlarga ishlov berishga rozilikni anglatadi.', 'Ma’lumotlar identifikatsiya, xizmat ko‘rsatish, hujjatlar, support, to‘lovlar va platformani yaxshilash uchun ishlatiladi.', 'Uchinchi shaxslarga uzatish faqat xizmatni bajarish, to‘lov, texnik servislar yoki davlat organlarining qonuniy so‘rovi uchun mumkin.'] },
      { title: '11. Fors-major va texnologik nosozliklar', items: ['Fors-major favqulodda holatlar, global internet uzilishlari, kiberhujumlar, cloud provayderlar yoki to‘lov shlyuzlari nosozligi va davlat cheklovlarini o‘z ichiga oladi.', 'Jabr ko‘rgan tomon 3 kalendar kuni ichida email orqali boshqa tomonni xabardor qiladi.', 'Fors-major davrida majburiyatlar jarimasiz to‘xtatib turiladi.'] },
      { title: '12. Nizolar, o‘zgartirish va amal qilish', items: ['Talabnomalar 15 kalendar kuni ichida sudgacha tartibda ko‘rib chiqiladi.', 'Kelishuvga erishilmasa, nizo Ijrochi ro‘yxatdan o‘tgan joydagi sudda O‘zbekiston qonunchiligiga muvofiq ko‘rib chiqiladi.', 'Ijrochi saytda yangi tahrirni e’lon qilish orqali ofertani o‘zgartirishga haqli. Oldingi majburiyatlar kelishilgan shartlar asosida bajariladi.'] },
    ],
  },
  privacy: {
    eyebrow: 'Yuridik hujjatlar',
    title: 'Maxfiylik siyosati',
    subtitle: 'GEMMA NEURATECH IT mijozlar va sayt foydalanuvchilari ma’lumotlarini qanday qayta ishlashi, saqlashi va himoya qilishi.',
    updated: '05.08.2026 tahriri',
    intro: ['Siyosat sayt, to‘lov va kompaniya bilan aloqa jarayonida shaxsiy, korporativ, aloqa, texnik va moliyaviy ma’lumotlarga ishlov berish tartibini belgilaydi.', `Ma’lumotlar operatori: ${companyName}. Ma’lumotlar bo‘yicha murojaatlar: ${supportEmail}.`],
    meta: [
      { label: 'Operator', value: companyName },
      { label: 'Manzil', value: companyAddressUz },
      { label: 'Support', value: supportEmail },
      { label: 'Saqlash muddati', value: 'Shartnoma muddati va soliq/buxgalteriya maqsadlari uchun bekor qilingandan keyin 5 yil' },
    ],
    sections: [
      { title: '1. Qanday ma’lumotlar qayta ishlanadi', items: ['Identifikatsiya ma’lumotlari: F.I.Sh., kompaniya ma’lumotlari, rekvizitlar va hujjatlar uchun zarur ma’lumotlar.', 'Aloqa ma’lumotlari: email, telefon, manzillar, aloqa formasi xabarlari va yozishmalar.', 'Texnik va moliyaviy ma’lumotlar: IP-manzil, texnik identifikatorlar, to‘lovlar, tranzaksiyalar va tanlangan xizmatlar.'] },
      { title: '2. Qayta ishlash maqsadlari', items: ['Mijozni identifikatsiya qilish, IT-xizmatlar ko‘rsatish, invoyslar, dalolatnomalar va boshqa hujjatlarni rasmiylashtirish.', 'Support, loyiha bo‘yicha aloqa, so‘rovlarni ko‘rib chiqish, sayt va mahsulotlarni yaxshilash.', 'To‘lovlar, hisobga olish, qonun talablarini bajarish va kompaniya huquqlarini himoya qilish.'] },
      { title: '3. Saqlash va lokalizatsiya', items: ['Ma’lumotlar xizmat ko‘rsatish uchun ishlatiladigan himoyalangan serverlar va ishchi tizimlarda saqlanadi.', 'Kompaniya ruxsatsiz kirish, o‘zgartirish, oshkor qilish yoki yo‘q qilishdan himoya qilish uchun oqilona texnik va tashkiliy choralar ko‘radi.', 'Transchegaraviy uzatish faqat raqamli mahsulotlar, to‘lovlar, cloud servislar va texnik support uchun zarur hajmda amalga oshiriladi.'] },
      { title: '4. Uchinchi shaxslarga uzatish', items: ['Ma’lumotlar to‘lov provayderlari, banklar, hostinglar, cloud servislar, pudratchilar va texnik hamkorlarga faqat xizmatlarni bajarish uchun uzatilishi mumkin.', 'Davlat organlariga ma’lumotlar faqat qonuniy so‘rov bo‘lganda beriladi.', 'Alohida roziliksiz marketing maqsadlarida foydalanilmaydi.'] },
      { title: '5. Foydalanuvchi huquqlari', items: ['Foydalanuvchi qonunda nazarda tutilgan hollarda ma’lumotlariga kirish, ularni tuzatish, cheklash yoki o‘chirishni so‘rashi mumkin.', 'Rozilikni rasmiy kontakt orqali qaytarib olish mumkin, ammo bu xizmatni davom ettirishni imkonsiz qilishi mumkin.', 'Ma’lumotlar bo‘yicha so‘rovlar support emailga yuboriladi, unda murojaat mazmuni va shaxsni aniqlash ma’lumotlari ko‘rsatiladi.'] },
      { title: '6. Akkauntlar va kirish xavfsizligi', items: ['Mijoz login, parol, token, API kalitlari va boshqa kirish ma’lumotlarini himoya qilish uchun javobgar.', 'Kirish ma’lumotlari buzilganda kompaniyaga darhol xabar berish kerak.', 'Mijoz raqamli xavfsizlik qoidalarini buzishi oqibatida yuzaga kelgan zararlar uchun kompaniya javobgar emas.'] },
    ],
  },
  refund: {
    eyebrow: 'Yuridik hujjatlar',
    title: 'Mablag‘ni qaytarish',
    subtitle: 'GEMMA NEURATECH IT xizmatlari va raqamli mahsulotlari bo‘yicha sifat tekshiruvi, e’tirozlar va qaytarish shartlari.',
    updated: '05.08.2026 tahriri',
    intro: [
      'Mablag‘ni qaytarish GEMMA NEURATECH IT ommaviy ofertasi bilan tartibga solinadi va IT-xizmatlar, individual ishlab chiqish hamda tayyor raqamli mahsulotlarga qo‘llanadi.',
      'Raqamli xizmat 100% oldindan to‘lov asosida xarid qilinadi va natija belgilangan muddatda tekshiriladi.',
    ],
    meta: [
      { label: 'Tekshiruv muddati', value: 'Natija topshirilgandan keyin 5 ish kuni' },
      { label: 'Murojaat kanali', value: supportEmail },
      { label: 'Asos', value: 'Sifat bo‘yicha asoslantirilgan e’tiroz' },
      { label: 'Ijrochi', value: companyName },
    ],
    sections: [
      { title: '1. Qachon qaytarish mumkin', items: ['Buyurtmachi raqamli mahsulot yoki IT-xizmat sifati lozim darajada emasligini aniqlasa va 5 ish kuni ichida rasmiy asoslantirilgan e’tiroz yuborsa, qaytarish mumkin.', 'E’tiroz muammoni tasvirlashi, tasdiqlovchi materiallarni o‘z ichiga olishi va Ijrochiga xatoni takrorlash yoki natija sifatini tekshirish imkonini berishi kerak.', 'E’tiroz asosli deb topilsa, qaytarish oferta va amaldagi qonunchilikka muvofiq amalga oshiriladi.'] },
      { title: '2. Qachon qaytarish amalga oshirilmaydi', items: ['Natija topshirilgandan keyin 5 ish kuni o‘tgach, qaytarish talablari qabul qilinmaydi.', 'Natija tasdiqlangan texnik topshiriq, invoys yoki tanlangan tarif tavsifiga mos bo‘lsa, qaytarish amalga oshirilmaydi.', 'Subyektiv kutilmalar mos kelmasligi, biznes vazifaning o‘zgarishi yoki ish boshlanganidan keyin loyihadan voz kechish to‘liq qaytarish uchun mustaqil asos hisoblanmaydi.'] },
      { title: '3. Chegiriladigan xarajatlar', items: ['Qaytarish tasdiqlansa, Ijrochining haqiqatda qilingan xarajatlari summadan chegirilishi mumkin.', 'Bunday xarajatlarga soliqlar, bank komissiyalari, to‘lov tizimlari komissiyalari, uchinchi tomon xizmatlari, cloud infratuzilma va sarflangan muhandislik soatlari kiradi.', 'Chegirma miqdori bajarilgan ish hajmi va tasdiqlangan xarajatlar asosida belgilanadi.'] },
      { title: '4. Murojaat yuborish tartibi', items: [`Murojaat ${supportEmail} manziliga ism, email, tanlangan xizmat, to‘lov sanasi va muammo tavsifi bilan yuboriladi.`, 'Ijrochi e’tirozni ko‘rib chiqadi va qo‘shimcha ma’lumotlar, kirishlar, skrinshotlar, texnik yozuvlar yoki boshqa axborotni so‘rashi mumkin.', 'Kamchilikni qaytarishsiz bartaraf etish mumkin bo‘lsa, murojaat texnik xizmat doirasida ko‘rib chiqilishi mumkin.'] },
      { title: '5. Qaytarish muddati va usuli', items: ['Tasdiqlangan qaytarish to‘lov qilingan usulda yoki tomonlar kelishgan boshqa usulda amalga oshiriladi.', 'Pulning hisobga tushish muddati bank, to‘lov provayderi va to‘lov tizimi qoidalariga bog‘liq.', 'Bank va to‘lov tizimlari komissiyalari uchinchi shaxslar tomonidan ushlab qolingan bo‘lsa, qaytarilmasligi mumkin.'] },
    ],
  },
}
