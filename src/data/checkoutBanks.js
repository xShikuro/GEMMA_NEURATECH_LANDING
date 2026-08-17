export const checkoutBanks = [
  {
    id: 'hamkor',
    name: 'Hamkor Bank',
    shortName: 'HB',
    acquiringId: 'hamkor-bank-acquiring',
    paymentCreatePath: '/api/v1/payments/hamkorbank/create',
  },
  {
    id: 'orient-finans',
    name: 'Orient Finans Bank',
    shortName: 'OF',
    acquiringId: 'orient-finans-bank-acquiring',
    paymentCreatePath: '/api/v1/payments/orientfinansbank/create',
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
  },
]
