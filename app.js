var hours = ['6 AM', '7 AM','8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM']
var hoursPlus=[0,0];
for (i=0; i<hours.length; i++){
  hoursPlus[i]= hours[i];
}
hoursPlus.push('Total')
console.log(hours.length);
//hoursPlus.push('Total');
console.log(hoursPlus);
console.log(hours.length);
var pikeUl = document.getElementById('pike');
var alkiUl = document.getElementById('alki');
var capitolUl = document.getElementById('capitol');
var seatacUl = document.getElementById('seatac');
var centerUl = document.getElementById('center');

// function salesDay(location){
//   for (var i = 0; i < hours.length; i++) {
//     randSalesDay[i] = Math.floor(Math.random()*(this.max-this.min)+this.min)
//   }
  // for (var j=0; j<randSalesDay.length; j++){
  //   var liEl = document.createElement('li');
  //   liEl.textContent = `${hours[j]}: ${randSalesDay[j]} cookies`
  //   console.log(`${location}Random generated sales number`, liEl)
    // /*(insert location from function input)*/Ul.appendChild(liEl)
//};

var pike={
  name: '1st and Pike',
  min: 23,
  max: 65,
  avg: 6.3,
  total: 0,
  render: function() {
    var salesDay= [];
    for (var i = 0; i < hours.length; i++) {
      
      salesDay[i] = Math.floor((Math.random()*(this.max-this.min)+this.min)*this.avg);
       this.total = this.total+ salesDay[i];
    }
    console.log(this.total);
    console.log(salesDay);
    console.log(this.total);
      salesDay.push(this.total);
      console.log(salesDay);
      
    for (var j=0; j<hoursPlus.length; j++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursPlus[j]}: ${salesDay[j]} cookies`;
      pikeUl.appendChild(liEl);
    }
  }
}
pike.render()


var alki ={
  name: 'Alki',
  min: 2,
  max: 16,
  avg: 4.6,
  total: 0,
  render: function() {
    var salesDay= [];
    for (var i = 0; i < hours.length; i++) {
      
      salesDay[i] = Math.floor((Math.random()*(this.max-this.min)+this.min)*this.avg);
       this.total = this.total+salesDay[i];
    }
    console.log(this.total);
    console.log(salesDay);
    console.log(this.total);
      salesDay.push(this.total);
      console.log(salesDay);
      
    for (var j=0; j<hoursPlus.length; j++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursPlus[j]}: ${salesDay[j]} cookies`;
      alkiUl.appendChild(liEl);
    }
  }
}
alki.render()
var capitol ={
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avg: 2.3,
  total: 0,
  render: function() {
    var salesDay= [];
    for (var i = 0; i < hours.length; i++) {
      
      salesDay[i] = Math.floor((Math.random()*(this.max-this.min)+this.min)*this.avg);
       this.total = this.total+salesDay[i];
    }
    console.log(this.total);
    console.log(salesDay);
    console.log(this.total);
      salesDay.push(this.total);
      console.log(salesDay);
      
    for (var j=0; j<hoursPlus.length; j++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursPlus[j]}: ${salesDay[j]} cookies`;
      capitolUl.appendChild(liEl);
    }
  }
}
capitol.render()
var seatac ={
  name: 'Seatac Airport',
  min: 2,
  max: 16,
  avg: 1.2,
  total: 0,
  render: function() {
    var salesDay= [];
    for (var i = 0; i < hours.length; i++) {
      
      salesDay[i] = Math.floor((Math.random()*(this.max-this.min)+this.min)*this.avg);
       this.total = this.total+salesDay[i];
    }
    console.log(this.total);
    console.log(salesDay);
    console.log(this.total);
      salesDay.push(this.total);
      console.log(salesDay);
      
    for (var j=0; j<hoursPlus.length; j++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursPlus[j]}: ${salesDay[j]} cookies`;
      seatacUl.appendChild(liEl);
    }
  }
}
seatac.render()
var center ={
  name: 'Seattle Center',
  min: 11,
  max: 38,
  avg: 2.3,
  total: 0,
  render: function() {
    var salesDay= [];
    for (var i = 0; i < hours.length; i++) {
      
      salesDay[i] = Math.floor((Math.random()*(this.max-this.min)+this.min)*this.avg);
       this.total = this.total+salesDay[i];
    }
    console.log(this.total);
    console.log(salesDay);
    console.log(this.total);
      salesDay.push(this.total);
      console.log(salesDay);
      
    for (var j=0; j<hoursPlus.length; j++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursPlus[j]}: ${salesDay[j]} cookies`; 
      centerUl.appendChild(liEl);
    }
  }
}
center.render();