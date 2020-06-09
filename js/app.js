/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

//https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
/*var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("page__header").style.top = "0";
  }
  else {
    document.getElementsByClassName("page__header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}*/


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// Scroll to section on link click
//Smooth scroll
// materials from https://www.youtube.com/watch?v=oUSvlrDTLi4
function smoothScroll(target, duration){
    //Add target as a parameter. Target is a section you need.
    var target = document.querySelector(target);
    //Elements reletive position to the top of the screen. Use build in function
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;


    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, targetPosition, duration);
        // The First parameter is X - scroll horisontally, don't use 
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame (animation);
    }

// Function makes the scroll more interesting. Materials from https://www.gizma.com/easing/
// Cubic easing in/out - acceleration until halfway, then deceleration
// Replace Math.easeInOutCubic = function  on function ease
    function ease (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    }


    requestAnimationFrame(animation);
}
// Use  function call to test code   
// smoothScroll('#section2', 1000)

//Add event Listener REFACTOR LATER
var section1 = document.querySelector ('#nav_section1');
section1.addEventListener('click', (event) => {
    event.preventDefault();
    smoothScroll('#section1', 2000);
});

var section2 = document.querySelector ('#nav_section2');
section2.addEventListener('click', (event) => {
    event.preventDefault();
    smoothScroll('#section2', 2000);
});

var section3 = document.querySelector ('#nav_section3');
section3.addEventListener('click', (event) => {
    event.preventDefault();
    smoothScroll('#section3', 2000);
});

// Highlight section in viewport upon scrolling.
// Check if element is in the viewport
// Set sections as active

document.addEventListener('scroll', function(){

    const allSections = Array.from(document.querySelectorAll('section'));

    allSections.forEach(function(section, index){
        let domRect = section.getBoundingClientRect(); 
        //console.log(window, innerHeight);
        if (domRect.top < window.innerHeight-150 && domRect.bottom > 150 ){
            //console.log("element is in viewport")
            //console.log(index); - check which element is in viewport now
            
            // Add class 'active' to section when near top of viewport
            section.classList.add('your-active-class');

            ////Highlight navigation menu link whan section in viewport upon scrolling.
            let activeLink = document.getElementById(`nav_section${index + 1}`);
            activeLink.classList.add('your-active-link');                    
        }

        else{
            //console.log("element is NOT in viewport")

            // Remove class 'active' from section when OUT of viewport
            section.classList.remove('your-active-class');

            ////Remove highlight navigation menu link whan section is OUT of viewport upon scrolling.
            let activeLink = document.getElementById(`nav_section${index + 1}`);
            activeLink.classList.remove('your-active-link'); 
        }
    });

});

//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//Button
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}