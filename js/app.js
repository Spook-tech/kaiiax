const menuBurger = document.querySelector(".header-burger");
const headerMenu = document.querySelector(".header-mobile");

function toggleHeaderMenu(){
  menuBurger.classList.toggle("active");
  headerMenu.classList.toggle("active");
}

document.addEventListener("click", function(event){
  const target = event.target;

  console.log(target);

  if(target.closest(".header-burger-wrapper")){
    toggleHeaderMenu();
  }
});