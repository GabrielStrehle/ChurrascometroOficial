var adultos = document.getElementById("adulto")
var crianças = document.getElementById("criança")
var duraçao2 = document.getElementById("duraçao")



function calcular(elemento) {

    let adultos1 = adulto.value
    let crianças1 = criança.value
    let duraçao1 = duraçao.value

    let totalCarne = 400 * adultos1 / 1000 + (200 * crianças1) / 1000
    let totalCerveja = Math.ceil(adultos1 * 1200 / 1000)
    let totalRefri = Math.ceil(1000 * adultos1 / 1000 + (500 * crianças1) / 2000)

    let resultado = document.getElementById("resultado")

    if (duraçao1 >= 6) {


        totalCarne = 650 * adultos1 / 1000 + (325 * crianças1) / 1000
        totalCerveja = Math.ceil(adultos1 * 2000 / 1000)
        totalRefri = Math.ceil(1500 * adultos1 / 1000 + (750 * crianças1) / 2000)

        return (resultado.innerHTML = "<br>" + "<strong>Você vai precisar de</strong>" + "<br>" + "<br>" + totalCarne + " kg de carne" + "<br>" + totalCerveja + " Latas de cerveja" + "<br>" + totalRefri + " Garrafas de Coca")

    }



    resultado.innerHTML = "<br>" + "<strong>Você vai precisar de</strong>" + "<br>" + "<br>" + totalCarne + " Kg de Carne" + "<br>" + totalCerveja + " Litrões de Cerveja" + "<br>" + totalRefri + " Garrafas de Coca-Cola"
}


