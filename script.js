
//Name display
let menubtn = document.querySelector(".menubtn");
let sidenav = document.querySelector(".sidenav");
let name = document.querySelector(".name");
let names = "Chimzi Frank Junior";
let index = 0;
name.innerHTML = "I'm ";
let timer = setInterval(() => {
   if (index < names.length) {
      name.innerHTML += names[index];
      index++;
   } else {
      clearInterval(timer);
   }
}, 200)

//Sidenav
menubtn.addEventListener("click", () => {
   sidenav.classList.toggle("displaynav");
   menubtn.classList.toggle("shiftmenu");
});

//Section Highlight
let header = document.getElementById("header");
let about = document.getElementById("about");
let skills = document.getElementById("skills");
let myproject = document.getElementById("projects");
let contact = document.getElementById("contact");

window.addEventListener("scroll", () => { 
   var hd_post = header.getBoundingClientRect();
   var at_post = about.getBoundingClientRect();
   var sl_post = skills.getBoundingClientRect();
   var pt_post = myproject.getBoundingClientRect();
   var ct_post = contact.getBoundingClientRect();

   let a = document.querySelectorAll("li.navtab");
   console.log(at_post.top);
   for (let all = 0; all < a.length; all++) {

      a[all].classList.remove("active");

      if (hd_post.top <= 0 && hd_post.bottom > 0) {
         a[0].classList.add("active");
      } else {
         a[0].classList.remove("active");
      }

      if (at_post.top <= 0 && at_post.bottom > 0) {
         a[1].classList.add("active");
      } else {
         a[1].classList.remove("active");
      }

      if (sl_post.top <= 0 && sl_post.bottom > 0) {
         a[2].classList.add("active");
      } else {
         a[2].classList.remove("active");
      }

      if (pt_post.top <= 0 && pt_post.bottom > 0) {
         a[3].classList.add("active");
      } else {
         a[3].classList.remove("active");
      }

      if (ct_post.top <= 0 && ct_post.bottom > 0) {
         a[4].classList.add("active");
      } else {
         a[4].classList.remove("active");
      }
   }
})

//Projects image slider
let projects = document.querySelector(".projects");
let prjt = document.querySelector(".prjts");
let prtj1 = document.querySelector(" .pt1")
let prtj2 = document.querySelector(" .pt2")
let prtj3 = document.querySelector(" .pt3")
let prtj4 = document.querySelector(" .pt4")
let popupCover = document.querySelector(".pop-up-dark")
let arrowl = document.querySelector(".left");
let arrowr = document.querySelector(".right");
let dot1 = document.querySelector(".dot1");
let dot2 = document.querySelector(".dot2");
let dot3 = document.querySelector(".dot3");

/*prtj1.addEventListener("click", ()=> {
   let div = document.createElement("div")
  popupCover.style.display = "block";
})*/

var x = 0;
let nextimg = setInterval(() => {
   prjt.style.marginLeft = x + "%";
   let w = window.innerWidth;
   if (w > 660){
      if (x >= -50) {
         x -= 50;
      } else {
         x = 0;
      }
   }
   if (w < 660) {
      if (x >= -200) {
         x -= 100
      } else {
         x = 0
      }
   }
   dotChange();
}, 3000);

function moveImg(num) {
   x = num;
   prjt.style.marginLeft = x + "%";
   dotChange();
}

let dotChange = () => {
   if (x == -50) {
      dot1.classList.add("main");
   } else {
      dot1.classList.remove("main")
   }
   if (x == -100) {
      dot2.classList.add("main");
   } else {
      dot2.classList.remove("main")
   }
   if (x == 0) {
      dot3.classList.add("main");
   } else {
      dot3.classList.remove("main")
   }
}

var bloglink = document.querySelector(".blog");
bloglink.addEventListener("click", ()=>{
    alert("Coming soon");
});

/*arrowl.addEventListener('click', () => {
   prjt.style.marginLeft = x + "%";
   if (x >= -50) {
      x -= 50;
   } else {
      x = 0;
   }
   nextimg();
});
arrowr.addEventListener('click', () => {
   prjt.style.marginLeft = x + "%";
   if (x > -100) {
      x -= 50;
   } else {
      x = 0;
   }
})*/
