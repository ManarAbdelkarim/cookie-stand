'use strict';
let locations = ['Seattle','Tokyo','Dubai','Paris','Lima'];
let workingHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let brandishes =  [];
let minWorks = [23,3,11,20,2];
let maxWork = [65,24,38,38,16];
function generateObjects() {
  let work = [];

  for (let index = 0; index < locations.length; index++) {
    brandishes[index] =
        {
          location: locations[index],
          working:generateNumber(work)[0],
          minWork :minWorks[index],
          maxWork :maxWork[index],
          averageWork :generateNumber(work)[1] ,
          total: generateNumber(work)[2]
        };
  }
  function generateNumber (working) {
    for (let i = 0; i < locations.length; i++) {
      for (let index = 0; index < workingHours.length; index++) {
        working[index]= Math.floor(Math.random()*(maxWork[i]- minWorks[i]) + minWorks[i]);
      }
    }
    let averageWork = ((working.reduce((a, b) => a + b, 0))/working.length);
    let totals = working.reduce((a, b) => a + b, 0);
    return [working,averageWork,totals];
  }
}

generateObjects() ;

function createList() {
  let liEl = document.createElement('li');
  let container = document.getElementById('main');
  let unOrderEL = document.createElement('ul');
  for (let i = 0; i < locations.length ; i++) {
    container = document.getElementById('main');
    unOrderEL = document.createElement('ul');
    container.appendChild(unOrderEL);
    liEl = document.createElement('li');
    liEl.textContent = locations[i];
    unOrderEL.appendChild(liEl);
    for (let index = 0; index <= workingHours.length ; index++) {
      if (index !== workingHours.length) {
        liEl = document.createElement('li');
        liEl.textContent = workingHours[index]+':'+brandishes[i].working[index]+ ' cookies';
        unOrderEL.appendChild(liEl);
      }
      else{
        liEl = document.createElement('li');
        liEl.textContent = 'total :'+brandishes[i].total+ ' cookies';
        unOrderEL.appendChild(liEl);
      }

    }
  }

}
createList();



function createTable() {
  let container = document.getElementById('main');
  let tableEl = document.createElement('table');
  container.appendChild(tableEl);
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  let thEl = document.createElement('th');
  let tdEl = document.createElement('td');

  let thead = ['Location','Min / Cust','Max / Cust','Avg Cookie / Sale'];
  for (let index = 0; index < 1 ; index++) {
    trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    for (let index = 0; index < thead.length; index++) {
      thEl = document.createElement('td');
      thEl.textContent = thead[index];
      trEl.appendChild(thEl);
    }
  }
  for (let index = 0; index < locations.length ; index++) {
    trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    tdEl = document.createElement('td');
    tdEl.textContent = brandishes[index].location;
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent = brandishes[index].minWork;
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent = brandishes[index].maxWork;
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent = Math.round(brandishes[index].averageWork * 10) / 10;
    trEl.appendChild(tdEl);
  }
}

createTable();
