const translations = [
    {
        key: 'base_rate',
        data: [
            { lang: 'EN', term: 'Base rate' },
            { lang: 'FR', term: 'Base rate' },
        ],
    },
    {
        key: 'registration',
        data: [
            { lang: 'EN', term: 'Registration fees' },
            { lang: 'FR', term: 'Frais d\'inscription' },
        ],
    },
    {
        key: 'addit_accomm',
        data: [
            { lang: 'EN', term: 'Additional accommodation' },
            { lang: 'FR', term: 'Taux de base' },
        ],
    },
    {
        key: '',
        data: [
            { lang: 'EN', term: '' },
            { lang: 'FR', term: '' },
        ],
    },
]

export const data = [
    {
        _id: 1,
        course_code: 'SBN-1317',
        lang: 'EN',
        place: [
            'Sydney',
            'Byron Bay',
            'Noosa',
        ],
        detail: [
            'Anglais 08:30 - 12:00',
            'Activité : 12:30 - 16:30',
        ],
        periods: [
            { start: '2026-03-23', end: '2026-04-05' },
            { start: '2026-07-06', end: '2026-08-23' },
        ],
        age_range: [ 13, 17 ],
        costs: [
            {
                type: 'mandatory',
                name: 'base_rate',
                cost_options: [
                    { unit: 'week', amt: 2, cost: 2410 },
                    { unit: 'week', amt: 3, cost: 2410 },
                    { unit: 'week', amt: 4, cost: 2410 },
                ],
            },
            {
                type: 'mandatory',
                name: 'registration',
                cost: 265,
            },
            {
                type: 'optional',
                name: 'addit_accomm',
                cost_options: [
                    { unit: 'week', amt: 1, cost: 425 },
                    { unit: 'night', amt: 1, cost: 61 },
                ],
            },
            {
                type: 'optional',
                name: 'materials',
                cost: 195,
            },
            {
                type: 'optional',
                name: 'accomm_fee',
                cost: 200,
            },
            {
                type: 'optional',
                name: 'admin_cost',
                cost: 120,
            }
        ],
    },
    {
        _id: 2,
        course_code: 'BNE-1013',
        lang: 'EN',
        place: [
            'Brisbane',
        ],
        detail: [
            'Anglais 08:30 - 12:00',
            'Activité : 12:30 - 16:30',
        ],
        periods: [
            { start: '2026-07-06', end: '2026-07-24' },
        ],
        age_range: [ 10, 13 ],
        base_rate: [
            { weeks: 2, price: 1850 },
            { weeks: 3, price: 2500 },
        ]
    },
]


