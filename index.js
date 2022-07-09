const box = document.querySelectorAll('.box')
const item = document.querySelector('.item')
const time = document.querySelector('#time')
const points = document.querySelector('#points')

let result = 0
let click
let cTime=60

function randomBox(){
    box.forEach(box =>{
        box.classList.remove('item')
    })
    let randomSpot= box[Math.floor(Math.random()*9)]
    randomSpot.classlist.add('item')
    click= randomBox.id
}
    box.forEach(box => {
        box.addEventListener('click', () => {
            if (box.id === click) {
                result++
                points.textContent = result
                click = null
            }
        })
    })
    
function moveItem(){
    let timeId=null
    timeId= setInterval(randomBox, 1000)
}
//time function https://www.w3schools.com/js/js_timing.asp
function countDown(){
    cTime-1
    time.textContent= cTime
    if(cTime==o){
        clearInterval(countDownTimerId)
        clearInterval(timeId)
        alert('TIME!!! You scored ' + result + ' points.')
    }
}

let cTimeID= setInterval(countDown, 1000)

moveItem()