//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.
var array = [1,2,3,4,5];
// console.log(array.length);

//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur
var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];
console.log(array1.join(array2));

//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()
var array3 = ['Car', 'Job'];
var array4 = "2";

console.log(Array.isArray(array3));
//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala
var numbers = ['one', 'two', 'three', 'four', 'five'];
var string = numbers.join(' and ');
console.log(string);

//Ex5: Adaugati 2 elemente noi in arrayul de mai jos
var cars = ['Tesla', 'Dacia'];
cars.push('Lexus', 'Honda');
console.log(cars);


//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.

cars.pop('Honda');
console.log(cars);

//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului

cars.unshift('Dodge');
console.log(cars);

//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array

cars.reverse();
console.log(cars);
//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();

cars.splice(0, 2 , 'BMW', 'Skoda');
console.log(cars);

//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
var arrayNumbers = [1, 5, 20 ,30, 100];

arrayNumbers.sort(function(a,b){return a - b});
console.log(arrayNumbers);

arrayNumbers.sort(function(a,b){return b - a});
console.log(arrayNumbers);

//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat
var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"]
fruitsArray.sort();

console.log(fruitsArray);



// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name

var car = {
    name: 'Tesla',
    wheels: 4,
  }
  car.name = 'Mercedes';
  
  delete car.name;
  console.log(car);
  
  
  
  //Ex2
  // Creati un obiect cu 4 proprietati
  // Stocati "key"-urile intr-o variabila noua
  // intr-o alta variabila vreau sa am toate key-urile cu litere mari
  // Stocati valorile intr-o variabila noua
  // intr-o alta variabila vreau sa am toate valorile cu litere mici
  // vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"
  
  var book = {
    proprietatea1: 'One',
    proprietatea2: 'Two',
    proprietatea3: 'Three',
    proprietatea4: 'Four'
  };
  
  var newVar = Object.keys(book);
  
  var secVar = Object.keys(book);
  
  newVar = newVar.join();
  
  var res = newVar.toUpperCase();
  
  var res2 = newVar.toLowerCase();
  
  
  //Ex3
  // Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
  // Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.
  
  var metoda = {
    name: 'Alex',
    age: 26,
    myNewString: function(){
      console.log(this.name + " " + this.age)
    }
  }
  metoda.myNewString();
  
  //Ex4 
  // Creati un obiect cu cateva proprietati
  // "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
  // Pe obiectul nou adaugam 2 noi proprietati
  // Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
  var myCar = {
    model: 'Tesla',
    year: 2019,
    colour: 'red',
  }
  var myHouse = { 
    rooms: 3,
    zone: "Bucium",
    animals: 1,
    colour: 'green',
  }
  
  // var newObj = { ...myCar, ...myHouse}
  var newObj = Object.assign(myCar, myHouse);
  
  // Ex5 
  // Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
  // Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
  // transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
  
  var props = {
      newProps = {
          num: 'Pop',
          hey: 25,
      }
  }

  var newArray = Object.assign(newProps)
  
  //Ex6
  // Avem obiectul : 
  myObject = {
  name: "John",
  surname: "Applegate",
  }
  //Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
  
  
  //Ex7 
  //Faceti o functie constructor
  // Cu functia constructor creati 3 obiecte cu valori diferite
  // Pentru toate valorile din acele obiecte transformatile in litere mari.