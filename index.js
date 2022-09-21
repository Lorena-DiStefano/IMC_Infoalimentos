const listResultados = []
class Resultado {
    constructor(valor, clase, pesoMin, pesoMax) {
        this.valor = valor
        this.clase = clase
        this.pesoMin = pesoMin
        this.pesoMax = pesoMax
    }
}

let listaMenu = [
    {
        nombre: "Calcular IMC"
    },
    {
        nombre: "Listá tus resultados!"
    },
    {
        nombre: "Qué debo saber sobre el índice de Quetelet"
    },
    {
        nombre: "Finalizar"
    },
]

const final= document.querySelector('div.menu_btn')

const menu = document.querySelector('#menu')
const orderList = document.createElement('ol')
menu.append(orderList)

for (let item of listaMenu) {
    let itemLi = document.createElement('li')
    itemLi.className = "menu_list"
    itemLi.innerHTML = `<p>${item.nombre}</p>`
    orderList.appendChild(itemLi)
}

final.insertAdjacentElement('beforebegin',orderList)

let menu_input = document.getElementById("menu_input")
let btn_menu = document.getElementById("btn_menu")

let opciones
btn_menu.onclick = (event) => validarOpcion(event)

function validarOpcion(event) {
    event.preventDefault()
    opciones = parseInt(menu_input.value)

    if (opciones == 1) {
        alert("Opción 1: devolverá modal con formulario de cálculo")
    } else
        if (opciones == 2) {
            let result = "Tus Resultados"
            let counter = 1
            listResultados.forEach((el) => {
                result += `\n${counter}. IMC: ${el.valor} - ${el.clase} \nRango de peso Normal: ${el.pesoMin}Kg / ${el.pesoMax}Kg\n`
                counter++
                return result
            })
            alert(result)

        } else
            if (opciones == 3) {
                alert("Opción 3: Modal con información sobre la tabla de Quetelet")

            } else
                if (opciones == 4) {
                    alert("Opción 4: Modal con Saludo")
                } else
                    alert("Ingresó una opción no válida")
}


let inputAltura = document.querySelector('#inputAltura')
let inputPeso = document.querySelector('#inputPeso')
let btn_calcular = document.querySelector('#calcular')
let btn_newCalc = document.querySelector('#newCalc')
console.log(btn_newCalc)

btn_newCalc.onclick=(event)=> resetearDatos(event)

function resetearDatos(event){
    event.preventDefault()
    document.querySelector('#inputAltura').value=""
    document.querySelector('#inputPeso').value=""
}

btn_calcular.onclick = (event) => validarDatos(event)

function validarDatos(event) {
    event.preventDefault()
    let altura = parseFloat(inputAltura.value).toFixed(2)
    let peso = parseFloat(inputPeso.value).toFixed(2)
    let imc = (peso / Math.pow(altura, 2)).toFixed(2)
    let pesoMin = (Math.pow(altura, 2) * 18.5).toFixed(2)
    let pesoMax = (Math.pow(altura, 2) * 25).toFixed(2)

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

    const Type =
        imc <= 16 ? 0 :
            imc >= 16 && imc < 17 ? 1 :
                imc >= 17 && imc < 18.5 ? 2 :
                    imc >= 18.5 && imc < 25 ? 3 :
                        imc >= 25 && imc < 30 ? 4 :
                            imc >= 30 && imc < 35 ? 5 :
                                imc >= 35 && imc < 40 ? 6 :
                                    imc >= 40 ? 7 : null
    alert(`Tu IMC es de ${imc} e indica ${diagnostico[Type]} \nTu peso normal está entre ${pesoMin}Kg y ${pesoMax}Kg`)

    listResultados.push(new Resultado(imc, (diagnostico[Type]), pesoMin, pesoMax))

    console.log(listResultados)
}

