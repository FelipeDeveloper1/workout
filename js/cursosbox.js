const boxid = document.querySelectorAll(".card_curso")

callbox = (id) => {
    boxcalled = { id }
    console.log(boxcalled.id)
}

boxid.forEach((value, index) => {
    value.addEventListener('click', () => {
        callbox(index)
    })
})

async function seachcursos() {
    const response = await fetch('../json/cursos.json')
    const cursos = await response.json()
    console.log(cursos[0])
}
seachcursos()
const openBox = (valor) => {

}