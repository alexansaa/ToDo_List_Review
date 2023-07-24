import _ from 'lodash';
import activities from './activities.js';

export const activCtn = document.querySelector('#activitiesContainer');

export const renderFunction = (JsonObjectsArray) => {
  activCtn.innerHTML = '';
  if (JsonObjectsArray === null || JsonObjectsArray.length === 0) {
    return;
  }
  JsonObjectsArray.forEach((act) => {
    const actElmnt = document.createElement('div');
    actElmnt.classList.add('px-3');
    actElmnt.classList.add('element');
    actElmnt.classList.add('d-flex');
    actElmnt.classList.add('border');
    actElmnt.classList.add('align-items-center');
    actElmnt.classList.add('justify-content-between');
    actElmnt.draggable = true;

    const chkBx = document.createElement('input');
    chkBx.type = 'checkbox';
    chkBx.id = _.join(['ck', act.index], '');
    chkBx.checked = act.completed;
    actElmnt.appendChild(chkBx);

    const chkLabel = document.createElement('input');
    chkLabel.value = act.description;
    chkLabel.classList.add('w-100');
    chkLabel.classList.add('px-2');
    chkLabel.classList.add('border-0');
    chkLabel.id = _.join(['lb', act.index], '');
    chkLabel.htmlFor = act.index;
    actElmnt.appendChild(chkLabel);

    const myImg = document.createElement('img');
    myImg.classList.add('verticalDots');
    myImg.id = _.join(['dl', act.index], '');
    actElmnt.appendChild(myImg);

    activCtn.appendChild(actElmnt);

    chkBx.addEventListener('change', (e) => {
      const myInput = document.querySelector(_.join(['#', 'lb', e.target.id.slice(-1)], ''));
      activities.updateActivitie(myInput.value, e.target.checked, e.target.id.slice(-1));
    });

    chkLabel.addEventListener('change', (e) => {
      const myCheck = document.querySelector(_.join(['#', 'ck', e.target.id.slice(-1)], ''));
      activities.updateActivitie(e.target.value, myCheck.checked, e.target.id.slice(-1));
    });

    myImg.addEventListener('click', (e) => {
      activities.removeActivite(e.target.id.slice(-1));
      renderFunction(activities.activities);
    });
  });
};
