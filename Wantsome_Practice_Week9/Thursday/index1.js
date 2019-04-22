//1 Adaugati un tag script pentru a face legatura
// intre fisierul js si html

//2
//adaugati un event listener pentru buton care apeleaza
// o functie postTheGossip cand este apasat

// const btn = document.getElementById('exButton');

// btn.addEventListener('click', postTheGossip, false);

// function postTheGossip(){
//     alert("Gossip posted");
// }

//3
// In aceasta functie luati toate valorile fieldurilor
// si faceti un story din ele
// ex "Xulescu este innebunit dupa bere neagra"

// const allValues = document.getElementsByTagName('ul');





function getAllValues(){
    const nameValue = document.getElementById('name').value;
    const adjectiveValue = document.getElementById('adjective').value;
    const randomWordValue = document.getElementById('random-word').value;

    return nameValue + adjectiveValue + randomWordValue;
}

