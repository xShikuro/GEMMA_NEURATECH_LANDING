export const checkoutBanks = [
  {
    id: 'hamkor',
    name: 'Hamkor Bank',
    shortName: 'HB',
    acquiringId: 'hamkor-bank-acquiring',
    paymentCreatePath: '/api/v1/payments/hamkorbank/create',
    disabled: true,
  },
  {
    id: 'orient-finans',
    name: 'Orient Finans Bank',
    shortName: 'OF',
    acquiringId: 'orient-finans-bank-acquiring',
    paymentCreatePath: '/api/v1/payments/orientfinansbank/create',
    disabled: true,
  },
  {
    id: 'kapital',
    name: 'Rahmat',
    shortName: 'RA',
    acquiringId: 'multicard-kapital-acquiring',
    paymentCreatePath: '/api/v1/payments/multicard/create',
  },
  {
    id: 'sqb',
    name: 'SQB',
    shortName: 'SQB',
    acquiringId: 'sqb-acquiring',
    paymentCreatePath: '/api/v1/payments/create',
    disabled: true,
  },
]
