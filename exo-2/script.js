// you can write js here
console.log('exo-2');

 inscrit = false // Variable de type boolean
 age = 17 // Variable pour donner l'age



  depart = function(a,b) { //Fct qui prend 2 paramètres et qui à pr but de savoir à quel heure commencer
     let raceNumber = Math.floor(Math.random() * 1000+1000)
     let course9 = 'You will race at 9:30 am ';
      let course11 = 'You will race at 11:00 am ';
      let course12 = 'You will race at 12:30 pm ';
    if (b >= 18) {
       return course9
    }
      if (a === true || b >= 18) {
          return course11  + raceNumber
      }
    if (b < 18 || a === false) {
        return course12  + raceNumber
    }
    else {
        return 'Go see the registration desk'
    }
}