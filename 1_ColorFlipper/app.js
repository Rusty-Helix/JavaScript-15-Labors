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
'aquamarine',
'azure',
'beige',
'bisque',
'blanchedalmond',
'blueviolet',
'brown',
'burlywood',
'cadetblue',
'chartreuse',
'chocolate',
'coral',
'cornflowerblue',
'cornsilk',
'crimson',
'cyan',
'darkblue',
'darkcyan',
'darkgoldenrod',
'darkgray',
'darkkhaki',
'darmagenta',
'darkolivergreen',
'darkorange',
'darkorchid',
'darkred',
'darksalmon',
'darkturquoise',
'deeppink',
'darkslateblue',
'deepskyblue',
'dimgray',
'dodgerblue',
'firebrick',
'floralwhite',
'forestgreen',
'fuchsia',
'gainsboro',
'ghostwhite',
'goldenrod',
'gold',
'greenyellow',
'honeydew',
'indianred',
'hotpink',
'indigo',
'ivory',
'khaki',
'lavender',
'lavenderblush',
'lawngreen',
'lemonchiffon',
'lightblue',
'lightcoral',
'lightcyan',
'lightgoldenrodyellow',
'ligthslategrey',
'limegreen',
'linen',
'magenta',
'maroon',
'navy',
'navajowhite',
'moccasin',
'mediumpurple',
'mediumblue',
'oldlace',
'olivedrab',
'orangered',
'palegoldenrod',
'palegreen',
'plum',
'powderblue',
'rosybrown',
'royalblue',
'saddlebrown',
'snow',
'springgreen',
'skyblue',
'slateblue',
'sienna',
'seashell',
'steelblue',
'tan',
'thistle',
'tomato',
'turquoise',
'violet',
'wheat',
'white',
'whitesmoke',
'yellowgreen',
];
