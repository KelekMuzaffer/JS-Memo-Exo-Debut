// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
let rmlast = secretMessage.pop() // suprimme le dernier element d'un tableau
let addEnd = secretMessage.push('to','program'); // ajoute des éléments à la fin du tableau

let pos = secretMessage.indexOf('easily') // fonction qui permet de chercher un index dans un tableau
secretMessage.splice(6,1,'right')// changer easily par right à faire

let rmfirst = secretMessage.shift() // supprime le 1er mots du tableau
let addfirst = secretMessage.unshift('Programming') // ajoute Programming au debut du tableau
secretMessage.splice(6,5,'know') // suprime 5 éléments a partir de l'index 6 et ajoute know à l'index 6

console.log(secretMessage.join(' '))// join permet de transformer le tableau en chaine de caractere