functionDay();
function functionDay(){
  var dd = new Array();
  dd[0]="th";
  dd[1]="st";
  dd[2]="nd";
  dd[3]="rd";
  dd[4]="th";
  dd[5]="th";
  dd[6]="th";
  dd[7]="th";
  dd[8]="th";
  dd[9]="th";

  var d = new Date();
  var q = dd[d.getDate()%10];
  document.getElementById("demo9").innerHTML = q;
 
}


myFunction();
function myFunction() {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var day = new Array();
  day[0] = "Sun";
  day[1] = "Mon";
  day[2] = "Tue";
  day[3] = "Wed";
  day[4] = "Thu";
  day[5] = "Fri";
  day[6] = "Sat";

  var d = new Date();
  var n = month[d.getMonth()];
  document.getElementById("demo2").innerHTML =n;
  document.getElementById("demo3").innerHTML = d.getDate();
  document.getElementById("demo1").innerHTML = d.getFullYear();
}


var battery;
 
navigator.getBattery()
    .then(function (b) {
        battery = b;
        handleBattery();
    }
);
 
var batteryIndicator = document.querySelector("#indicator");
 
function handleBattery() {
    if (battery) {
        battery.addEventListener("chargingchange", updateBatteryNotification);
        battery.addEventListener("levelchange", updateBatteryNotification);
        updateBatteryNotification();
    }
}
 
function updateBatteryNotification() {
    // draw battery level
    batteryIndicator.style.width = battery.level * 100 + "%";
    
    // check if battery is charging
    if (battery.charging) {
        setClass(batteryIndicator, "charging");
    } else {
        setClass(batteryIndicator, "notCharging");
    }
    document.getElementById("demo8").innerHTML = parseInt(battery.level * 100) + "%";
}
 
function setClass(element, classToAdd) {
  element.className = classToAdd;
}




