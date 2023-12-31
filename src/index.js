import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';
import printMe from './print.js';
import myName from './myName.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    // Lodash is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.style.height = "5rem";

    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
  
    return element;
  }

  function nameDivGenerator() {
    const element = document.createElement('div');

    // use your function!
    element.textContent = myName('Mario');
    return element;
  }
  
  document.body.appendChild(component());
  document.body.appendChild(nameDivGenerator());