let nombre = prompt("Por favor, ingresa tu nombre")
const SALUDO = "¡HOLA " + (nombre).toUpperCase() + "! \nPara poder calcular tu IMC necesitamos conocer tu ALTURA y PESO"
alert(SALUDO)

function calculador() {
    let altura = parseFloat(prompt("Ingresa tu altura expresada en metros" + "\nEjemplo:1.64"))
    let peso = parseFloat(prompt("Ingresa tu peso expresado en kg" + "\nEjemplo:75.20"))

    const ALT = Math.pow(altura, 2)
    const IMC = (peso/ALT).toFixed(2)

    function calculaPesoNormal(ALT, valor1) {
        const pesoNormal = (ALT * valor1).toFixed(2)
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

    alert(`Tu IMC es de ${IMC} e indica ${diagnostico[TYPE]}`)

    let menu = [
        "Nuevo cálculo",
        "Mi rango de peso Normal",
        "Qué debo saber sobre el índice de Quetelet? "
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

    let opciones
    const calculationArray=[]
    

    do {
        opciones = parseInt(prompt(crearMenu()))

        switch (opciones) {
            case 1:
                calculador()
                opciones = 4
                break
            case 2:
                alert(`Tu peso normal es entre ${calculaPesoNormal(ALT, 18.5)}kg. y ${calculaPesoNormal(ALT, 25)}kg.`)
                break
            case 3:
                alert("IMPORTANTE: La tabla o índice de Quetelet, fue creada en 1832. \nNo contempla edad, género, porcentaje de grasa corporal o masa muscular. \nConsiderando que el criterio sobre 'la belleza de los cuerpos' varía según la época y las culturas; te propongo que hablemos de 'SALUD'.\nUna 'BUENA SALUD' no es una cuestión de 'ESTETICA', consiste en realizar chequeos periódicos, los cuales te porporcionarán resultados certeros sobre lo que tu organismo necesita.")
                break
            case 4:
                alert("Gracias por visitar nuestra página")
                console.log(calculationArray)
                break
        }

    } while (opciones !== 4)
}

calculador()

































