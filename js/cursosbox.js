const boxid = document.querySelectorAll(".card_curso")
const modal = document.querySelector('.modal')

boxid.forEach((value, index) => {
    value.addEventListener('click', () => {
        callbox(index)
    })
})

callbox = (index) => {
    boxcalled = { index }
    seachcursos(boxcalled.index)
}

async function seachcursos(id) {
    const response = await fetch('../json/cursos.json')
    const cursos = await response.json()
    openBox(cursos[id])
}


const openBox = (valor) => {
    modal.style.display = 'block'
    const text_modal = document.createElement('p')
    text_modal.innerHTML = valor
    modal.insertAdjacentElement('beforeend', text_modal)


}