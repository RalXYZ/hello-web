const button = document.querySelector('button')
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

function random(number) {
      return Math.floor(Math.random() * number)
}
function randomColor() {
    if (Math.floor(Math.random() * 2))
        return 'hsla(320, 100%, 50%, 0.5)'
    else
        return 'hsla(260, 100%, 50%, 0.5)'

}
function draw() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    for(let i = 0; i < 25; i++) {
        ctx.beginPath()
        ctx.fillStyle = randomColor()
        ctx.arc(random(canvas.clientWidth), random(canvas.clientHeight), random(50), 0, 2 * Math.PI)
        ctx.fill()
    }
}

button.onclick = draw
