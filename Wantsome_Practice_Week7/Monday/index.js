// function Loops(valNum){
//  var i;
//  for( i=0; i < valNum; i++){
//         console.log('Sunt la iteratia ' + i);
//     }
// }
// Loops(6);


// function loopsW(valNum){
//     while (valNum < 100){
//         console.log('Sunt la iteratia '+ valNum);
//         valNum++;
//     }
// }
// loopsW(78);


// var Studs = ["Alin", "George"];
// function iterateOverArray(arrayToIterate){
//     var i;
//     for(i=0; i < arrayToIterate.length; i++){
//         console.log(arrayToIterate[i]);
//     }
// }

// iterateOverArray(Studs);


// var userDetails = {
//     name: 'Tesla',
//     surname: 'Toyota',
//     age: 99,
//   }
// function printObjectData(obj){
//   for (key in obj){
//       console.log(obj[key]);
//   }
// }
// printObjectData(userDetails);


// var Palala={
//     nume: 'Andrei',
//     prenume: 'Edmond',
//     varsta: '27',
//     oras: 'Roman'
// }
// function loop(objectToIterate) {
//     var i;
//     var objectKeys=Object.keys(objectToIterate);
//     for(i=0;i<objectKeys.length;i++){
//         console.log(objectToIterate[objectKeys[i]]);
//     }
// }

// loop(Palala);



// //Ex1 FOR:
// function iterateOverArray(arrayToIterate){
//     var i;
//     var txt = '';
//     for(i=0; i <= 1000; i+=100){
//         txt += (i+' ');
//     }
// console.log(txt);

// }
// iterateOverArray();


// //Ex2 FOR:

// var i;
// var text = ' ';
// for(i=1; i<=128; i*=2){
//     text +=(i+' ');
// }
// console.log(text);


// //Ex3 FOR:

// var i;
// var textu= ' ';
// for(i=0; i<=10; i+=2){
//     textu +=(i+ ' ');
// }
// console.log(textu);

// //Ex4 FOR:

// var i;
// var textul= ' ';
// for(i=3; i<=15; i+=3){
//     textul +=(i+ ' ');
// }
// console.log(textul);

// //Ex5 FOR:

// var i;
// var textule= ' ';
// for(i=9; i>=0; i--){
//     textule +=(i+ ' ');
// }
// console.log(textule);


// //Ex6 FOR:

// var i,j;
// var textulet='';
// for(i=1; i<=4; i++){
//     for(j=1; j<=3;j++){
//         textulet += i;
//     }
// }
// console.log(textulet);

// //Ex7 FOR:

// var i;
// var messaj= '';
// for(i=0; i<=10, i+=1){
    
// }

// conditionalFn = function(){ return false;}
// actionFn = function(){ console.log("Vreau sa ies la tabla!");};

// counter = 10;
// conditionalFn = function (){
//     counter--;
//     return counter >=0;
// };
// stream = function(cond, action){
//     while(cond()){
//         action();
//     }
// }
// stream(conditionalFn, actionFn);


//computeSumOfArrayElements([1,2,3,4]);

computeSumOfArrayElements = function(arr){
    var arrLength= arr.length;
    var sum = 0;
    while(arrLength >=1 ){
        sum += arr[arrLength];
        arrLength--;
    }
    return sum;
}
console.log(computeSumOfArrayElements[1,2,3,4]);