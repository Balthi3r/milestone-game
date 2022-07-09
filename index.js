const start = () =>{
const box = document.querySelectorAll('.box')
const item = document.querySelector('.item')
const time = document.querySelector('#time')
const points = document.querySelector('#points')

let result = 0
let clicker
let cTime=10


function randomBox(){
    box.forEach(box =>{
        box.classList.remove('item')
    })
    let randomSpot= box[Math.floor(Math.random()*9)]
    randomSpot.classList.add('item')

    clicker = randomSpot.id
}
    box.forEach(box => {
        box.addEventListener('click', () => {
            if (box.id === clicker) {
                result++
                points.textContent = result
                clicker = null 
            }
        })
    })
    
    
function moveItem(){
    timeId= setInterval(randomBox, 1000)
}
//time function https://www.w3schools.com/js/js_timing.asp
function countDown(){
    cTime-=1
    time.textContent= cTime
    if(cTime==0){
        clearInterval(cTimeId)
        clearInterval(timeId)
        alert('TIME!!! You scored ' + result + ' points.')
    }
}


let cTimeId= setInterval(countDown, 1000)

moveItem()
}