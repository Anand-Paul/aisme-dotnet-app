
export const initForms = function () {
    const addBtn = document.getElementById('form__addmore')
    const layoutField = document.getElementById('layoutInput')
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    addBtn.addEventListener('click', ()=>{
        console.log(layoutField)
        layoutField.appendChild(x)
    })
    // console.log(navButton)
}