let inputAlt = document.getElementById('altura')
let inputPeso = document.getElementById('peso')

const btn_newCalc = document.getElementById('newCalc')

btn_newCalc.onclick = (event) => resetearDatos(event)
function resetearDatos(event) {
    event.preventDefault()
    inputAlt.value = ""
    inputPeso.value = ""
}

const btn_calcular = document.getElementById('calcular')

btn_calcular.onclick = (event) => validarDatos(event)

function validarDatos(event) {
    event.preventDefault()
    let altura = parseFloat(inputAlt.value).toFixed(2)
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
        customClass: {
            container: 'mje_container',
        },
        html: `
        <div class="div_mje">
        <p class="resultado">Tu IMC es de ${imc} e indica ${diagnostico[Type]}<br><br>Rango de peso normal: ${pesoMin}Kg a ${pesoMax}Kg</p>` +
            '</div>',
        position: 'top-end',
        showConfirmButton: false,
        background: 'url(./images/bguno-b.jpg) no-repeat',
        backdrop: true,
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

const resultContent = document.getElementById('resultContent')
btn_resultado.onclick = (event) => imprimirResultados(event)

let listResulados2 = ""

function imprimirResultados() {
    (modalResult.showModal())
    resultContent.innerHTML = ""
    listResulados2 = JSON.parse(sessionStorage.getItem('result_ss'))
    let count = 1
    listResultados.forEach(element => {
        let itemL1 = document.createElement('p')
        itemL1.innerHTML = `${count}. IMC: ${element.valor} = ${element.clase}<br>Peso normal: entre ${element.pesoMin}kg y ${element.pesoMax} kg`
        count++
        resultContent.append(itemL1)      
    });
}

const closeResult = document.getElementById('closeResult')
closeResult.onclick = () => { (modalResult.close()) }

const btn_info = document.getElementById('btn_3')
btn_info.onclick = () => { (modalInfo.showModal()) }

const closeInfo = document.getElementById('closeInfo')
closeInfo.onclick = () => { (modalInfo.close()) }


const btn_api = document.getElementById('btn_4')

btn_api.onclick=()=>{
    Swal.fire({
        title:'Si quieres conocer más sobre las propiedades de los alimentos',
        showConfirmButton: false,
        footer: '<a class"linkApi" href="./api_alimentos/api.html" target="blank">Haz click para obtener más información</a>',
        timer: 5000,
    })
}

const btn_saludo = document.getElementById('btn_5')

btn_saludo.onclick = () => {
    Swal.fire({
        html:
            '<div class="div_mje">' +
            '<p class="mje">Muchas Gracias <br>por tu visita!! <i class="bi bi-heart-pulse-fill"></i></p>' +
            '</div>',
        background: 'url(./images/bguno-b.jpg) no-repeat',
        padding: '1em',
        showConfirmButton: false,
        timer: 2000,
        backdrop: true,
    })
}

