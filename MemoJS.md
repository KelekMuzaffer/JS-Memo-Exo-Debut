# JavaScript
Le JavaScript est aujourd’hui l’un des langages de programmation les plus populaires et il fait partie des langages web dits « standards » avec le HTML et le CSS. 

Le JavaScript est un langage dynamique, c’est-à-dire un langage qui va nous permettre de générer du contenu dynamique pour nos pages web.

Un contenu « dynamique » est un contenu qui va se mettre à jour dynamiquement, c’est-à-dire changer sans qu’on ait besoin de modifier le code manuellement mais plutôt en fonction de différents facteurs externes.


### Moteur V8
 
 Le moteur V8 compile directement le code JavaScript en code machine natif avant de l’exécuter, donc optimisation.
 
Créer un mémo prenant en compte les différentes versions ES5/6 de javascript : 

● Les Conditions 
● L’asynchrone (Pour le moment simplement les callback) 





###Variable
        - let nom = "Muza"
        - const nom = "Muza"
        - concatenation = "exprssion1" + "expression2"
        - ou
        -  ` ${variable1}  ${variable2} textici `

###Tableau
        - var tab = [1,2,3]
        - tab[0] = 1
        
        Manipulation d'un tableau 
        
        var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
        let rmlast = secretMessage.pop() // suprimme le dernier element d'un tableau
        let addEnd = secretMessage.push('to','program'); // ajoute des éléments à la fin du tableau
        
        let pos = secretMessage.indexOf('easily') // fonction qui permet de chercher un index dans un tableau
        secretMessage.splice(6,1,'right')// changer easily par right à faire
        
        let rmfirst = secretMessage.shift() // supprime le 1er mots du tableau
        let addfirst = secretMessage.unshift('Programming') // ajoute Programming au debut du tableau
        secretMessage.splice(6,5,'know') // suprime 5 éléments a partir de l'index 6 et ajoute know à l'index 6
        
        console.log(secretMessage.join(' '))// join permet de transformer le tableau en chaine de caractere

####Objet : une variable qui contient des info qui ont des clé particulière
        - var eleve = {
            nom:'Muza',
            note:[20,0]
        }
        - eleve.nom (resultat c'est Muza)
        - eleve.note[0]
        - eleve.retard = oui // rajoute ou modifie dans le tableau une ligne retard qui vaut oui

### Objet avec tableau à l'intérieur
    - let team = {
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
            ]
     };

###Boucle

        -       for (let i = 0; i < input.length; i++){
            for (let j = 0 ; j < vowels.length; j++ ) {
              if (input.charAt(i) === vowels[j]) {
                  resultarray.push(input.charAt(i))
              }
            }
          }

        - let alphabet = ['a','b','c','d','e'];
           
          
             - For (const lettre of alphabet){       // boucle for qui affiche un part un ce qu'il y a ds le tableau
                 console.log(lettre)
             }

        
        - let perso = {
            prenom: 'jean',
            nom: 'rean',
            age: '55'
        };
           
               
            - For (const key in perso){       // boucle for qui affiche par ligne ce qu'il y à dans l'objet 
              console.log(`${key}: ${perso[key]}`);
              }

    
###Fonction
      JS de base
      
             - function isWinner(nom) {
                    console.log(nom)
                      }


     ES6
     
     - Fct qui determine un winner  ac plrs fct à l'interieur
                
                function playGame() {
                     let uchoice = getUserChoice('bomb'.toLowerCase());
                    let computerChoise = getComputerChoise();
                    return console.log( `${computerChoise}  ${uchoice} ${determineWinner(uchoice,computerChoise)}`);
                }
               
       - Fct qui ajoute un objet dans un tableau
             
               let addplayer =  (first, last, age) =>{
                        team._players.push({ firstName: first, lastName: last, age: age })
                };
                
       - Fonction qui retourne le total de point dans un tableau
                
                let countPoints = team =>{
                    let total=null;
                        for (let n = 0 ; n < team._games.length; n++){
                            total = total + team._games[n].teamPoints
                        }
                    return total
                }

###Asynchrone fonction callback

                 let timeoutID;
                 let un = document.getElementById('un');
                 un.textContent = 'un';
                        
                function message() {
                    let trois = document.getElementById('trois');
                    trois.textContent = 'trois';
                }
                
        - fct setTimeout permet d'attendre qu'une fct s'execute pour executer la suivante
                
                timeoutID = setTimeout(() => {
                    document.getElementById('deux').innerText+="deux";
                    message();
                },2000);