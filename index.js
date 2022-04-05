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

// js code for Toast component
const toastBtn = document.querySelector("#see-toast-btn");
const toast = document.querySelector("#toast");
const closeToast = document.querySelector("#close-toast-btn");

const toastClickedHandler = () => {
  toast.style.visibility = "visible";
  toastTimeout = setTimeout(() => (toast.style.visibility = "hidden"), 5000);
};

const closeToastClickedHandler = () => {
    toast.style.visibility="hidden";
    clearTimeout(toastTimeout);
}

if(toastBtn)
toastBtn.addEventListener("click", toastClickedHandler);

if(closeToast)
closeToast.addEventListener("click", closeToastClickedHandler);