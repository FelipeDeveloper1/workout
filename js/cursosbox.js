const boxid = document.querySelectorAll(".card_curso")
const modal = document.querySelector('.modal')
const close = document.querySelector('.close_modal')
const card_modal = document.querySelector('.cards_modal')

boxid.forEach((value, index) => {
    value.addEventListener('click', () => {
        // callbox(index)
        seachcursos(index)
    })
})

// callbox = (index) => {
//     const boxcalled = { index }
//     console.log(index)
//     seachcursos(boxcalled.index)
// }

async function seachcursos(id) {
    const response = await fetch('../json/cursos.json')
    const cursos = await response.json()
    openBox(cursos[id])
}


const openBox = (valor) => {
    modal.style.display = 'block'
    Object.values(valor.cursos).forEach((value) => {

        createContentCard(value.img, value.name)
    })

}


const createContentCard = (imgCard, textCard) => {

    // testando os paramentros recebidos

    // criando as divs
    const Card = document.createElement('div')
    const CardImage = document.createElement('div')
    const img = document.createElement('img')
    const CardTexto = document.createElement('div')

    // atribuindo estilo as divs criadas 
    Card.classList.add('card')
    CardImage.classList.add('holdImg')
    CardTexto.classList.add("text_content")

    // inserindo elas no conteudo
    Card.insertAdjacentElement('afterbegin', CardImage)
    CardImage.insertAdjacentElement('afterbegin', img)
    Card.insertAdjacentElement('beforeend', CardTexto)
    card_modal.insertAdjacentElement('beforeend', Card)

    // inserindo texto


    CardTexto.innerHTML = textCard
    img.src = imgCard

}




const closeModal = () => {
    const QuantiCards = document.querySelectorAll('.card')
    QuantiCards.forEach((value) => {
        value.remove()
    })
    modal.style.display = 'none'

}
close.addEventListener('click', closeModal)