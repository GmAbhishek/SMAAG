
let mybutton = document.getElementById("myBtn");
let list = document.getElementById("list");
let logo = document.getElementById("smaag");
let head = document.getElementById("head-1");
let scam = document.getElementById("scam");
let r = document.querySelector(':root');
window.onload = function(){topFunction()};
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
  {
    mybutton.style.display ="block";
    list.style.margin = "0.2em 0 0.2em 0";   
    logo.style.padding= "0.3em 0 0 5em";   
    logo.style.maxHeight = "3em";
   head.style.backgroundColor = "white"; 
   scam.style.borderBottom= " 1.5px solid rgba(0, 0, 0, 0.9)";
   r.style.setProperty('--x', 'black');
  } 
  else
  {
    mybutton.style.display = "none";    
    list.style.margin = "1em 0 1em 0";    
    head.style.backgroundColor = "transparent";
    head.style.color = "white";
    logo.style.padding= "0 0 0 5em";   
    logo.style.maxHeight = "3em";
    scam.style.borderBottom= " 1.5px solid rgba(255, 255, 255, 0.9)";
    r.style.setProperty('--x', 'white');
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// var dropdown = document.getElementsByClassName("dropdown-btn");
// var i;

// for (var i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }
