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
        createContentCard(value.img, value.name, value.direct)
    })

}


const createContentCard = (imgCard, textCard, direct) => {
    console.log(direct)

    // testando os paramentros recebidos
    // criando as divs
    const Card = document.createElement('div')
    const CardImage = document.createElement('div')
    const img = document.createElement('img')
    const HoldText = document.createElement('div')
    const CardTexto = document.createElement('p')
    const link = document.createElement('a')

    // atribuindo estilo as divs criadas 
    Card.classList.add('card')
    CardImage.classList.add('holdImg')
    HoldText.classList.add("text_content")
    link.classList.add('link')
    CardTexto.classList.add('card_text')


    // inserindo elas no conteudo
    Card.insertAdjacentElement('afterbegin', CardImage)
    CardImage.insertAdjacentElement('afterbegin', img)
    Card.insertAdjacentElement('beforeend', HoldText)
    HoldText.insertAdjacentElement('afterbegin', CardTexto)
    HoldText.insertAdjacentElement('beforeend', link)
    card_modal.insertAdjacentElement('beforeend', Card)

    // inserindo texto

    CardTexto.innerHTML = textCard
    img.src = imgCard

    // configurando o botão
    link.target = "_blank"
    link.innerText = 'Evolua'
    link.href = direct

}




const closeModal = () => {
    const QuantiCards = document.querySelectorAll('.card')
    QuantiCards.forEach((value) => {
        value.remove()
    })
    modal.style.display = 'none'

}
close.addEventListener('click', closeModal)