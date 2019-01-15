var hours = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM']

var pikeUl = document.getElementById('pike');
var alkiUl = document.getElementById('alki');
var capitolUl = document.getElementById('capitol');
var seatacUl = document.getElementById('seatac');
var centerUl = document.getElementById('center');
var salesDay = [0,0];

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
  render: function() {
    for (var i = 0; i < hours.length; i++) {
      salesDay[i] = Math.floor(Math.random()*(this.max-this.min)+this.min)
    }
    for (var j=0; j<hours.length; j++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[j]}: ${salesDay[j]} cookies`;
      console.log(`${this.name} Random sales number`, liEl) ;
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
  render: function() {
    for (var i = 0; i < hours.length; i++) {
      salesDay[i] = Math.floor(Math.random()*(this.max-this.min)+this.min)
    }
    for (var j=0; j<hours.length; j++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[j]}: ${salesDay[j]} cookies`;
      console.log(`${this.name} Random sales number`, liEl) ;
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
  render: function() {
    for (var i = 0; i < hours.length; i++) {
      salesDay[i] = Math.floor(Math.random()*(this.max-this.min)+this.min)
    }
    for (var j=0; j<hours.length; j++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[j]}: ${salesDay[j]} cookies`;
      console.log(`${this.name} Random sales number`, liEl) ;
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
  render: function() {
    for (var i = 0; i < hours.length; i++) {
      salesDay[i] = Math.floor(Math.random()*(this.max-this.min)+this.min)
    }
    for (var j=0; j<hours.length; j++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[j]}: ${salesDay[j]} cookies`;
      console.log(`${this.name} Random sales number`, liEl) ;
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
  render: function() {
    for (var i = 0; i < hours.length; i++) {
       salesDay[i] = Math.floor(Math.random()*(this.max-this.min)+this.min)
      }
    for (var j=0; j<hours.length; j++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[j]}: ${salesDay[j]} cookies`;
      console.log(`${this.name} Random sales number`, liEl) ;
      centerUl.appendChild(liEl);
    }
  }
}
center.render();