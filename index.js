const ingresarAltura = document.getElementById('inputAltura')

let lblAltura = document.createElement('lbl')
lblAltura.innerHTML = `<label for="inputAlt" class="form_label">Ingresa tu altura expresada en metros.</label>`
ingresarAltura.append(lblAltura)
let inputAltura = document.createElement('input')
inputAltura.type = "text"
inputAltura.id = "altura"
inputAltura.placeholder = "Ejemplo: 1.64"
inputAltura.className = "form_input"
ingresarAltura.append(inputAltura)

const ingresarPeso = document.getElementById('inputPeso')

let lblPeso = document.createElement('lbl')
lblPeso.innerHTML = `<label for=inputPeso" class="form_label">Ingresa tu peso expresado en kilogramos.</label>`
ingresarPeso.append(lblPeso)
let inputPeso = document.createElement('input')
inputPeso.type = "text"
inputPeso.id = "altura"
inputPeso.placeholder = "Ejemplo: 75.2"
inputPeso.className = "form_input"
ingresarPeso.append(inputPeso)

const btnsCalculo = document.getElementById('btnsCalculo')

let btn_calcular = document.createElement('button')
btn_calcular.type = "button"
btn_calcular.className = "botones"
btn_calcular.innerText = "Calcular"
btnsCalculo.append(btn_calcular)

let btn_newCalc = document.createElement('button')
btn_newCalc.type = "button"
btn_newCalc.className = "botones"
btn_newCalc.innerText = "Nuevo Calculo"
btnsCalculo.append(btn_newCalc)

btn_newCalc.onclick = (event) => resetearDatos(event)
function resetearDatos(event) {
    event.preventDefault()
    inputAltura.value = ""
    inputPeso.value = ""
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

    Swal.fire({
        position: 'top-end',
        text: `Tu IMC es de ${imc} e indica ${diagnostico[Type]} \nTu peso normal está entre ${pesoMin}Kg y ${pesoMax}Kg`,
        padding: '1em',
        background: 'url(./images/bguno-d.jpg) no-repeat',
        showConfirmButtonColor: true,
        confirmButtonText: 'ok!',
        confirmButtonColor: '#91af7b',
    })

    listResultados.push(new Resultado(imc, (diagnostico[Type]), pesoMin, pesoMax))

    const resultInStorage = JSON.stringify(listResultados)
    sessionStorage.setItem("result_ss", resultInStorage)
}



const listResultados = []

class Resultado {
    constructor(valor, clase, pesoMin, pesoMax) {
        this.valor = valor
        this.clase = clase
        this.pesoMin = pesoMin
        this.pesoMax = pesoMax
    }
}

const btn_resultado = document.getElementById('btn_2')

btn_resultado.onclick = (event) => imprimirResultados(event)
const resultContent = document.getElementById('result-content')

const btnCerrarResultados = document.getElementById('btn_close_result')
console.log(btnCerrarResultados)
let listResulados2 = ""


function imprimirResultados() {
    resultContent.innerHTML = ""
    listResulados2 = JSON.parse(sessionStorage.getItem('result_ss'))
    let count = 1
    listResultados.forEach(element => {
        let itemL1 = document.createElement('p')
        itemL1.innerHTML = `${count}. IMC: ${element.valor} = ${element.clase}`
        count++
        resultContent.append(itemL1)
        let itemL2 = document.createElement('p')
        itemL2.innerHTML = `Peso normal: entre ${element.pesoMin}kg y ${element.pesoMax} kg`
        resultContent.append(itemL2)
    });
}

const btn_4 = document.getElementById('btn_4')

btn_4.onclick = () => {
    Swal.fire({
        showClass: {
            popup: 'swal2-show',
            backdrop: 'swal2-backdrop-show',
            icon: 'swal2-icon-show'
        },
        title: 'Muchas Gracias\npor visitarnos &#10084 !!!',
        borderradius: '5px',
        background: 'url(./images/bguno-d.jpg)',
        showConfirmButton: false,
        timer: 2000
    })
}

