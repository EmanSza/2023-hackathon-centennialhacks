document.addEventListener('keydown', logKeyDown)
document.addEventListener('keyup', logKeyUp)

let deltaTimes = []
let lastDown = 0
let avgTime = 0

const avgKeyTime = document.getElementById("avgKeyPress")
const deltaArray = document.getElementById("deltaArray")

function logKeyDown() {
    lastDown = Date.now()
}

function logKeyUp() {
    deltaTimes.push(Date.now() - lastDown)
    getAverageTime()
    avgKeyTime.innerHTML = avgTime.toFixed(3)
    deltaArray.innerHTML = deltaTimes
}

function getAverageTime() {
    avgTime = deltaTimes.reduce((a, b) => { return a + b }, 0) / deltaTimes.length

}