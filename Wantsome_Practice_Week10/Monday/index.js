const myList = document.body;
const colorsURL ='https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json';

const request = new XMLHttpRequest();
request.open('GET', colorsURL);
request.responseType = 'json';
request.send();

request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        const colors = request.response;
        populateRows(colors);
    }
};

function populateRows(jsonObj) {

    for(let key in jsonObj){
        const element = document.createElement('section');

        const square = document.createElement('span');
        square.style.border = '1px solid black';
        square.style.width = '10px';
        square.style.height = '10px';
        square.style.backgroundColor = jsonObj[key];
        element.appendChild(square);

        const nameOfColor = document.createElement('span');
        nameOfColor.textContent = key;
        element.appendChild(nameOfColor);

        myList.appendChild(element);
    }
}