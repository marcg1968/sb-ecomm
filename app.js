const mod = require('./data.js')

const generate_data_struct = () => {
    // const struct = [ ...data ][0]
    // const struct = (Array.from(data))[0]
    // const struct = Array.from(mod.data)
    const { data } = mod
    // console.log(6, struct)
    return data[0]
}

const main = () => {
    const data = generate_data_struct()
    // console.log(10, data)
    let struct = {}
    Object.keys(data).forEach((key, i) => {
        console.log(17, i, `key=${key}: ${typeof data[key]}`)
        if (typeof data[key] === 'number') return struct[key] = 0
        if (typeof data[key] === 'string') return struct[key] = ''
        if (typeof data[key] === 'object') {
            // console.log(21, i, `${key}: ${Array.isArray(data[key]) ? 'ARRAY' : ''}`)
            if (!Array.isArray(data[key])) return /* NEEDS to be an array */
            struct[key] = []
            // console.log(24, data[key])
            /* is it an arr of scalars or objects? */
            if (typeof data[key][0] === 'number' || typeof data[key][0] === 'string') {
                // struct[key].push('')
                struct[key] = ['']
            }
            if (typeof data[key][0] === 'object') {
                Object.keys(data[key][0]).forEach((key2, j) => {
                    console.log(33, { struct })
                    console.log(34, j, `key2=${key2} ${typeof data[key][0][key2]}`)
                    if (typeof data[key][0][key2] === 'string') struct[key] = [ ...struct[key], { [key2]: `TEXT` } ]
                    if (typeof data[key][0][key2] === 'number') struct[key] = [ ...struct[key], { [key2]: `DECIMAL` } ]

                })
            }
        }
    })
    console.log(42, JSON.stringify(struct, null, 2))
}

main()
