// DOM selectors
const hamburger = document.querySelector(".hamburger")
const menuItems = document.querySelector(".menuItems")
const listItems = document.querySelectorAll(".menuItems a");
const swipeText = document.querySelector(".text");
const logo = document.querySelector(".logo img");
const burger = document.querySelector(".hamburger");
let swipeTextList = ["Full Stack Web developer", "Game Development Enthusiast", "Data Science Enthusiast", "UI/UX Designer"];
let countText = 1;
let delayCounter = 0;
let mouse = document.querySelector(".cursor");
let interactiveText = mouse.querySelector("span");

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
            listItemTwo.classList.remove("selected")
            listItemTwo.classList.toggle('fade')
        })
        listItem.classList.add("selected");
    })
})


function typewriter() {
    countText++;
    delayCounter++;
    swipeText.style.animation = `swipeAnimation 1s ease ${3 * delayCounter}s`;
    setTimeout(() => {
        swipeText.innerText = swipeTextList[countText];
    }, 500)
    if (countText == 4) {
        countText = 0;
    }
    setTimeout(typewriter, 3000)

}

setTimeout(typewriter, 3000)


function cursor(e) {
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
}
function interactiveMouse(e) {
    const item = e.target;
    console.log(item.parentNode.classList)
    if (item.id === "logo" || item.id === "burger" || item.classList.contains('button') || item.parentNode.classList.contains("links-area") || item.parentNode.classList.contains("menuLinks")) {
        mouse.classList.add("interactive-purple")
        interactiveText.innerHTML = item.innerText || "tap";
    } else {
        mouse.classList.remove("interactive-purple");
        interactiveText.innerHTML = "";
    }
}
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", interactiveMouse);
