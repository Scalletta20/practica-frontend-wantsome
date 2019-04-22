//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

// function protectedEmail (email) {
//     var before = email.split('.');
//     var after = email.split('@');
//     return before[0] + '...' + '@' + after[1];

//     }
    
// console.log(protectedEmail('ovidiu.grigoras@test.com'));


//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"

// function makeUpperCase(string){
//     var string = string.split(' ');
//     //console.log(string);
//     var newString = "";
//     for( i = 0; i< string.length; i++){
//         newString  += string[i][0].toUpperCase()+ string[i].slice(1)+ ' ';
//     }
//     return newString;
    
// }

// console.log(makeUpperCase('i am superman'));




//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

// function getUpperLowerCases(str){
//     var text = ' '; 
//     for( i = 0; i < str.length; i++){

//         console.log(text[i] += text[i].toUpperCase());
//         if(text[i] >= 65 && text[i] <= 90){
//            text[i] += text[i].toUpperCase();
//         }
//         else{
//             text[i] += text[i].toLowerCase();    
//         }
//     }
// }

// console.log(getUpperLowerCases("xxXyYzZZ"));

//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

// function concatenation (string, number){
//     var finalString = '';
//     for (var i = 0; i < number; i++){
//         finalString += string;
//     }
//     return finalString;
// }

// console.log(concatenation('Ovi',3));


//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante

function isPalindrome(string){
    var len = string.length;
    for (var i = 0; i < len/2; i++) {
        if (len[i] !== len[len-1]) {
            return false;
        }
     }
}
console.log(isPalindrome('level'));

"cojoc".split("").reverse().join("") === "cojoc";

//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care contine ca si elemente cele mai mari numere din fiecare array

//Ex7
// Implementati o functie care face reverse la un string

//Ex8 
// Implementati o functie care calculeaza factorialul unui numar

//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma

//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care trece testul specificat

//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea string


// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana cand intalneste elementul cu valoarea specificata

// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN

// Ex 14
// Scrieti o functie care repeta un string de n ori specificate