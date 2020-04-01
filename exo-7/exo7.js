console.log("exo-7");

for (const item of jsonDatas) {
   console.log(item)
}

console.log(jsonDatas[0]['name']);

const translated = {
    car: 'voiture',
    house: 'maison',
    game: 'jeu',
    videoGame: 'jeuVideo'
};

 for (const element in translated){
    element.translatedType = translated[element.translatedType]
 }



let bonjour = document.getElementById('muza');
bonjour.addEventListener('click', alerte);
function alerte() {
    alert('Bonjour')
}


let timeoutID;

let un = document.getElementById('un');
un.textContent = 'un';

function message() {
    let trois = document.getElementById('trois');
    trois.textContent = 'trois';
}
timeoutID = setTimeout(() => {
    document.getElementById('deux').innerText+="deux";
    message();
},2000);



function second() {
    console.log("Troisieme")
}

setTimeout( () => {
    console.log("Deuxieme");
    second();
}, 2000)
