# Landing Page Project

## Table of Contents

* [Instructions](#instructions)
* [Project Description](#project_description)
* [Project Specification](#project_specification)
* [Contributing](#contributing)
* [Code Description](#code_description)

## Instructions


The starter project has some HTML and CSS styling to display a static version of the Landing Page project. 
Project was converted from a static project to an interactive one. 
This required modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `index.html`.
The biggest part of work is done in file `js/app.js`.


## Project Description

 
This project is a multi-section landing page witha a possibility to dynamically add the content to the page, demonstrating this with the navigation menu. Additionally, dynamically building the navigation, which is a a great  precursor to understanding the virtual DOM, working with JavaScript frameworks.

- The project has at least 4 content sections.
- In the project dynamically created a navigation menu based on the sections of the page.
- While navigating through the page, the section that is active in the viewport/closest to the top should be distinguished from the other sections.
- Scroll to sections functionality. Clicking on a navigation item should scroll to the appropriate section of the page.
- Has a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.
- The project is run through an eslinter. (https://eslint.org/demo)


## Project Specification 


- Architecture.
	
The project have a structure like the one shown below. All files shown must be present and the app must successfully render a home page with clear design and functionality added when index.html is loaded in the browser. No errors should display in console.

```
css
- styles.css    
index.html
js
- app.js
README.md
```

- Usability.
All features are usable across modern desktop, tablet, and phone browsers.

- Styling.
Styling has been added for active states.

- HTML Structure.
There are at least 4 sections that have been added to the page.

- Navigation.	
Navigation is built dynamically as an unordered list.

- Section Active State.
It should be clear which section is being viewed while scrolling through the page.

- Scroll to Anchor.
When clicking an item from the navigation menu, the link should scroll to the appropriate section.

- README.
Should have some basic information, and use correct markdown.

- Comments.
Comments are present and effectively explain longer code procedure when necessary.

- Code Quality.
Code is formatted with consistent, logical, and easy-to-read formatting.



## Contributing


The ap.js JavaScript code works with the provided HTML and CSS files. The app.js file is properly linked to the HTML file, and loading the HTML file shows the correct functionality for the application.


## Code Description


Work with file app.js.


**Description:** 

- Build menu, dynamically created a navigation menu based on the sections of the page


```

const allSections = Array.from(document.querySelectorAll("section"));
const menu = document.getElementById("navbar__list");

allSections.forEach((section, index) => {
  const newLi = document.createElement("li");
  const newA = document.createElement("a");
  const linkHref = `#section${index + 1}`;

  newA.setAttribute(`href`, linkHref);
  newA.innerHTML = `Link ${index + 1}`;

  newA.classList = "menu__link";
  newA.id = `nav_section${index + 1}`;

  menu.appendChild(newLi);
  newLi.appendChild(newA);
```
_________________________________________________    


- Scroll to sections functionality is implemented with a smoothScroll function . Clicking on a navigation item scroll to the appropriate section  of the page  with2 sec delay using cubic easing in/out effect - acceleration until halfway, then deceleration.

```
// Add event Listener for smoothScroll
  newA.addEventListener("click", (event) => {
    event.preventDefault();
    smoothScroll(linkHref, 2000);
});
});

// Smooth scroll to section on link click
// Materials from https://www.youtube.com/watch?v=oUSvlrDTLi4
function smoothScroll(target, duration) {
  // Add target as a parameter. Target is a section you need.
  var target = document.querySelector(target);
  // Elements reletive position to the top of the screen. Use build in function
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
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Function makes the scroll more interesting. Materials from https://www.gizma.com/easing/
  // Cubic easing in/out - acceleration until halfway, then deceleration
  // Replace Math.easeInOutCubic = function  on function ease
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }

  requestAnimationFrame(animation);
}
```
______________________________________________________________________________________________________

- Highlight section in viewport upon scrolling. While navigating through the page, the section that is active in the viewport/closest to the top is  distinguished from the other sections.



```

// Check if element is in the viewport

// Set sections as active
document.addEventListener("scroll", function () {
const allSections = Array.from(document.querySelectorAll("section"));

allSections.forEach(function (section, index) {
  let domRect = section.getBoundingClientRect();
  //console.log(window, innerHeight);
  if (domRect.top < window.innerHeight - 150 && domRect.bottom > 150) {
    //console.log("element is in viewport")
    //console.log(index); - check which element is in viewport now

    // Add class 'active' to section when near top of viewport
    section.classList.add("your-active-class");

    // Highlight navigation menu link whan section in viewport upon scrolling.
    let activeLink = document.getElementById(`nav_section${index + 1}`);
    activeLink.classList.add("your-active-link");
  } else {
    //console.log("element is NOT in viewport")

    // Remove class 'active' from section when OUT of viewport
    section.classList.remove("your-active-class");

    // Remove highlight navigation menu link whan section is OUT of viewport upon scrolling.
    let activeLink = document.getElementById(`nav_section${index + 1}`);
    activeLink.classList.remove("your-active-link");
  }
});
});

```
_________________________________________________________________________________________________

- Has a scroll to top button on the page that’s only visible when the user scrolls 20 px below the top of the page.

```
// Button
// Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

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
};


```