export const tableCellSelect = function () {
  // get the global checkbox
 const checkbox = document.getElementById("flexCheckDefault");

 const checkboxList = document.querySelectorAll('input[type="checkbox"]');

 checkboxList.forEach(item => {
  item.addEventListener('click', ()=>{
   item.closest('tr').classList.toggle('table__selected')
  })
 });
 // listen to changes
 checkbox?.addEventListener('input', evt => {
  // get event value
  const checked = evt.target.checked;

  // get all other checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // update them with the value of the global checkbox
  checkboxes?.forEach(checkbox => {
    checkbox.checked = checked;
    checkbox.closest('tr').classList.toggle('table__selected')
  });
 });
};
