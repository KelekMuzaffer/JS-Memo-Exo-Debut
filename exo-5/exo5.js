// you can write js here

console.log('exo-5');
let input = 'Turpentine and turtles';
let vowels = [
            'a',
            'e',
            'i',
            'o',
            'u'
        ];

let resultarray = [];

for (let i = 0; i < input.length; i++){
    for (let j = 0 ; j < vowels.length; j++ ) {
        if (input.charAt(i) === vowels[j]) {
            resultarray.push(input.charAt(i))
        }
    }
}
console.log(resultarray.join(' ').toUpperCase())

// if alphabet.vowels[i] == input.charAt(i)
// alors resultarray.push(input.charAt(i))