const color_rgba_string = document.querySelector('.color-rgba-string');
const lone_btn = document.querySelector('#lone-btn');

const getRandomNumber = () => Math.floor(Math.random() * Math.pow(16, 6))
const getRandomHexString = () => getRandomNumber().toString(16)

function getRandomRgbaString() {
    const randomHexString = getRandomHexString()
    const r = parseInt(randomHexString.substring(0, 2), 16).toString()
    const g = parseInt(randomHexString.substring(2, 4), 16).toString()
    const b = parseInt(randomHexString.substring(4, 6), 16).toString()
    return `rgba(${r}, ${g}, ${b})`
}

lone_btn.addEventListener('click', function(){
    const randomRgbaString = getRandomRgbaString();
    color_rgba_string.textContent = randomRgbaString;
    document.body.style.backgroundColor = randomRgbaString;
});