const boxid = document.querySelectorAll(".card_curso")

async function seachcursos(id) {
    const response = await fetch('../json/cursos.json')
    const cursos = await response.json()
    console.log(cursos[id])
}

callbox = (index) => {
    boxcalled = { index }
    seachcursos(boxcalled.index)
}

boxid.forEach((value, index) => {
    value.addEventListener('click', () => {
        callbox(index)
    })
})


const openBox = (valor) => {
    const modal = document.createElement('div')
}