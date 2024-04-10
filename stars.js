// const rand = require("./randomize")
import { random, shuffle } from "./randomize.js"
// if (typeof document !== 'undefined') {
let star = document.querySelector(".star")


let W = window.innerWidth -5
let H = window.innerHeight -5
let boxShadow =""
for(let i = 0; i <= 1000; i++){
    let x = random(-1*W,W)
    let y = random(-1*H,H)
    let s = Math.random()
    boxShadow += `${x}px ${y}px 0px ${s}px #fff,`
    let n = 1
    for (let i=0;i<4;i++){
  
      boxShadow += `${x}px ${y}px ${n}px ${s}px #fff,`
      n+=2
    }
}
boxShadow = boxShadow.slice(0, -1)
star.style.boxShadow=boxShadow

// }

let x =0,
    y = 0
  
document.addEventListener('keydown',function(e){
  console.log("key",e)
  if(e.keyCode == 37) y -= 5
  if(e.keyCode == 39) y += 5
  if(e.keyCode == 38) x -= 5
  if(e.keyCode == 40) x += 5

  document.querySelector('.cube').style.transform=`rotateY(${y}deg) rotateX(${x}deg)`
})