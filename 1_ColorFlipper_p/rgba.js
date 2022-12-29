const colorRgbaString = document.querySelector('.color-rgba-string');
const loneButton = document.querySelector('#lone-btn');

const getRandomHexNumber = () => Math.floor(Math.random() * Math.pow(16, 6))
const getRandomHexString = () => getRandomHexNumber().toString(16)

const getRandomRgbaString = () => {
    const randomHexString = getRandomHexString()
    const r = parseInt(randomHexString.substring(0, 2), 16).toString()
    const g = parseInt(randomHexString.substring(2, 4), 16).toString()
    const b = parseInt(randomHexString.substring(4, 6), 16).toString()
    
    return `rgba(${r}, ${g}, ${b})`
}

loneButton.addEventListener('click', function(){
    const randomRgbaString = getRandomRgbaString()
    colorRgbaString.textContent = randomRgbaString
    document.body.style.backgroundColor = randomRgbaString
})