const colors= ['blue', 'green', 'red', 'white', 'grey'];
var btn = document.getElementById("btn");
var bodyBackground = document.getElementsByTagName("body");
var colorText = document.querySelector(".color");
btn.addEventListener("click", function(e) {
   //get random number btw 0 and 4
   const randomNumber = getRandomNumber();
   console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    colorText.textContent = colors[randomNumber];
});
function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);//nombre entier. Math.random = entre 0 et 1
}