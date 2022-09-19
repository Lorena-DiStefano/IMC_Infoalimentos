/* let nombre = prompt("Por favor, ingresa tu nombre")
const SALUDO = "¡HOLA " + (nombre).toUpperCase() + "! \nSelecciona la opción 1 del menú\nPodrás realizar más de un cálculo\nSelecciona el resto de las opciones para más información"
alert(SALUDO) */
//==============================
let listaMenu = [
    {
        nombre: "Calcular IMC /Nuevo Cálculo"
    },
    {
        nombre: "Mis resultados"
    },
    {
        nombre: "Qué debo saber sobre el índice de Quetelet"
    },
    {
        nombre: "Finalizar"
    },
]

const listResultados = []

class Resultado {
    constructor(valor, clase) {
        this.valor = valor
        this.clase = clase
    }
}

let opciones

//
//opciones = parseInt(prompt("elegí")) 

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

//} while (opciones !== 4)


//=====DOM=====MENU DE OPCIONES====================

console.log(listaMenu)

const menu = document.querySelector('div.menu')

const orderList = document.createElement('ol')
menu.append(orderList)

for (let item of listaMenu) {
    let itemLi = document.createElement('li')
    itemLi.className = "menu_list"
    itemLi.innerHTML = `<p>${item.nombre}</p>`
    orderList.appendChild(itemLi)
}

const opcion = document.createElement('input')
opcion.type = "text"
opcion.className = "menu_input"
opcion.id = 'opciones'
menu.appendChild(opcion)

const btn_submit1 = document.createElement('input')
btn_submit1.type = "submit"
btn_submit1.className = "submit"
btn_submit1.value = "Aceptar"
menu.appendChild(btn_submit1)

//=====DOM=====CALCULO====================

const calc = document.querySelector('div.calc')

const calc1 = document.createElement('div')
calc.append(calc1)

const calc_t1 = document.createElement('h3')
calc_t1.innerHTML = `<p>Ingresa tu altura expresada en metros</p>`
calc1.append(calc_t1)

const btn_alt = document.createElement('input')
btn_alt.type = "text"
btn_alt.className = "input"
btn_alt.id = "altura"
btn_alt.placeholder = "Ejemplo: 1.64"
calc1.append(btn_alt)


const calc2 = document.createElement('div')
calc.append(calc2)

const calc_t2 = document.createElement('h3')
calc_t2.innerHTML = `<p>Ingresa tu peso expresado en kilogramos</p>`
calc2.append(calc_t2)

const btn_peso = document.createElement('input')
btn_peso.type = "text"
btn_peso.className = "input"
btn_peso.id = "peso"
btn_peso.placeholder = "Ejemplo: 75.2"
calc2.append(btn_peso)

const btn_submit2 = document.createElement('input')
btn_submit2.type = "submit"
btn_submit2.className = "submit"
btn_submit2.value = "Calcular"
calc2.append(btn_submit2)

//===DOM=== RESULTADO

const result = document.querySelector('div.result')

const result_mje = document.createElement('p')
result_mje.innerHTML=`<p>Devuelve indice IMC - Diagnóstico - Rango de peso normal</p>`
result.append(result_mje)

//===DOM=== LISTA DE RESULTADOS

const lista_result = document.querySelector('div.lista_result')

const lista = document.createElement('p')
lista.innerHTML=`<p>Devuelve lista de resultados obtenidos</p>`
lista_result.append(lista)

