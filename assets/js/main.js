

let root = document.querySelector(":root");
let screens = [
    {Image: "./assets/img/01.webp",
    Title: "Spiderman"}, 
    {Image: "./assets/img/02.webp",
    Title: "Ratchet And Clank"}, 
    {Image: "./assets/img/03.webp",
    Title: "Fortnite"}, 
    {Image: "./assets/img/04.webp",
    Title: "Stray"},
    {Image: "./assets/img/05.webp",
    Title: "Avengers"}
];
let imgContainer = document.getElementById("imgContainer")
let counter = 0

for(let i = 0; i < screens.length; i++){
    imgContainer.innerHTML += `<img src="${screens[i].Image}" id="${i}" class="invisible">`
    imgContainer.innerHTML += `<h1 class="invisible" id="T${i}">${screens[i].Title}</h1>`
}

let firstImage = document.getElementById("0")
let firstTitle = document.getElementById("T0")
firstImage.classList.remove("invisible")
firstTitle.classList.remove("invisible")

function counterUp(){
    counter++
    counterChecker()
    backgroundUpdater()
}

function counterDown(){
    counter--
    counterChecker()
    backgroundUpdater()
}

function counterChecker(){
    if(counter > screens.length-1){
        counter = 0
    } else if(counter < 0){
        counter = screens.length-1
    }
}

function backgroundUpdater(){

    for(let i = 0; i < screens.length; i++){
        let hidingSlide = document.getElementById(`${i}`)
        let hidingTitle = document.getElementById(`T${i}`)

        if(!hidingTitle.classList.contains("invisible")){
            hidingTitle.classList.add("invisible")}

        if(!hidingSlide.classList.contains("invisible")){
        hidingSlide.classList.add("invisible")}
    }

    let currentImg = document.getElementById(`${counter}`)
    let currentTitle = document.getElementById(`T${counter}`)

    currentImg.classList.remove("invisible")
    currentTitle.classList.remove("invisible")    
}