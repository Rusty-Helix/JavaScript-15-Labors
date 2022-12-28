const lone_btn = document.querySelector('#lone-btn')
const color_string = document.querySelector('.color-string')

const getRandomColorIndex = () => Math.floor(Math.random() * colors.length)

lone_btn.addEventListener('click', function(){
    const randomColorIndex = getRandomColorIndex()
    document.body.style.backgroundColor = colors[randomColorIndex];
    color_string.textContent = colors[randomColorIndex]
});


const colors = [
'silver',
'gray',
'maroon',
'red',
'purple',
'fuchsia',
'green',
'lime',
'olive',
'yellow',
'navy',
'blue',
'teal',
'aqua',
'aliceblue',
'antiquewhite',
'aqua',
'aquamarine',];
