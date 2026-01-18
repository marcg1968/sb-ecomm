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
        console.log(17, i, `${key}: ${typeof data[key]}`)
        if (typeof data[key] === 'number') return struct[key] = 0
        if (typeof data[key] === 'string') return struct[key] = ''
        if (typeof data[key] === 'object') {
            // console.log(21, i, `${key}: ${Array.isArray(data[key]) ? 'ARRAY' : ''}`)
            if (!Array.isArray(data[key])) return /* NEEDS to be an array */
            struct[key] = []
            // console.log(24, data[key])
            /* is it an arr of scalars or objects? */
            if (typeof data[key][0] === 'number' || typeof data[key][0] === 'string') {
                struct[key].push('')
            }
            if (typeof data[key][0] === 'object') {
                Object.keys(data[key][0]).forEach((key2, j) => {
                    console.log(31, { struct })
                    console.log(32, j, `${key2}`)
                    if (typeof data[key][key2] === 'number') struct[key].push({ [key2]: 0 })
                    if (typeof data[key][key2] === 'string') struct[key].push({ [key2]: '' })
                })
            }
        }
    })
    console.log(99, struct)
}

main()
