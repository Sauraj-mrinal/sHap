const mainButton = document.querySelector("button")
const body = document.body;
const currnetColor = document.querySelector(".Current-Color")

function rendomColorGenerator(){
    const red  = Math.floor(Math.random()*256);
    const green  = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

     const randomColor = `rgb(${red}, ${green},${blue})`
     return randomColor;
}


mainButton.addEventListener("click",()=>{
   const randomColor = rendomColorGenerator();
   body.style.backgroundColor = randomColor;
   currnetColor.textContent = randomColor;
})