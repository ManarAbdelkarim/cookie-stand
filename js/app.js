/* eslint-disable indent */
'use strict';
let locations = ['Seattle','Tokyo','Dubai','Paris','Lima'];
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let branches =  [];
let minWorks =[23,3,11,20,2];
let maxWork= [65,24,38,38,16];
let averageWork =[6.3,1.2,3.7,2.3,4.6];

function Stores(locations,minWorks,maxWork,averageWork) {

  this.location = locations;
  this.customers = [];
  this.minWork = minWorks;
  this.maxWork = maxWork;
  this.working = [];
  this.averageWork = averageWork;
  this.total= 0;
  this.totalOfTotals =0;
  // this.totalByTime = [];
}

let container = document.getElementById('main');
let tableEl = document.createElement('table');
container.appendChild(tableEl);

let trEl = document.createElement('tr');
let thEl = document.createElement('th');


function generateLabTableHeader(){

  tableEl.appendChild(trEl);
  thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);
  for (let index = 0; index < workingHours.length; index++) {
    thEl = document.createElement('th');
    thEl.textContent = workingHours[index];
    trEl.appendChild(thEl);
  }
  tableEl.appendChild(trEl);
  thEl = document.createElement('th');
  thEl.textContent = 'Location Totals';
  trEl.appendChild(thEl);

}
let totalByTime = [];
  function generateTotalByTime(){
  let sum = 0;
  // for (let index = 0; index < workingHours.length; index++) {
    for (let i = 0; i < workingHours.length; i++) {
      for (let y= 0; y < locations.length; y++) {
        sum += branches[y].customers[i];
      }
      totalByTime[i] = sum;
      sum=0;
    }
  }

// }

  function generateLabTableFooter(){
  trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  thEl = document.createElement('th');
  thEl.textContent = 'Hourly totals for all locations';
  trEl.appendChild(thEl);
  for (let index = 0; index < workingHours.length; index++) {

      thEl = document.createElement('th');
      thEl.textContent = totalByTime[index];
      trEl.appendChild(thEl);
    }

    thEl = document.createElement('th');
      thEl.textContent = (totalByTime.reduce((a, b) => a + b, 0));
      trEl.appendChild(thEl);

}




 Stores.prototype.createLabBodyTable = function(){

  container = document.getElementById('main');
  trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  let tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  for (let index = 0; index < (workingHours.length) ; index++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.customers[index];
      trEl.appendChild(tdEl);
  }
   tdEl = document.createElement('td');
   tdEl.textContent = this.total;
   trEl.appendChild(tdEl);
 };

 Stores.prototype.generateCustomers = function (){

  for (let i = 0; i < workingHours.length; i++) {
    this.customers[i]= generateNumber(this.maxWork,this.minWork);
  }
 };


 Stores.prototype.generateWorking = function(){

  for (let index = 0; index < workingHours.length; index++) {
    this.working[index]= Math.floor(this.averageWork[index] * this.customers[index]);
  }
 };

 Stores.prototype.generateTotalByLocation = function(){

  for (let index = 0; index < workingHours.length; index++) {
    this.total += this.customers[index];
    // for (let i = 0; i < locations.length; i++) {
    //   this.totalByTime+=this.customers[0];
    // }
  }
  this.totalOfTotals+=this.total;
 };

 Stores.prototype.render = function(){
  let liEl = document.createElement('li');
  let container = document.getElementById('main');
  let unOrderEL = document.createElement('ul');
  // for (let i = 0; i < locations.length ; i++) {
  container = document.getElementById('main');
  unOrderEL = document.createElement('ul');
  container.appendChild(unOrderEL);
  liEl = document.createElement('li');
  liEl.textContent = this.location;
  unOrderEL.appendChild(liEl);
  for (let index = 0; index < workingHours.length ; index++) {

    if (index !== workingHours.length-1) {
      liEl = document.createElement('li');
      liEl.textContent = workingHours[index]+':'+this.customers[index]+ ' cookies';
      unOrderEL.appendChild(liEl);
    }
    else{
      liEl = document.createElement('li');
      liEl.textContent = 'total :'+this.total+ ' cookies';
      unOrderEL.appendChild(liEl);
    }

    }
  };








function generateNumber(max,min){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}



Stores.prototype.createTable= function () {
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
  // for (let index = 0; index < locations.length ; index++) {

  trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  tdEl = document.createElement('td');
  tdEl.textContent = this.minWorks;
  trEl.appendChild(tdEl);
  tdEl = document.createElement('td');
  tdEl.textContent = this.maxWork;
  trEl.appendChild(tdEl);
  tdEl = document.createElement('td');
  tdEl.textContent = this.averageWork;
  trEl.appendChild(tdEl);
  // }
};

for (let index = 0; index < locations.length; index++) {

  branches[index] = new Stores(locations[index], minWorks[index],maxWork[index],averageWork[index]);

}

for( let i =0; i <branches.length;i++){

  branches[i].generateCustomers();
  branches[i].generateWorking();
  branches[i].generateTotalByLocation();
  branches[i].render();
}
generateTotalByTime();
generateLabTableHeader();
for (let i = 0; i < locations.length; i++) {
  branches[i].createLabBodyTable();
}
generateLabTableFooter();
