import Activities from './activities.js';
import './style.css';
import { renderFunction } from './renderActivitie.js';
import clik from './editItems.js';

Activities.loadData();

renderFunction(Activities.activities);

clik();

const refreshBtn = document.querySelector('#refreshImg');
const enterBtn = document.querySelector('#enterImg');
refreshBtn.classList.add('refreshIcon');
enterBtn.classList.add('enterIcon');

const myContainerChilds = document.querySelector('#mainContainer').children;
for (let i = 0; i < myContainerChilds.length; i += 1) {
  myContainerChilds[i].classList.add('element');
  if (i === myContainerChilds.length - 1) {
    myContainerChilds[i].classList.add('fullShadow');
    myContainerChilds[i].classList.add('hover');
  } else {
    myContainerChilds[i].classList.add('rightShadow');
  }
}
