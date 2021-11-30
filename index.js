let refresh = document.querySelector("h1")

let num1 =  Math.floor((Math.random() * 6) + 1) 
let num2 =  Math.floor((Math.random() * 6) + 1)

let setImg1 = document.querySelector(".img1").setAttribute("src" , `images/dice${num1}.png`)
let setImg2 = document.querySelector(".img2").setAttribute("src" , `images/dice${num2}.png`)


if(num1>num2)
  refresh.textContent = "Player 1 Won!"
else if(num2>num1)
  refresh.textContent = "Player 2 Won!"
else
refresh.textContent = "Draw!"