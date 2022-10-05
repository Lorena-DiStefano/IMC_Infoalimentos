const ingresaDatos = document.getElementById('datos')

let ingrAltura = document.createElement('div')
ingrAltura.className = "formDatos"
ingrAltura.innerHTML = `
<label for="inputAlt">Ingresa tu altura expresada en metros.</label>
<input type="text" id="altura" placeholder="Ejemplo:1.64">`
ingresaDatos.append(ingrAltura)

let ingrPeso = document.createElement('div')
ingrPeso.className = "formDatos"
ingrPeso.innerHTML = `
<label for=inputPeso">Ingresa tu peso expresado en kilogramos</label>
<input type="text" id="peso" class="form_input" placeholder="Ejemplo:75.2">`
ingresaDatos.append(ingrPeso)

const btnsCalculo = document.getElementById('btnsCalculo')
footer_form = document.createElement('div')
footer_form.innerHTML = `
<button type="button" id="calcular" class="botones">Calcular</button>
<button type="button" id="newCalc" class="botones">Nuevo Cálculo</button>`
btnsCalculo.append(footer_form)


