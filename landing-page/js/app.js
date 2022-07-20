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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
const sec = document.querySelectorAll('section');
const menu = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
//to Creat the navigation bar
function creatNav() {
    for (let s of sec) {
        let secName = s.getAttribute('data-nav');
        let secLink = s.getAttribute('id');
        //create an item for each one
        let List = document.createElement('li');
        //add the text inside the li element 
        List.innerHTML = `<a class="menu__link" href="#${secLink}">${secName}</a>`;
        //add the item text 
        fragment.appendChild(List);
    }
    //add listItem to the menu
    menu.appendChild(fragment);
}

//Determines if section is in viewport
function secInView(e) {
    let secPos = e.getBoundingClientRect();
    return (secPos.top >= 0);
}

//Gives the section viewed a different appearance
function toggleActiveState() {
    for (let s of sec) {
        if (secInView(s)) {
            //use toggle to add or remove this class 
            if (!s.classList.contains('your-active-class'))
                s.classList.add('your-active-class');
        } else {
            s.classList.remove('your-active-class');
        }
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

creatNav();
// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', toggleActiveState);
// Scroll to top of page
let span = document.querySelector('.up');
window.onscroll=function(){
    this.scrollY>=800?span.classList.add('show'):span.classList.remove('show');
}
span.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
        
};

/**
 * End Main Functions
 * Begin Events
 * 
 */
// Hide fixed navigation bar while not scrolling

// Build menu 

// Scroll to section on link click

// Set sections as active
