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
            { lang: 'FR', term: 'logement supplémentaire' },
        ],
    },
    {
        key: 'addit_accomm',
        data: [
            { lang: 'EN', term: 'Additional accommodation' },
            { lang: 'FR', term: 'logement supplémentaire' },
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
        place_activity: [
            'Anglais + 5 activités/sem'
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
                is_mandatory: true,
                name: 'base_rate',
                cost_options: [
                    { unit: 'week', amt: 2, cost: 2410 },
                    { unit: 'week', amt: 3, cost: 2410 },
                    { unit: 'week', amt: 4, cost: 2410 },
                ],
            },
            {
                is_mandatory: true,
                name: 'registration',
                cost: 265,
            },
            {
                is_mandatory: false,
                name: 'addit_accomm',
                cost_options: [
                    { unit: 'week', amt: 1, cost: 425 },
                    { unit: 'night', amt: 1, cost: 61 },
                ],
            },
            {
                is_mandatory: true,
                name: 'materials',
                cost: 195,
            },
            {
                is_mandatory: true,
                name: 'accomm_fee',
                cost: 200,
            },
            {
                is_mandatory: true,
                name: 'admin_cost',
                cost: 120,
            },
            {
                is_mandatory: false,
                name: 'transfers',
                cost_options: [
                    { unit: 'SYD/Sydney', amt: .5, cost: 230 },
                    { unit: 'BNE/Byron Bay', amt: .5, cost: 325 },
                    { unit: 'BNE/Noosa', amt: .5, cost: 325 },
                    { unit: 'OOL/Byron Bay', amt: .5, cost: 180 },
                    { unit: 'OOL/Noosa', amt: .5, cost: 400 },
                ],
            },
        ],
    },
    {
        _id: 2,
        course_code: 'BNE-1013',
        lang: 'EN',
        place: [
            'Brisbane',
        ],
        place_activity: [
            'Anglais + 5 activités/sem'
        ],
        detail: [
            'Anglais 08:30 - 12:00',
            'Activité : 12:30 - 16:30',
        ],
        periods: [
            { start: '2026-07-06', end: '2026-07-24' },
        ],
        age_range: [ 10, 13 ],
        costs: [
            {
                is_mandatory: true,
                name: 'base_rate',
                cost_options: [
                    { unit: 'week', amt: 2, cost: 1850 },
                    { unit: 'week', amt: 3, cost: 2500 },
                ],
            },
            {
                is_mandatory: true,
                name: 'registration',
                cost: 265,
            },
            {
                is_mandatory: false,
                name: 'addit_accomm',
                cost_options: [
                    { unit: 'week', amt: 1, cost: 425 },
                    { unit: 'night', amt: 1, cost: 61 },
                ],
            },
            {
                is_mandatory: true,
                name: 'materials',
                cost: 195,
            },
            {
                is_mandatory: true,
                name: 'accomm_fee',
                cost: 200,
            },
            {
                is_mandatory: true,
                name: 'admin_cost',
                cost: 120,
            }
        ],
    },
    {
        _id: 3,
        course_code: 'BNE-0717',
        lang: 'EN',
        place: [
            'Brisbane',
        ],
        place_activity: [
            'Anglais + 6 activités/sem'
        ],
        detail: [
            'Anglais 08:50 - 12:50',
            'Activité: 13:00 - 15:00',
        ],
        periods: [
            { start: '2026-01-11', end: '2026-02-21' },
            { start: '2026-03-23', end: '2026-04-02' },
            { start: '2026-07-06', end: '2026-08-15' },
        ],
        age_range: [ 7, 17 ],
        costs: [
            {
                is_mandatory: true,
                name: 'base_rate',
                cost_options: [
                    { unit: 'week', amt: 2, cost: 2570 },
                    { unit: 'week', amt: 3, cost: 3855 },
                    { unit: 'week', amt: 4, cost: 5140 },
                ],
            },
            {
                is_mandatory: true,
                name: 'registration',
                cost: 270,
            },
            {
                is_mandatory: false,
                name: 'addit_accomm',
                cost_options: [
                    { unit: 'week', amt: 1, cost: 465 },
                    { unit: 'night', amt: 1, cost: 67 },
                ],
            },
            {
                is_mandatory: true,
                name: 'materials',
                /* TODO: diff costs per week */
            },
            {
                is_mandatory: true,
                name: 'accomm_fee',
                cost: 290,
            },
            {
                is_mandatory: true,
                name: 'admin_cost',
                cost: 120,
            },
            {
                is_mandatory: false,
                name: 'special_meal',
                cost_options: [
                    { unit: 'week', amt: 1, cost: 90 },
                ],
            },
            {
                is_mandatory: false,
                name: 'assistance_UM',
                cost: 150,
            },
        ],
    },
    {
        _id: 4,
        course_code: 'BNGC-0717',
        lang: 'EN',
        place: [
            'Brisbane',
            'Gold Coast',
        ],
        place_activity: [
            'Anglais + 6 activités/sem'
        ],
        detail: [
            'Anglais 08:50 - 12:50',
            'Activité : 13:00 - 15:00',
        ],
        periods: [
            { start: '2026-07-06', end: '2026-07-24' },
        ],
        age_range: [ 10, 13 ],
        costs: [
            {
                is_mandatory: true,
                name: 'base_rate',
                cost_options: [
                    { unit: 'week', amt: 2, cost: 1850 },
                    { unit: 'week', amt: 3, cost: 2500 },
                ],
            },
            {
                is_mandatory: true,
                name: 'registration',
                cost: 265,
            },
            {
                is_mandatory: false,
                name: 'addit_accomm',
                cost_options: [
                    { unit: 'week', amt: 1, cost: 425 },
                    { unit: 'night', amt: 1, cost: 61 },
                ],
            },
            {
                is_mandatory: false,
                name: 'materials',
                cost: 195,
            },
            {
                is_mandatory: false,
                name: 'accomm_fee',
                cost: 200,
            },
            {
                is_mandatory: false,
                name: 'admin_cost',
                cost: 120,
            }
        ],
    },
]


