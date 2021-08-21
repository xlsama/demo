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
        color: 'hotpink'
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
        value: 200,
        color: 'pink'
    },
]

const gauge = document.querySelector('.gauge')
const pointer = document.querySelector('.pointer')
const textInput = document.querySelector('.text-input')
const rangeInput = document.querySelector('.range-input')
const maxValue = Math.max(...scaleMap.map(item => item.value))
const minValue = Math.min(...scaleMap.map(item => item.value))

scaleMap.forEach(scale => {
    addScale(scale)
})

initInput()

textInput.oninput = function (e) {
    setPointerStyle(e.target.value)

}

rangeInput.oninput = function (e) {
    setPointerStyle(e.target.value)
}

function setPointerStyle(value) {
    value = +value
    console.log(value);
    pointer.style.transform = `rotate(${calcPointerDeg(value)}deg)`
    const scale = scaleMap.find(item => item.value === value)
    scale && (pointer.style.backgroundColor = scale.color)
}

function addScale({ value, color }) {
    const scale = document.createElement('div')
    scale.classList.add('scale')
    scale.style.transform = `rotate(${calcSacleDeg(value)}deg)`
    scale.style.backgroundColor = color
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
}


