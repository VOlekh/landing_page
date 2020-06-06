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

// Set sections as active

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
        var tiimeElapsed = currentTime - startTime;
        var run = ease(tiimeElapsed, startPosition, distance, duration);
        // The First parameter is X - scroll horisontally, we don't use 
        window.scrollTo(0,run);
        if(tiimeElapsed < duration) requestAnimationFrame (animation);
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

//Add event Listener
var section1 = document.querySelector ('#section1');
section1.addEventListener('click', function() {
    smoothScroll('#section2', 2000);
}


