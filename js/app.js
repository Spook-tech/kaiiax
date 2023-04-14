const menuBurger = document.querySelector(".header-burger");
const headerMenu = document.querySelector(".header-mobile");

function toggleHeaderMenu(){
  menuBurger.classList.toggle("active");
  headerMenu.classList.toggle("active");
  document.body.classList.toggle("lock");
}

document.addEventListener("click", function(event){
  if(event.target.closest(".header-burger")){
    toggleHeaderMenu();
  }
});