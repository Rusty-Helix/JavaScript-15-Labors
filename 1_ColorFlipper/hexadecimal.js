const color_hex_string = document.querySelector('.color-hex-string');
const lone_btn = document.querySelector('#lone-btn');

const getRandomNumber = () => Math.floor(Math.random() * Math.pow(16, 6))
const getRandomHexString = () => getRandomNumber().toString(16)

console.log(Math.pow(16, 6))
console.log(getRandomHexString())

lone_btn.addEventListener('click', function(){
    const randomHexString = getRandomHexString();
    color_hex_string.textContent = randomHexString;
    document.body.style.backgroundColor = '#' + randomHexString;
});