// const callbackFn = () => console.log("s-a apelat functia de tip callback");

// const callbackPracticeFn = (loopUntil, callback) => {
//     for(let i = 0; i <= loopUntil; i++){
//         console.log(i);
//     }
//     callback();
// }

// callbackPracticeFn(39, callbackFn);

// Ex1 ------------------->
// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

// const func1 = () => {
//     setTimeout(function(){ console.log('1'); }, 3000);
//   }
  
//   const func2 = () => {
//     setTimeout(function(){ console.log('2'); }, 2000);
//   }
  
//   const func3 = () => {
//       console.log('3')
//   }
  
//   const func4 = () => {
//     setTimeout(function(){ console.log('4'); }, 5000);
//   }
  
//   const func5 = () => {
//       console.log('5')
//   }
  
  
//   func1();
//   func2();
//   func3();
//   func4();
//   func5();

// <---------------------



// Ex2:

// iterati peste toate butoanele si pentru fiecare in parte 
// adaugati un eventListener pentru click si o functie callback care sa printeze in consola "button clicked!"


// const  arr = document.querySelectorAll('button');

// const callbackFn = () => console.log("button clicked!");

// const callbackPracticeFn = (number, callback) => {
//         for(let i = 0; i < number; i++){
//             //console.log("button clicked!");
//             // callback();
//             arr[i].addEventListener('click', callbackFn);
//         }
//     }

// callbackPracticeFn(arr.length, callbackFn);


// Ex3

// Aveti 2 functii, una in care o sa luam userii si una in care luam todos
// fiecare todo are o proprietate Id, pentru fiecare Id care este acelasi ca id-ul din users vom printa 
// ce title se potriveste - o sa faceti o verificare aici.
// Afisati in html un paragraph cu numele userilor, emailul si title-ul din todos.

const main = document.body;
const usersUrl = "https://jsonplaceholder.typicode.com/users";
const todosUrl = "https://jsonplaceholder.typicode.com/todos"


const getUsers = () =>{
   const usersReq = new XMLHttpRequest();
   usersReq.onload = () => {
       console.log(usersReq.response);
   }
   usersReq.open('GET', usersUrl);
   usersReq.send();
}
getUsers();

const getTodos = () => {
   const todosReq = new XMLHttpRequest();
   todosReq.onload = () => {
       console.log(todosReq.response);
   }
   todosReq.open('GET', todosUrl);
   todosReq.send();
}

getTodos();

const showUserDetails = () => {
  
}