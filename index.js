/*index.js code for mobile view of decora*/
const hamburger = document.querySelector("#head-ham");
const hamContent = document.querySelector("#head-ham-content");

const hamClicked = () => {
    if(hamContent.style.display === "flex")
    hamContent.style.display = "none";
    else
    hamContent.style.display = "flex";
}
hamburger.addEventListener("click", hamClicked )


/*js code for navigation component to illustrate navigation bar*/ 
const navHamburger = document.querySelector("#hamburger-drop");
const navHamContent = document.querySelector("#ham-content");

const navHamClicked = () => {
    if(navHamContent.style.display === "flex")
    navHamContent.style.display = "none";
    else
    navHamContent.style.display = "flex";
}

if(navHamburger)
navHamburger.addEventListener("click", navHamClicked );

// js code for slider
const sliderValue = document.querySelector("#slider-value");
const sliderInput = document.querySelector("#slider-input");

const sliderChanged = () => {
    sliderValue.innerText = sliderInput.value
}

if(sliderInput)
sliderInput.addEventListener("change",sliderChanged)