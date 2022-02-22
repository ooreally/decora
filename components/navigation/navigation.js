/*index.js code for mobile view of decora*/
const headHamburger = document.querySelector("#head-ham");
const hamContent = document.querySelector("#head-ham-content");

const hamClicked = () => {
    if(hamContent.style.display === "flex")
    hamContent.style.display = "none";
    else
    hamContent.style.display = "flex";
}

headHamburger.addEventListener("click", hamClicked )


/*js code to illustrate navigation bar*/ 
const navHamburger = document.querySelector("#hamburger-drop");
const navHamContent = document.querySelector("#ham-content");

const navHamClicked = () => {
    if(navHamContent.style.display === "flex")
    navHamContent.style.display = "none";
    else
    navHamContent.style.display = "flex";
}

navHamburger.addEventListener("click", navHamClicked );
