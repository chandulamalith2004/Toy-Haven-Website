const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");


if(hamburger){

hamburger.addEventListener("click",()=>{

navLinks.classList.toggle("active");


if(navLinks.classList.contains("active")){

hamburger.innerHTML="✕";

}
else{

hamburger.innerHTML="☰";

}

});



}