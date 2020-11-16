// DOM selectors
const hamburger = document.querySelector(".hamburger")
const menuItems = document.querySelector(".menuItems")
const listItems = document.querySelectorAll(".menuItems a");
// Functions

hamburger.addEventListener("click", () => {
    menuItems.classList.toggle('toggleMenu')
    listItems.forEach(listItem => {
        listItem.classList.toggle('fade')
    })
})
listItems.forEach(listItem => {
    listItem.addEventListener("click", () => {
        menuItems.classList.toggle('toggleMenu')
        listItems.forEach(listItemTwo => {
            console.log(listItemTwo)
            listItemTwo.classList.remove("selected")
            listItemTwo.classList.toggle('fade')
        })
        listItem.classList.add("selected");

    })
})

