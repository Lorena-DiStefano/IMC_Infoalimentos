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
        html: `<div class="div_mje">
        <p class="resultado">Tu IMC es de ${imc} e indica ${diagnostico[Type]}<br><br>Rango de peso normal: ${pesoMin}Kg a ${pesoMax}Kg</p>` +
            '</div>',
        position: 'top-end',
        //padding: '1em',
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

btn_resultado.onclick = (event) => imprimirResultados(event)
const resultContent = document.getElementById('result-content')

const btnCerrarResultados = document.getElementById('btn_close_result')

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

const btn_3 = document.getElementById('btn_3')

btn_3.onclick = () => {
    Swal.fire({
        customClass: {
            container: 'mje_container',
            closeButton: 'closeButton'
        },
        html: //'<div class="div_info">' +
            '<h2 class="info_title">Tabla o Indice de Quetelet</h2>' +
            //'<div class="info_text">' +
            '<p class="info_text">Fue creada en 1832.<br>No contempla edad, género, porcentaje de grasa corporal o masa muscular.</p>' +
            '<p class="info_text">Considerando que el criterio sobre <b>"La Belleza"</b> varía según la época y las culturas....<br>Mejor hablemos de <b>"SALUD!!"</b></p>' +
            '<p class="info_text">No confundamos <b>"Buena Salud"</b> con cuestiones de <b>"Estética".</b><br>Realizando chequeos periódicos, obtendrás información certera sobre lo que tu organismo necesita.</p>',
        //'</div>' ,
        //'</div>',
        //showCloseButton: true,
        background: 'url(./images/bguno.jpg)',
        showConfirmButton: false,
        backdrop: true,
    })
}


const btn_4 = document.getElementById('btn_4')

btn_4.onclick = () => {
    Swal.fire({
        customClass: {
            container: 'mje_container',
        },
        html: '<div class="div_mje">' +
            '<p class="mje">Muchas Gracias <br>por tu visita!! &#10084</p>' +
            '</div>',
        background: 'url(./images/bguno-b.jpg) no-repeat',
        padding: '1em',
        showConfirmButton: false,
        timer: 2000,
        backdrop: true,
    })
}

