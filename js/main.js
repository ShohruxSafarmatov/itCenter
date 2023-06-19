"use strict";


let elCounts = document.querySelectorAll(".about__item-span");
let elInterval = 3000;

elCounts.forEach((elCount) => {
    let startValue = 0;
    let endValue = parseInt(elCount.getAttribute("data-val"));

    let duration = Math.floor(elInterval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        elCount.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }

    },duration)
})

// Login page


const elLogoutBtn = document.querySelector(".header__btn");
const localToken = window.localStorage.getItem("token");

if (!localToken) {
  window.location.replace("login.html");
}

elLogoutBtn.addEventListener("click", function () {
  window.localStorage.removeItem("token");

  window.location.replace("login.html");
});

