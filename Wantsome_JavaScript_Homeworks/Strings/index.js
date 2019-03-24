// 1. Scrieti o functie care verifica daca un input este sau nu de tip string.
function isString(input) {
    if (typeof input === "string") {
    return true;
    } else {
    return false;
    }
    }
    console.log(isString('w3resource'));
    console.log(isString([1, 2, 4, 0]));

// 2. Scrieti o functie care verifica daca un string este gol sau nu.

function is_Blank(input){
    if (input.length === 0)
        return true;
        else 
        return false;
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));

// 3. Scrieti o functie care accepta ca input un string si il transforma intr-un array de cuvinte:

function string_to_array (str) {
    var arr = [];
    var res = str.split(' ');
    arr.push(res);
    return arr;
    }
console.log(string_to_array("Robin Singh"));

// 4. Scrieti o functie care transforma un string in forma abreviata:

function abbrev_name(str) {
    if( typeof str == "string" && str.length >= 0)
    return str.slice(0,7);
    }
    console.log(abbrev_name("Robin Singh"));

// 5. Scrieti o functie care face prima litera a unui string sa fie de tip Capital:

function capitalize(string){
    return string[0].toUpperCase() + string.slice(1);
}
console.log(capitalize('js string exercises'));

// 6. Scrieti o functie care elimina un numar specificat de caractere pronind de la inceputul string-ului
function truncate_string(string){
    
}
console.log(truncate_string("Robin Singh",4));

// 7. Scrieti o functie care specifica daca caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau nu:
function isUpperCaseAt(str, n){
    if(str.charAt(n) === str.charAt(n).toUpperCase()) return true;
    else return false;
    };
console.log(isUpperCaseAt('Js STRNG EXERCISES', 1));

// 8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:
function insert(str, text, pos){
    if ( str );
}
console.log(insert('We are doing some exercises.', 'JavaScript ' ,18));

// 9. Scrieti o functie care elimna prima aparitie a unui string dintr-un alt string:
function remove_first_occurrence(string1, string2){
    return string1.replace(string2, '');
    };
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

// 10. Scrieti o functie care compara doua string-uri case-insensitive:
function compare_strings (string1, string2) {
    var res = string1.toUpperCase() === string2.toUpperCase();
    return res;
}
console.log(compare_strings('abcd', 'AbcD'));

// 11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:
function Uncapitalize(string){
    return string[0].toLowerCase() + string.slice(1);
}
console.log(Uncapitalize('Js string exercises'));

