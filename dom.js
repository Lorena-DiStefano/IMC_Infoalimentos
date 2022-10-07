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

const resultados = document.querySelector('.resultados')

const divModal_result = document.createElement('dialog')
divModal_result.className="div_modal"
divModal_result.id="modalResult"
divModal_result.innerHTML=`
<div>
<h2 class="modal_title">Tus resultados</h2>
</div>
<div id="resultContent" class="modalContent"></div>
<button type="button" class="btnClose" id="closeResult">Cerrar</button>`
resultados.append(divModal_result)

const info = document.querySelector('.info')

const divModal_info = document.createElement('dialog')
divModal_info.className="div_modal"
divModal_info.id="modalInfo"
divModal_info.innerHTML=`
<div>
<h2 class="modal_title">Indice de Quetelet</h2>
<div class="modalContent">
<p class="info_text">Fue creada en 1832.<br>No contempla edad, género, porcentaje de grasa corporal o masa muscular.</p>
<p class="info_text">Considerando que el criterio sobre <b>"La Belleza"</b> varía según la época y las culturas....    Mejor hablemos de <b>"SALUD!!"</b></p>
<p class="info_text">No confundamos <b>"Buena Salud"</b> con cuestiones de <b>"Estética".</b><br>Realizando chequeos periódicos, obtendrás información certera sobre lo que tu organismo necesita.</p>
</div>
<button type="button" class="btnClose" id="closeInfo">Cerrar</button>
</div>`
info.append(divModal_info)