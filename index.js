let nombre = prompt("Por favor, ingresa tu nombre")
const SALUDO = "¡HOLA " + (nombre).toUpperCase() + "! \nSelecciona la opción 1 del menú\nPodrás realizar más de un cálculo\nSelecciona el resto de las opciones para más información"
alert(SALUDO)

let menu = [
    "Calcular IMC",
    "Mis resultados",
    "Qué debo saber sobre el índice de Quetelet"
]

function crearMenu() {
    let mensaje = "Menú de opciones"
    let count = 1

    for (let item of menu) {
        mensaje += `\n${count}. ${item}`
        count++
    }
    mensaje += `\n${count}. Finalizar`
    return mensaje
}

const listResultados = []

class Resultado {
    constructor(valor, clase) {
        this.valor = valor
        this.clase = clase
    }
}

let opciones

do {
    opciones = parseInt(prompt(crearMenu()))

    switch (opciones) {
        case 1:
            let altura = parseFloat(prompt("Ingresa tu altura expresada en metros" + "\nEjemplo:1.64"))
            let peso = parseFloat(prompt("Ingresa tu peso expresado en kg" + "\nEjemplo:75.20"))
            const ALT = Math.pow(altura, 2).toFixed(2)
            const IMC = (peso / ALT).toFixed(2)
            function calculaPesoNormal(ALT, valor2) {
                const pesoNormal = (ALT * valor2).toFixed(2)
                return pesoNormal
            }

            let diagnostico = [
                "Delgadez Extrema",
                "Delgadez Moderada",
                "Delgadez Leve",
                "Peso Normal",
                "Sobrepeso",
                "Obesidad leve",
                "Obesidad Moderada",
                "Obesidad Mórbida"
            ]
            //Operador condicional Ternario
            const TYPE =
                IMC <= 16 ? 0 :
                    IMC >= 16 && IMC < 17 ? 1 :
                        IMC >= 17 && IMC < 18.5 ? 2 :
                            IMC >= 18.5 && IMC < 25 ? 3 :
                                IMC >= 25 && IMC < 30 ? 4 :
                                    IMC >= 30 && IMC < 35 ? 5 :
                                        IMC >= 35 && IMC < 40 ? 6 :
                                            IMC >= 40 ? 7 : null

            alert(`Tu IMC es de ${IMC} e indica ${diagnostico[TYPE]} \nTu peso normal es entre ${calculaPesoNormal(ALT, 18.5)}kg. y ${calculaPesoNormal(ALT, 25)}kg.`)

            listResultados.push(new Resultado(IMC, (diagnostico[TYPE])))
            break
        case 2:
            let result = "Tus resultados:"
            let counter = 1
            listResultados.forEach((el) => {
                result += `\n${counter}. IMC ${el.valor} - ${el.clase}`
                counter++
                return result
            })
            alert(result)
            break
        case 3:
            alert("IMPORTANTE: La tabla o índice de Quetelet, fue creada en 1832. \nNo contempla edad, género, porcentaje de grasa corporal o masa muscular. \nConsiderando que el criterio sobre 'la belleza de los cuerpos' varía según la época y las culturas; te propongo que hablemos de 'SALUD'.\nUna 'BUENA SALUD' no es una cuestión de 'ESTETICA', consiste en realizar chequeos periódicos, los cuales te porporcionarán resultados certeros sobre lo que tu organismo necesita.")
            break
        case 4:
            alert("Gracias por visitar nuestra página")
            break
    }

} while (opciones !== 4)
