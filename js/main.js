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