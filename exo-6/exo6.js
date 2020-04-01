// Partie 8 code academy
console.log("exo-6");

// commenter cette ligne de code.
var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};

// afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);

// changer le nombre de salle de bains de Joe : il n'en possède au'une.
joeInfo.bathrooms= 1;

// Joe vient d'acquérir un garage changer la structure pour le refléter.
 joeInfo.garage=true;

let first, last, age;

 let team = {

        _players : [
            {
            firstName:'Pablo',
            lastName:'Sanchez',
            age: 11
        }
        ],

        _games : [
            {
            opponent: "Broncos",
            teamPoints: 42,
            opponentPoints: 27
        }
        ],

 };


 let addplayer =  (first, last, age) =>{
         team._players.push({ firstName: first, lastName: last, age: age })
 };
let addopponent =  (opponent, teamPoints, opponentPoints) =>{
    team._games.push({ opponent: opponent, teamPoints: teamPoints, opponentPoints: opponentPoints })
};

let countPoints = team =>{
    let total=null;
        for (let n = 0 ; n < team._games.length; n++){
            total = total + team._games[n].teamPoints
        }
    return total
}

let middlepoint = team =>{
    let middle = null;
    let total=null;
    for (let n = 0 ; n < team._games.length; n++){
        total = total + team._games[n].teamPoints
    }
    middle = total/team._games.length
    return middle
}

// Fct avec reduce pour somme et avg
const seasonpoint = () => team._games.reduce((previous ,current ) => previous + current.teamPoints, 0)
const avgPoint = () => team._games.reduce((previous , current ) => previous + current.opponentPoints, 0) / team._games.length;


// fct map pour le joueur le plus vieux et ranger par ordre croissant
const oldestPlayer = () => Math.max(...team._players.map(player => player.age))
const sortPlayer = () => team._players.map(player => player.firstName).sort((a,b) => (a > b ) ? 1: -1)


addplayer('muzaffer','kelek',25)
addplayer('zz','test',25)
addplayer('Az','rtt',55)
addopponent('Lakers',80,42)
addopponent('Houston',80,42)
addopponent('Hornet',80,42)

console.log(seasonpoint());
console.log(avgPoint());
console.log(`Age of oldest player : ${oldestPlayer()}`);
console.log(sortPlayer());


//  for each pour un tableau

let alphabet = ['a','b','c','d','e'];

for (const lettre of alphabet){
    console.log(lettre)
}


// For each pour un objet

let perso = {
    prenom: 'jean',
    nom: 'rean',
    age: '55'
};

for (const key in perso){
    console.log(`${key}: ${perso[key]}`);
}