const box = document.querySelectorAll('.box')
const item = document.querySelector('item')
const time = document.querySelector('time')
const points = document.querySelector('points')

let result = 0

function randomBox(){
    box.forEach(box =>{
        box.classList.remove('item')
    })
    let randomSpot= box[Math.floor(Math.random()*12)]
    randomSpot.classList.add('item')
}
function moveItem(){
    let time=null
    time= setInterval(randomBox, 200)
}
