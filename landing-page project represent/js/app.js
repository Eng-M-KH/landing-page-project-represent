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
 * ==> In this project, I ddidn't need global variables
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

// building the nav

let main = document.getElementsByTagName("main")[0];
let sections = main.getElementsByTagName("section");
let NumOfSections = sections.length;

for(i=0; i < NumOfSections; i++){
  let sectionHeader = sections[i].getElementsByTagName("h2")[0].innerHTML;
  createListItem(sectionHeader, i);
}

function createListItem(topic, i) {
  var node = document.createElement("LI");
  var anchor = document.createElement("a");
  var textnode = document.createTextNode(topic);
  anchor.appendChild(textnode);
  node.appendChild(anchor);
  anchor.href = "#" + sections[i].id
  document.getElementById("navbar__list").appendChild(node);
}


// Add class 'active' to section when near top of viewport




// Scroll to anchor ID using scrollTO event


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

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active










