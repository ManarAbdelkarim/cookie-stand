/* eslint-disable indent */
'use strict';
let locations = ['Seattle','Tokyo','Dubai','Paris','Lima'];
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let branches =  [];
let minWorks =[23,3,11,20,2];
let maxWork= [65,24,38,38,16];
let averageWork =[6.3,1.2,3.7,2.3,4.6];


let containerT = document.getElementById('table');
let tableElT = document.createElement('table');
function createTable() {

  containerT.appendChild(tableElT);
  let trEl = document.createElement('tr');
  let tdEl = document.createElement('td');
  tableElT.appendChild(trEl);
  let thEl = document.createElement('th');
  let thead = ['Location','Min / Cust','Max / Cust','Avg Cookie / Sale'];
  for (let index = 0; index < 1 ; index++) {
    trEl = document.createElement('tr');
    tableElT.appendChild(trEl);
    for (let index = 0; index < thead.length; index++) {
      thEl = document.createElement('td');
      thEl.textContent = thead[index];
      trEl.appendChild(thEl);
    }
  }
  for (let index = 0; index < locations.length ; index++) {
    trEl = document.createElement('tr');
    tableElT.appendChild(trEl);
    tdEl = document.createElement('td');
    tdEl.textContent = locations[index];
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent = minWorks[index];
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent = maxWork[index];
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent = averageWork[index];
    trEl.appendChild(tdEl);
  }
}
  createTable();




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

let container = document.getElementById('tableLab');
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
        sum += branches[y].working[i];
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

  container = document.getElementById('tableLab');
  trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  let tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  for (let index = 0; index < (workingHours.length) ; index++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.working[index];
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
    this.working[index]= Math.floor(this.averageWork * this.customers[index]);
  }
 };

 Stores.prototype.generateTotalByLocation = function(){

  for (let index = 0; index < workingHours.length; index++) {
    this.total += this.working[index];
    // for (let i = 0; i < locations.length; i++) {
    //   this.totalByTime+=this.customers[0];
    // }
  }
  this.totalOfTotals+=this.total;
 };

 let containerLi = document.getElementById('list');
 Stores.prototype.render = function(){
  let unOrderEL = document.createElement('ul');
  let liEl = document.createElement('li');
   containerLi = document.getElementById('list');
   unOrderEL = document.createElement('ul');
  // for (let i = 0; i < locations.length ; i++) {
  containerLi = document.getElementById('list');
  unOrderEL = document.createElement('ul');
  containerLi.appendChild(unOrderEL);
  liEl = document.createElement('li');
  liEl.textContent = this.location;
  unOrderEL.appendChild(liEl);
  for (let index = 0; index < workingHours.length ; index++) {
      liEl = document.createElement('li');
      liEl.textContent = workingHours[index]+':'+this.working[index]+ ' cookies';
      unOrderEL.appendChild(liEl);
    }

      liEl = document.createElement('li');
      liEl.textContent = 'total :'+this.total+ ' cookies';
      unOrderEL.appendChild(liEl);
  };








function generateNumber(max,min){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}



// Stores.prototype.createTable= function () {
//   let container = document.getElementById('main');
//   let tableEl = document.createElement('table');
//   container.appendChild(tableEl);
//   let trEl = document.createElement('tr');
//   tableEl.appendChild(trEl);
//   let thEl = document.createElement('th');
//   let tdEl = document.createElement('td');

//   let thead = ['Location','Min / Cust','Max / Cust','Avg Cookie / Sale'];
//   for (let index = 0; index < 1 ; index++) {
//     trEl = document.createElement('tr');
//     tableEl.appendChild(trEl);
//     for (let index = 0; index < thead.length; index++) {
//       thEl = document.createElement('td');
//       thEl.textContent = thead[index];
//       trEl.appendChild(thEl);
//     }
//   }
  // for (let index = 0; index < locations.length ; index++) {

//   trEl = document.createElement('tr');
//   tableEl.appendChild(trEl);
//   tdEl = document.createElement('td');
//   tdEl.textContent = this.location;
//   trEl.appendChild(tdEl);
//   tdEl = document.createElement('td');
//   tdEl.textContent = this.minWorks;
//   trEl.appendChild(tdEl);
//   tdEl = document.createElement('td');
//   tdEl.textContent = this.maxWork;
//   trEl.appendChild(tdEl);
//   tdEl = document.createElement('td');
//   tdEl.textContent = this.averageWork;
//   trEl.appendChild(tdEl);

// };

function fillPage(){

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
}
 fillPage();

//  function removeAllChildNodes(parent) {
//    debugger;
//   while (parent.firstChild) {
//       parent.removeChild(parent.firstChild);
//   }
// }


// function appendRow(location,min,max,average){
//   debugger;
//   removeAllChildNodes(containerT);
// for (let index = 0; index < locations.length; index++) {
//  if (location === locations[index]) {
  //  minWorks[index]=min;
  //  maxWork[index]=max;
  //  averageWork[index]=average;
//    isWork = false;
//    branches[index].generateCustomers();
//    branches[index].generateWorking();
//    branches[index].generateTotalByLocation();
//   //  var rowCount = tableEl.rows[index];
//    tableEl.deleteRow(index+1);
//    var rowCount = tableEl.rows.length;
//    tableEl.deleteRow(rowCount -1);
//    branches[index].createLabBodyTable();
//    generateLabTableFooter();
//    branches[index].render();
//    createTable();
//  }
// }
// }

const form = document.getElementById('cookie-form');
form.addEventListener('submit', function(event){
   event.preventDefault();
  console.log(event.target);
  let location = event.target.location.value;
  location = location.charAt(0).toUpperCase() + location.slice(1);
  let min = event.target.minWork.value;
  min = parseInt(min);
  let max = event.target.maxWork.value;
  max = parseInt(max);
  const average = parseFloat(event.target.averageWork.value);

  // if (locations.includes(location))
  // {
  //    appendRow(location,min,max,average);

  //   }
  //   else{

  locations.push(location);
  minWorks.push(min);
  maxWork.push(max);
  averageWork.push(average);
  branches.push(new Stores(location,min,max,average));

   let index = branches.length -1;
  minWorks[index]=min;
  maxWork[index]=max;
  averageWork[index]=average;
   branches[index].generateCustomers();
   branches[index].generateWorking();
   generateTotalByTime();
   branches[index].generateTotalByLocation();
   var rowCount = tableEl.rows.length;
   tableEl.deleteRow(rowCount -1);
   branches[index].createLabBodyTable();
   generateLabTableFooter();
   branches[index].render();

  let tdEl = document.createElement('td');
   trEl = document.createElement('tr');
   tableElT.appendChild(trEl);
   tdEl = document.createElement('td');
   tdEl.textContent = location;
   trEl.appendChild(tdEl);
   tdEl = document.createElement('td');
   tdEl.textContent = min;
   trEl.appendChild(tdEl);
   tdEl = document.createElement('td');
   tdEl.textContent = max;
   trEl.appendChild(tdEl);
   tdEl = document.createElement('td');
   tdEl.textContent = average;
   trEl.appendChild(tdEl);

});


