var hours = ['6 AM', '7 AM','8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
//creating hours with total on the end
var hoursPlus=[];
for (i=0; i<hours.length; i++){
  hoursPlus[i]= hours[i];
}
hoursPlus.push('Total');

var allLocations = [];
var totalsArray = [];
var locTable = document.getElementById('sales');

function branch(location, minCust, maxCust, avgSales){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.randomSalesday = [];
  this.total=0;
  allLocations.push(this)
} 

new branch ('1st and Pike', 23, 65, 6.3);
new branch ('Alki', 2 , 16, 4.6);
new branch ('Capitol Hill', 20, 38, 2.3);
new branch (' Seatac Airport', 2, 16, 1.2);
new branch ('Seattle Center', 11, 38, 2.3);

branch.prototype.randSalesday = function () {
  console.log('prototype');
  for (var i= 0; i<hours.length; i++){
    //generate random salesday
    this.randomSalesday.push(Math.floor((Math.random()*(this.maxCust-this.minCust+ 1)+this.minCust) *this.avgSales));
    //add it to total
    this.total= this.total+this.randomSalesday[i];
  }
  //put this.total on the end of the random sales
  this.randomSalesday.push(this.total);
  console.log(this.randomSalesday);
  console.log(this.total);  
};


// branch.prototype.render()= function() {
//   var
// }
console.log(allLocations);
//push
for (var j=0; j<allLocations.length; j++){
allLocations[j].randSalesday();
};


//totalsarray
for (var k=0; k<hoursPlus.length; k++){
  var totals=0
  for (var j=0; j<allLocations.length; j++){
    totals += allLocations[j].randomSalesday[k];
  };
  totalsArray.push(totals);
};
console.table(totalsArray);

//render header
function makeheaderrow(){
  var trEl= document.createElement("tr");
  var thEl = document.createElement("th");
  thEl.textContent = '';
  trEl.appendChild(thEl);
  for (i=0; i<hoursPlus.length; i++){
    var thEl = document.createElement('th')
    thEl.textContent=hoursPlus[i];
    trEl.appendChild(thEl);
  }
  locTable.appendChild(trEl);
}
//renderfunction
branch.prototype.render = function(){
  var trEl= document.createElement("tr");
  var tdEl = document.createElement('td');
  tdEl.textContent =this.location;
  trEl.appendChild(tdEl);

  for (var i = 0; i<hoursPlus.length; i++){
    var tdEl  = document.createElement('td')
    tdEl.textContent= this.randomSalesday[i]
    trEl.appendChild(tdEl);
  }
  locTable.appendChild(trEl);
}

function renderAllLocations(){
  for (var i=0; i<allLocations.length; i++){
    allLocations[i].render();
  }
}
//render footer
function makefooterrow(){
  var trEl= document.createElement("tr");
  var tdEl = document.createElement("td");
  tdEl.textContent = ' ';
  trEl.appendChild(tdEl);
  for (i=0; i<hoursPlus.length; i++){
    var tdEl = document.createElement('td')
    tdEl.textContent=totalsArray[i];
    trEl.appendChild(tdEl);
  }
  locTable.appendChild(trEl);
}
//call functions
makeheaderrow();
renderAllLocations();
makefooterrow();