const scaleMap = [
    {
        value: 0,
        color: '#fff'
    },
    {
        value: 30,
        color: 'red'
    },
    {
        value: 70,
        color: 'blue'
    },
    {
        value: 90,
        color: 'orange'
    },
    {
        value: 120,
        color: 'yellow'
    },
    {
        value: 140,
        color: 'purple'
    },
    {
        value: 160,
        color: 'skyblue'
    },
    {
        value: 200,
        color: 'hotpink'
    },
]

const gauge = document.querySelector('.gauge')
const pointer = document.querySelector('.pointer')
const textInput = document.querySelector('.text-input')
const rangeInput = document.querySelector('.range-input')
const maxValue = Math.max(...scaleMap.map(item => item.value))
const minValue = Math.min(...scaleMap.map(item => item.value))
const defaultValue = maxValue / 2
// 仪表盘可以旋转的度数
// const gaugeRotateDeg = 180 + (parseInt(window.getComputedStyle(pointer).bottom) * 2)
// console.log(parseInt(window.getComputedStyle(pointer).bottom), gaugeRotateDeg);

scaleMap.forEach(scale => {
    addScale(scale)
})

initInput()

textInput.oninput = function (e) {
    setInputValue(e.target.value)
}

rangeInput.oninput = function (e) {
    setInputValue(e.target.value)
}

function setInputValue(value) {
    textInput.value = value
    rangeInput.value = value
    setPointerStyle(value)
}

function setPointerStyle(value) {
    value = +value
    pointer.style.transform = `rotate(${calcPointerDeg(value)}deg)`
    const scale = scaleMap.find(item => item.value >= value)
    scale && (pointer.style.setProperty('--color', scale.color))
}

function addScale({ value, color }) {
    const scale = document.createElement('div')
    scale.classList.add('scale')
    scale.style.transform = `rotate(${calcSacleDeg(value)}deg)`
    scale.style.setProperty('--color', color)
    gauge.append(scale)
}

function calcSacleDeg(value) {
    return value * (180 / maxValue)
}

function calcPointerDeg(value) {
    if (value > maxValue || value < minValue) {
        return
    }
    return value * (180 / maxValue)
}

function initInput() {
    textInput.max = maxValue
    textInput.min = minValue
    rangeInput.max = maxValue
    rangeInput.min = minValue
    setInputValue(defaultValue)
}


