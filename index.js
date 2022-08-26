let nombre = prompt("Por favor, ingresa tu nombre")
const SALUDO = "'HOLA' " +(nombre).toUpperCase()+ "! \nPara poder calcular tu IMC necesitamos conocer tu ALTURA y PESO"
alert(SALUDO)

let altura = parseFloat(prompt("Ingresa tu altura expresada en metros" + "\nEjemplo:1.64"))
let peso = parseFloat(prompt("Ingresa tu peso expresado en kg" + "\nEjemplo:75.20"))

const ALT = ((altura) * (altura))
const IMC = ((peso) / ALT).toFixed(2)
const MIN = (ALT * 18.5)
const MAX = (ALT * 25)

if (IMC <= 16) {
    alert("Tu IMC es " + IMC + ' "Delgadez Extrema" ')
} else
    if (IMC > 16 && IMC <= 17) {
        alert("Tu IMC es " + IMC + ' e indica: "Delgadez Moderada" ')
    } else
        if (IMC > 17 && IMC <= 18.5) {
            alert("Tu IMC es " + IMC + ' e indica: "Delgadez Leve" ')
        } else
            if (IMC > 18.5 && IMC <= 25) {
                alert("Tu IMC es " + IMC + ' e indica: "Normal" ')
            } else
                if (IMC > 25 && IMC <= 30) {
                    alert("Tu IMC es " + IMC + " e indica: 'Sobrepeso'")
                } else
                    if (IMC > 30 && IMC <= 35) {
                        alert("Tu IMC es " + IMC + ' e indica: "Obesidad Leve" ')
                    } else
                        if (IMC > 35 && IMC <= 40) {
                            alert("Tu IMC es " + IMC + ' e indica: "Obesidad Moderada" ')
                        } else
                            if (IMC > 40) {
                                alert("Tu IMC es " + IMC + ' e indica: "Obesidad Morvida" ')
                            }

for (let i = 0; i < 3; i++) {

    let opciones = parseInt(prompt("Elije una opción \n 1. ¿Cual es tu rango de peso normal? \n 2. Más Información \n 3. Finalizar"))

    switch (opciones) {

        case 1:
            alert("Tu peso normal está entre " + MIN.toFixed(2) + " y " + MAX.toFixed(2))
            break
        case 2:
            alert("IMPORTANTE: La tabla o índice de Quetelet, fue creada en 1832. \n No contempla edad, género, porcentaje de grasa corporal o masa muscular. \nConsiderando que el criterio sobre 'la belleza de los cuerpos' varía según la época y las culturas; te propongo que hablemos de 'SALUD'.\nUna 'BUENA SALUD' no es una cuestión de 'ESTETICA', consiste en realizar chequeos periódicos, los cuales te porporcionarán resultados certeros sobre lo que tu organismo necesita.")
            break
        case 3:
            alert("Gracias por visitar nuestra página")
            break
    }
}




























