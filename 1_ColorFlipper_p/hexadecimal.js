const btn = document.querySelector(".btn.btn-hero")
const colorHexString = document.querySelector(".color-hex-string")

btn.addEventListener('click', function(){
    const randomColorHexString = getRandomColorHexString()
    colorHexString.textContent = '#' + randomColorHexString
    document.body.style.backgroundColor = '#' + randomColorHexString
})

function getRandomColorHexString(){
    const randomNumber = Math.floor(Math.random() * Math.pow(16, 6))
    const randomColorHexString = randomNumber.toString(16) 
    
    return randomColorHexString
}

