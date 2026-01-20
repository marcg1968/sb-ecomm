const mod = require('./data.js')

const generate_data_struct = () => {
    // const struct = [ ...data ][0]
    // const struct = (Array.from(data))[0]
    // const struct = Array.from(mod.data)
    const { data } = mod
    // console.log(6, struct)
    return data[0]
}

const main0 = () => {
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

const isScalar = val => {
    if (val === null) return null
    const type = typeof val
    return type !== 'object' && type !== 'function'
}

/* gather names of attributes with scalar value or array of scalars */
const recurse = (struct, prefix = '') => {
    console.log(51, { struct, prefix })
    let collect = []
    for (const key in struct) {}
    Object.keys(struct).forEach((key, i) => {
        const e = struct[key]
        let is_scalar = isScalar(e),
            hasNestedObj
        if (!is_scalar && Array.isArray(e)) {
            hasNestedObj = e.reduce((a, c, i) => {
                // console.log(58, i, c, typeof c)
                return !isScalar(c)
            }, false)
            console.log(61, { key, is_scalar, hasNestedObj })

            /* recursive case */
            if (hasNestedObj) {
                // collect = [ ...collect, ...(recurse(e[0], `${key}[]`)) ]
                collect = [ ...collect, ...(recurse(e[0], `${prefix ? `${prefix}.` : ''}${key}[]`)) ]
            }
        }

        /* base case */
        if (is_scalar || !hasNestedObj) {
            // return collect = [ ...collect, `${prefix}.${key}` ]
            // return collect = [ ...collect, [ ...prefix.split('.'), key ].join('.') ]
            return collect = [ ...collect, prefix ? `${prefix}.${key}` : key ]
        }
    })
    return collect
}

const main = () => {
    const data = generate_data_struct()

    let output = recurse(data)
    console.log(77, output)
}

main()


/*  */
function flattenObject(obj, prefix = '') {
  let flattened = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const currentKey = prefix ? `${prefix}.${key}` : key;
      const value = obj[key];

      // Base case: if the value is not an object (or is null/array), add it directly
      if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        flattened[currentKey] = value;
      }
      // Recursive case: if the value is an object, call the function recursively
      else {
        Object.assign(flattened, flattenObject(value, currentKey));
      }
    }
  }

  return flattened;
}
