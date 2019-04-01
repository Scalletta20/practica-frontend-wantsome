// // 1. Scrieti o functie de tip named function care accepta ca argument un CNP si verifica sexul unei persoane.
// In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".

function checkGender(CNP){
    if (CNP.charAt(0)=='1' || CNP.charAt(0)=='5'){
        return "Persoana verificata este de sexul M";
    }
    else{
        return "Persoana verificata este de sexul F";
    }
}

console.log(checkGender(1930303226710));


// // 2. Scrieti o functie de tip function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si decide calificativul punctajului.
// Criteriile sunt urmatoarele:
// - 1-3 = E
// - 3-6 = D
// - 7-8 = B
// - 9 = A
// - 10 = A+
// Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]".

var checkGrade = function(number){
        switch (number){
            case (1 <= number <= 3): return "Calificativul corespunzator punctajului 1-3 este E";
            break;
    
            case (3 <= number <= 6): return "Calificativul corespunzator punctajului 3-6 este D";
            break;
    
            case (number == 7 && number == 8): return "Calificativul corespunzator punctajului 7-8 este B";
            break;

            case (number == 9): return "Calificativul corespunzator punctajului 9 este A";
            break;

            case (number == 10): return "Calificativul corespunzator punctajului 10 este A+";
            break;
    
            default:
            return 'Hello World!!';
        }
    }

console.log(checkGrade(7));

// 3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma: 
//      "Marca [marca] se produce in [tara]".
// Trebuie sa aveti macar 6 cazuri. In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta.
// " Scrieti codul in 3 variante diferite.




// 4. Scrieti o functie de tip IIFE care afiseaza in consola: "Afisez, deci ma autoapelez".
// Veti crea un fisier javascript separat pe care il veti include intr-un fisier html. 
// Verificarea se va face prin deschiderea paginii html in browser.

(function() {
    var shout = "Afisez, deci ma autoapelez";
    alert(shout);
})();