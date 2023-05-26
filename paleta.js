const paleta = {
    "<0>": "\x1b[97m", //white
    "<1>": "\x1b[32m", //green
    "<2>": "\x1b[33m", //yellow
    "<3>": "\x1b[94m", //blue
    "<4>": "\x1b[35m", //purple
    "<5>": "\x1b[36m", //cyan
    "<6>": "\x1b[31m", //red
}

const regex = /<\d>/g
let str = "<0>hola <1>como <2>estas <3>{guild}"

function asd({ text, variables }) {
    let result = text.replace(regex, (match) => {
        return paleta[match]
    })

    for (const [key, value] of Object.entries(variables)) {
        result = result.replace(`{${key}}`, value)
    }

    console.log(result);
}

asd({ text: str, variables: { guild: "sdfsdf" } })
