// DOM selectors
const hamburger = document.querySelector(".hamburger")
const menuItems = document.querySelector(".menuItems")
const listItems = document.querySelectorAll(".menuItems a");
const swipeText = document.querySelector(".text");
let swipeTextList = ["Full Stack Web developer", "Game Development Enthusiast", "Data Science Enthusiast", "UI/UX Designer"];
let countText = 1;
let delayCounter = 0;
// Functions

hamburger.addEventListener("click", () => {
    menuItems.classList.toggle('toggleMenu');
    document.body.classList.toggle("hidden");

    listItems.forEach(listItem => {
        listItem.classList.toggle('fade')
    })
})
listItems.forEach(listItem => {
    listItem.addEventListener("click", () => {
        menuItems.classList.toggle('toggleMenu')
        document.body.classList.toggle("hidden");

        listItems.forEach(listItemTwo => {
            console.log(listItemTwo)
            listItemTwo.classList.remove("selected")
            listItemTwo.classList.toggle('fade')
        })
        listItem.classList.add("selected");
    })
})


function typewriter() {
    console.log(swipeTextList[countText])
    countText++;
    delayCounter++;
    swipeText.style.animation = `swipeAnimation 1s ease ${3 * delayCounter}s`;
    setTimeout(() => {
        swipeText.innerText = swipeTextList[countText];
    }, 500)
    console.log(swipeTextList[countText])
    if (countText == 4) {
        countText = 0;
    }
    setTimeout(typewriter, 3000)

}

setTimeout(typewriter, 3000)
