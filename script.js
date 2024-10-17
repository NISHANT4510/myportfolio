// JavaScript to manage transitions
const designations = document.querySelectorAll('.designation');
let index = 0;

function rotateDesignations() {
  // Remove the active class from the current item
  designations[index].classList.remove('active');
  
  // Move to the next designation
  index = (index + 1) % designations.length;
  
  // Add the active class to the next item
  designations[index].classList.add('active');
}

// Change designation every 2.5 seconds
setInterval(rotateDesignations, 2500);


//active menu
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
  let len = section.length;
  while(--len && window.scrollY + 97 < section[len].offsetTop){}
  menuLi.forEach(sec => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

//sticky-navbar
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
  header.classList.toggle("sticky",window.scrollY > 50)
})

// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navlist=document.querySelector(".navlist");

menuIcon.onclick = ()=>{
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
}

window.onscroll =()=>{
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
}