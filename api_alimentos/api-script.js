const cargarAlimentos = async () => {

    try {
        const respuesta = await fetch(`https://633e2789c235b0e5751fb150.mockapi.io/alimentos`)

        const data = await respuesta.json()
        let apiNutricion = [...data]

        const contenedor = document.querySelector('.api')

        apiNutricion.forEach(alimento => {
            let alimentos = document.createElement('div')
            alimentos.className = "cardAlimento"
            alimentos.innerHTML = `
                <div class="card_content">
                <img class="foto" src="${alimento.image}")>                
                <h3 class="card_title">${alimento.food}</h3>
                <div class="contPropiedades"><p>${alimento.benefits}</p></div>                    
                </div>`

            contenedor.append(alimentos)

        })

    } catch (error) {
        console.log(error)
    }
}

cargarAlimentos()