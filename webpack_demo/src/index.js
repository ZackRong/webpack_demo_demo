import lodash from 'lodash';
import printMe from './print';
// import myImage from './images/bg.jpg';
import './index.css';

function component(content) {
  const element = document.createElement('div');
  element.innerHTML = lodash.join(['Hello ', content, '!']).replace(/,/g, '');
  element.classList.add('element');

  const btn = document.createElement('button');
  btn.innerHTML = 'click me';
  btn.onclick = printMe;
  btn.classList.add('btn');
  element.appendChild(btn);
  // var myImg = document.createElement('img');
  // myImg.src = myImage;
  // element.appendChild(myImg);

  return element;
}

document.body.appendChild(component('Webpack'));
