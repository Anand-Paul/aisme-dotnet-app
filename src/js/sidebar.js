
export const initSidebar = function () {
    const navButton = document.getElementById('navbar-toggle')
    const navBrand = document.getElementById('brandIcon')
    const navItem = document.querySelectorAll('.sidebar__item-text')
    navButton.addEventListener('click', () =>{
        navBrand.classList.toggle('d-flex')
        for(const item of navItem) {
        item.classList.toggle('d-flex')
    }
    })
    // console.log(navButton)
}