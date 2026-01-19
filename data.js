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
        key: 'addit_course',
        data: [
            { lang: 'EN', term: 'Additional courses' },
            { lang: 'FR', term: 'cours supplémentaire' },
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
        key: 'special_meal',
        data: [
            { lang: 'EN', term: 'Special meal' },
            { lang: 'FR', term: 'Repas spécial' },
        ],
    },
    {
        key: 'optional',
        data: [
            { lang: 'EN', term: 'optional' },
            { lang: 'FR', term: 'Optionnel' },
        ],
    },
    {
        key: 'unaccomp_minor',
        data: [
            { lang: 'EN', term: 'Unaccompanied minor' },
            { lang: 'FR', term: 'mineur nonaccompagné' },
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

/*
LOGIC:
- "is_mandatory: false" means OPTIONAL,
- each element in the costs: [] must have "cost" key which is either a SCALAR or an ARRAY of the following
  = cost: [
        { unit: 'week', amt: 2, cost: 2410 },
        { unit: 'week', amt: 3, cost: 2410 },
        { unit: 'week', amt: 4, cost: 2410 },
    ],
- "costs_footnotes: []" at the top level can be referenced by position in the arr if nec,
inside the element itself inside the "costs: []" arr, e.g. "costs_footnote: 0",
*/
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
                cost: [
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
                name: 'addit_course',
                cost_on_request: true,
            },
            {
                is_mandatory: false,
                name: 'addit_accomm',
                cost_on_request: true,
                cost: [
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
                cost: [
                    { unit: 'SYD/Sydney', amt: .5, cost: 230 },
                    { unit: 'BNE/Byron Bay', amt: .5, cost: 325 },
                    { unit: 'BNE/Noosa', amt: .5, cost: 325 },
                    { unit: 'OOL/Byron Bay', amt: .5, cost: 180 },
                    { unit: 'OOL/Noosa', amt: .5, cost: 400 },
                ],
            },
            {
                is_mandatory: false,
                name: 'special_meal',
                cost: [
                    { unit: 'week', amt: 1, cost: 425 },
                    { unit: 'night', amt: 1, cost: 61 },
                ],
            },
            {
                is_mandatory: false,
                name: 'unaccomp_minor',
                cost: 150,
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
        costs_footnotes: [
            'Séjour minimum de 2 semaines / maximum de 3 semaines - Aucun logement - Séjour avec parents ou tuteurs'
        ],
        costs: [
            {
                is_mandatory: true,
                name: 'base_rate',
                cost: [
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
                name: 'addit_course',
                costs_footnote: 0,
            },
            {
                is_mandatory: false,
                name: 'addit_accomm',
                costs_footnote: 0,
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
                cost: [
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
                cost: [
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
                cost: [
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
                cost: [
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
                cost: [
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


