
export const initForms = function () {
    // Repeat inout field on  plus button click
    const addBtn = document.getElementById('form__addmore');
    const cloneElement = document.getElementById('repeatElement');
    addBtn.addEventListener('click', () => {
        const clone = cloneElement.cloneNode(true);
        const cloneElementIcon = clone.childNodes[1].nextSibling.lastChild
        cloneElement.parentNode.appendChild(clone);
        cloneElementIcon.classList.remove("bx-plus-circle");
        cloneElementIcon.classList.add("bx-minus-circle");
        removeItem()
    })
    
    // Remove element on minus icon click
    const removeItem = () => {
        const element = document.querySelectorAll('.bx-minus-circle');
        element.forEach((item) => {
            item.addEventListener('click', () => {
                item.parentNode.parentElement.remove();
            })
        })
    }

}