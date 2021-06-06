const homeBtn = document.getElementById("home")
const greenBtn = document.getElementById("green")
const yellowBtn = document.getElementById("yellow")
const redBtn = document.getElementById("red")
const purpleBtn = document.getElementById("purple")
const blueBtn = document.getElementById("blue")

const menuBtn = document.getElementsByClassName("hamburger")

const h1Text = document.getElementById("heading")




//Radio button clickevent

homeBtn.addEventListener("click", function() {

    toggleColor();
});



greenBtn.addEventListener("click", function() {

    toggleColor();
});



yellowBtn.addEventListener("click", function() {

    toggleColor();
});



redBtn.addEventListener("click", function() {

    toggleColor();
});



purpleBtn.addEventListener("click", function() {

    toggleColor();
});



blueBtn.addEventListener("click", function() {
    
   toggleColor();
});






//Text changing function

changeTextRed = () => {
    
    redBtn.textContent = "Red"
}




//Color changing function

toggleColor = () => {

    document.body.classList.toggle("blue-background")
}










/*


menuBtn.addEventListener("mouseover", function () {

toggleMenu()

})


*/




