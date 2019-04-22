//Selectati fiecare element cu metodele ajutatoare
// primul dupa id - getElementById
//al doilea si al 3lea cu getElementsByClassName
//cele 2 section cu getElementByTagName
//etc
// La fiecare selectie vom schimba background color-ul cu o culoare diferita pentru fiecare metoda

// const elem = document.getElementById("test");

// elem.style.backgroundColor = 'red';

// const classes = document.getElementsByClassName("test-query-all");

// classes[0].style.backgroundColor = 'yellow';

// const tags = document.getElementsByTagName('section');

// tags[0].style.backgroundColor = 'orange';

// const doi = document.querySelector('ul').children;
// const array=Array.from(doi);


// array[1].previousElementSibling.style.backgroundColor = 'red';
// array[1].nextElementSibling.style.backgroundColor = 'blue';


// // Step 1

// const list = document.querySelector('ul');

// //Step 2
// // create new list item

// const newItem = document.createElement('li');
// newItem.textContent = 'Python';
// // add new item in our dom
// list.appendChild(newItem);

// // create another li item
// const anotherNewItem = document.createElement('li');
// anotherNewItem.textContent = '.Net';
// list.insertBefore(anotherNewItem, list.firstElementChild);

// // modify item

// const modifiedItem = document.createElement('li');
// modifiedItem.textContent = 'More Javascript!';

// list.replaceChild(modifiedItem, list.children[0]);

// list.removeChild(list.lastElementChild);



// Adaugati un tag script la final
// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
// Iterati prin fiecare "li" si puneti clasa "listitem". 
// Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) la pagina noastra

const div = document.body.style.fontFamily = 'Arial, sans-serif';

const spans = document.getElementById('name');

spans.textContent = "Mihail";

const newSpans = document.getElementById('fav-drink');

newSpans.textContent = "Rum";

const sameSpans = document.getElementById('born-place');

sameSpans.textContent = "Iasi";

const newLi = document.getElementsByTagName('li');

newLi.classList.add('listitem');

