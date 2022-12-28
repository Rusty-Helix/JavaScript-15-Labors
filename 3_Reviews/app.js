// local reviews data
const champions = [
  {
    id: 1,
    name: "Amumu",
    entitlement: "The Sad Mummy",
    image:
      "images/Amumu_0.jpg",
    story:
      "A lonely and melancholy soul from ancient Shurima, Amumu roams the world in search of a friend. Cursed by an ancient spell, he is doomed to remain alone forever, as his touch is death and his affection ruin. Those who claim to have seen him describe Amumu as a living cadaver, small in stature and covered in bandages the color of lichen. Amumu has inspired myths, folklore, and legends told and retold for generations – such that it is impossible to separate truth from fiction.",
  },
  {
    id: 2,
    name: "Azir",
    entitlement: "The Emperor of The Sands",
    image:
      "images/Azir_0.jpg",
    story:
      "Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended being of immense power. With his buried city risen from the sand, Azir seeks to restore Shurima to its former glory.",
  },
  {
    id: 3,
    name: "Nasus",
    entitlement: "The Curator of The Sands",
    image:
      "images/Nasus_0.jpg",
    story:
      "Nasus is an imposing, jackal-headed Ascended—those heroic and god-like figures once revered by the people of Shurima. Fiercely intelligent, he was a guardian of knowledge and peerless strategist whose wisdom guided the empire to greatness for many centuries. After the failed Ascension of Azir, Nasus went into self-imposed exile, becoming little more than a legend. Now that the Sun Disc has risen once more, he has returned, determined to ensure it never falls again.",
  },
  {
    id: 4,
    name: "Xerath",
    entitlement: "The Magus Ascendant",
    image:
      "images/Xerath_0.jpg",
    story:
      "Xerath is an Ascended Magus of ancient Shurima, a being of arcane energy writhing in the broken shards of a magical sarcophagus. For millennia, he was trapped beneath the desert sands, but the rise of Shurima freed him from his ancient prison. Driven insane with power, he now seeks to take what he believes is rightfully his and replace the upstart civilizations of the world with one fashioned in his image.",
  },
];

const image = document.querySelector("#champion-image");
const champion_name = document.querySelector("#champion-name");
const entitlement = document.querySelector("#entitlement");
const story = document.querySelector("#story");

const previousButton= document.querySelector(".previous-button");
const nextButton= document.querySelector(".next-button");
const randomButton= document.querySelector(".random-button");

let currentChampionIndex = 0; // global

// load initial item
window.addEventListener('DOMContentLoaded', function(){
  showChampion(currentChampionIndex);
})

// show champion based on item
function showChampion(){
  const champion = champions[currentChampionIndex];
  image.src = champion.image;
  champion_name.textContent = champion.name
  entitlement.textContent = champion.entitlement;
  story.textContent = champion.story;
}

// show next champion
nextButton.addEventListener('click', function(){
  currentChampionIndex++;
  if(currentChampionIndex > champions.length - 1)
    currentChampionIndex = 0
    showChampion();
  })
  
  // show previous champion
  previousButton.addEventListener('click', function(){
    currentChampionIndex--;
    if(currentChampionIndex < 0)
      currentChampionIndex = champions.length - 1
  showChampion();
})

randomButton.addEventListener('click', function(){
  // default: let without any declaration keywords
  const getRandomChampionIndex = () => {
    return Math.floor(Math.random() * champions.length)
  }
  currentChampionIndex = getRandomChampionIndex()
  showChampion();
})