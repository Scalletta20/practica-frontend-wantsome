//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana 
la valoarea specificata
*/

// const sumOfN = (p1) =>{
//     let sum = 0;
//     for(i = 1; i <= p1; i++){
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumOfN(5));



/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/

// const maxString = (string) =>{
//     let arr = string.split(' ');
//     let length = 0;
//     let longestLength;
//     for(i = 0; i < string.length; i++){
//         if ( arr[i].length > length){
//             length = arr[i].length;
//             longestLength = arr[i];
//         }
//         return longestLength;
//     }
// }

// console.log(maxString('Wantsome is Awsomeeee today'));


// function maxString(string){
//     let arr = string.split(' ');
//
//     let k = 0, arr1 = [];
//     for(let i = 0; i < arr.length; i++){
//         arr1[k++] = arr[i].length
//     }
//     //console.log(arr);
//     let index = null;
//     let maxValue = 0;
//     for( let i = 0; i < string.length; i++){
//        if(arr1[i] > maxValue) {
//            maxValue = arr1[i];
//            index = i;
//        }
//    }
//
//     return [arr[index]];
// }
//
// console.log(maxString('I do what I wantttt'));

// const maxString = (string) => {
//     const words = string.split(" ");
//     const sortedWords = words.sort((a,b)=> b.length - a.length);
//     return sortedWords[0];
// }

// console.log(maxString('Ana are mere'));

/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/

// const stringReverse = (string) =>{
//     return string.split(" ").reverse().join();
// }

// console.log(stringReverse("Rename this string"));


/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta 
cu urmatoarea litera din alfabet
*/


/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste 
la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/

// const convertToTime = (num) => {
//     const hours = Math.floor(num / 60);  
//   const minutes = num % 60;
//   return `${hours}:${minutes}`;
// }

// console.log(convertToTime(75));


/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate 
alfabetic
*/

const returnAlphabetical = (str) =>{
    let arr = str.split('');
  let sorted = arr.sort();
  return sorted.join('');
}

console.log(returnAlphabetical('Wantsome'));






/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa 
fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/

function checkElementInString(){

}

