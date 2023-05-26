/**
 * 
 * Lo que hace este es remplazar los valores de un objeto o un string
 */

const remplacer = (text, variables) => {

    if(typeof content === 'boolean') return content

    if (typeof text === 'array') {
        return text.map((item) => {
            return remplacer(item, variables)
        })
    }

    if(typeof text === 'object') {
        let objs = Object.keys(text).reduce((acc, key) => {
            acc[key] = remplacer(text[key], variables)
            return acc
        }, {})

        const plane = (obj) => {
            return Object.keys(obj).reduce((acc, key) => {
                if (typeof obj[key] === 'object') {
                    acc[key] = {
                        ...plane(obj[key])
                    }
                } else {
                    acc[key] = obj[key]
                }
                return acc
            }, [])
        }
        
        return plane(objs)
        
    }
    
    return text.replace(/{([^}]+)}/g, (match, key) => {
        return variables[key] || match
    })
    
}

// Usage
const text = "Hello {name}, how are you?, I'm {name}"
const obj = [
    { name: 'Requested by', value: '{requester} s' },
    { name: "I'm {name}", value: "John" },
    { name: "joper {joper}", value: "John", joper: "joper {kamerr}" }
] 
const variable = { name: "John", joper: "joper", requester: "requester", kamerr: "kamerr" }
const resultObj = remplacer(obj, variable)
const result = remplacer(text, variable)

console.log(resultObj)
console.log(result)