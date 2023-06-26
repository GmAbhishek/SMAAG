let mybutton = document.getElementById("myBtn");
let list = document.getElementById("list");
let logo = document.getElementById("smaag");
let head = document.getElementById("head-1");

window.onload = function(){topFunction()};
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display ="block";
    list.style.margin = "0.2em 0 0.2em 0";   
    logo.style.padding= "0.3em 0 0 5em";   
    logo.style.maxHeight = "3em";
   head.style.backgroundColor = "white"; 
    if (screen.width < 768)
  {
    logo.style.padding = "0em 0 0 3em";
  }
  } 
  else {
    mybutton.style.display = "none";    
    list.style.margin = "1em 0 1em 0";    
    head.style.backgroundColor = "transparent";
    head.style.color = "white";
    logo.style.padding= "1em 0 0 5em";   
    logo.style.maxHeight = "4em";
    if (screen.width < 768)
    {
      logo.style.padding = "0em 0 0 3em";
    }
  }
 

}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}



var nav = document.getElementById('list');

function toggleNav () {       

    if ( nav.style.display === "" )
    nav.style.display = "block";

    else
    nav.style.display = "";
}


function windowResizeHandler () {
    if ( screen.width > 500 )
    nav.style.display = "";
}

window.addEventListener("resize", windowResizeHandler);




function animateValue(id, end, duration) {
  const element = document.getElementById(id);
  gsap.to(element, {
    innerHTML: end,
    duration: duration / 1000,
    snap: "innerHTML",
    onUpdate: function () {
      element.textContent = Math.round(this.targets()[0].innerHTML) + "+";
    },
    onComplete: function () {
      setTimeout(function () {
        gsap.to(element, {
          innerHTML: 0,
          duration: duration / 1000,
          snap: "innerHTML",
          onUpdate: function () {
            element.textContent = Math.round(this.targets()[0].innerHTML) + "+";
          },
          onComplete: function () {
            animateValue(id, end, duration); // Restart the animation from 0 to the specified end value
          }
        });
      }, 10000); // 10-second break before restarting the animation
    }
  });
}

function startCounters() {
  animateValue('projects-counter', 5, 2000);
  animateValue('products-counter', 18, 2000);
  animateValue('customers-counter', 37, 2000);
}

window.addEventListener('load', startCounters);

