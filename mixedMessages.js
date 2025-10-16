const greetings = ['Hi', 'Bonjour', 'Hola', 'Guten Tag', 'Ciao', 'Namaste', 'Ni hao', 'Konnichi wa']
let a = Math.floor(Math.random() * greetings.length)
let theGreeting = greetings[a]
const countries = ['England', 'France', 'Spain', 'Germany', 'Italy', 'India', 'China', 'Japan']
let theCountry = countries[a]

const names = ['Amanda', 'Benny', 'Charlie', 'Dennis', 'Elijah', 'Finland', 'Gerald', 'Hassan', 'Ijenu', 'Jacob', 'Karl', 'Liam', 'Mary', 'Nana', 'Oscar', 'Piper', 'Quincy', 'Raymond', 'Steven', 'Tilly', 'Unice', 'Victor', 'Wapol', 'Xavier', 'Yewande', 'Zack']
let b = Math.floor(Math.random() * names.length)
let theName = names[b]
let pNames = names.toSpliced(b, 1)
//console.log(pNames)
let c = Math.floor(Math.random() * pNames.length)
let partner = pNames[c]

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'violet']
let theColor = colors[Math.floor(Math.random() * colors.length)]

const sports = ['football','basketball', 'tennis', 'table tennis', 'swimming', 'volleyball', 'netball', 'hockey', 'badminton']
let theSport = sports[Math.floor(Math.random() * sports.length)]

const foods = ['spaghetti', 'fish n chips', 'pizza', 'jollof rice', 'fried rice', 'noodles', 'lasagne', 'tacos', 'fried chicken', 'sushi']
let d = Math.floor(Math.random() * foods.length)
let theFood = foods[d]
let dFoods = foods.toSpliced(d, 1)
//console.log(dFoods)
let e = Math.floor(Math.random() * dFoods.length)
let leastFav = dFoods[e]

const theMessage = `${theGreeting}! My name is ${theName} and I was born in ${theCountry}. My favourite color is ${theColor}. According to my partner ${partner}, the sport I am best at is ${theSport}. My favourite food is ${theFood} and my least favourite food is ${leastFav}.`
console.log(theMessage)