let menubtn = document.querySelector(".menubtn");
let sidenav = document.querySelector(".sidenav");

menubtn.addEventListener("click", ()=> {
 sidenav.classList.toggle("displaynav");
  menubtn.classList.toggle("shiftmenu");
})
