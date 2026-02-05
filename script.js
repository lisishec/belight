const btnmenu = document.getElementById("btmenu");
const menulat = document.getElementById("menulat");

btnmenu.addEventListener('click', () => {
    menulat.classList.toggle("active");
})