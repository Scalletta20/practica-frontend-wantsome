// var x = function(a,b){
//     if (a > b) {
//         return `Numarul mai mare dintre ${a} si ${b} este ${a}`;
//     }
//     else{
//         return b;
//     }
    
// }


// function sameNumber(a,b){
//     var result = x(a,b);
//     console.log(result);
// }

// sameNumber(15,140);


// var helloWordlInLang = function(Code){
//     switch (code){
//         case 'en': return "Hello World";
//         break;

//         case 'es': return "Hola Mundo";
//         break;

//         case 'de': return "Hallo Wereld";
//         break;

//         default:
//         return 'Hello World!!';
//     }
// }

// console.log(helloWorldInLang('ro'));

// var helloWorldInLang = function (theCode) {
//     if(theCode == 'en') 
//         return 'Hello World';
//     else if (theCode == 'es') 
//         return 'Holo Mundo';
//     else if (theCode == 'de') 
//         return 'Hallo Wereld';
//     else return 'Hello World !!!!!!!!';
// }

// console.log(helloWorldInLang('ro'));


// var helloWorldInLang = function(code){
//     var languagesForHw = {
//         "en": "Hello World",
//         "es": "Hola Mundo",
//         "de": "Hallo Wereld",
//     }
//     return languagesForHw[code];
// }

// console.log(helloWorldInLang('en'));

// function pluralize(subs, number){
//     if (subs == 'sheep'){
//         return  subs;
//     }

//     if (subs == 'goose'){
//         return 'geese';
//     }

//     if (number === 1){
//         return "1 "+ subs;
//     }
//     else {
//         return number + subs +'s';
//     }
// }
// console.log(pluralize('goose', 3));


// function annualPayment(dollars){
//     switch (true){
//         case ( dollars < 30000 ): return 0;
//         break;

//         case ( dollars >= 50000 && dollars <= 99999): return dollars*0.35;
//         break;

//         case ( dollars > 100000 ): return dollars*0.4;
//         break;

        
//     }
// }

// console.log(annualPayment(300000));

var isDateInWeekend = function (date){
    var parsedDate = new Date(date);
    var indexOfDay = parsedDate;
    if([5,6].includes(indexOfDay)){
        return true;
    } 
    else {
        return false;
    }
}

console.log(isDateInWeekend('Nov', 15, 2017));