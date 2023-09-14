class responsive {
    constructor(icon, menu, links) {
        this.icon = document.querySelector(icon)
        this.menu = document.querySelector(menu)
        this.links = document.querySelectorAll(links)

    }
    bringMenu = () => {
        this.icon.addEventListener('click', () => {
            this.menu.classList.toggle('active')
            this.bringLinks()
        })
    }
    bringLinks = () => {
        this.links.forEach((value, index) => {
            value.style.animation == "" ? value.style.animation = `bringlinks ${ index / 5 + 0.8}s ease forwards 0.1s` : value.style.animation = ""
        })
    }

    init = () => {
        if (this.menu) {
            this.bringMenu()
        }
    }
}

const menuResponsive = new responsive('.open_menu', ".menu", ".links")
menuResponsive.init()