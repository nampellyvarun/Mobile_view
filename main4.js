'use strict'

var inc = 1000;
clock();
function clock() {
  const date = new Date();
  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  const h = (hours < 10) ? "0" + hours : hours;
  const m = (minutes < 10) ? "0" + minutes : minutes;
}

setInterval(clock, inc);

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
  var m = day[d.getDay()];
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


const tableList = document.querySelector(".tableList");
const selectDate = document.querySelector(".selectDate");
const selectTime = document.querySelector(".selectTime");


// It will be responsible to receive the localstorage datas
const verifyData = function () {
    let myTasks = [];
    let i;
    let local = localStorage.getItem('taskList');
    let isEmpty = true;
    let messageNoTask= document.getElementById('msgNoTask');

    document.querySelectorAll(".tableList tr").forEach(e => e.remove())

    if (local == null) {
        messageNoTask.style.display = "block";
    } else {
        messageNoTask.style.display = "none";
        myTasks.push(JSON.parse('[' + localStorage.getItem('taskList') + ']'));
        for (i = 0; i < myTasks[0].length; i++) {
            
            if(myTasks[0][i]){
            let name = myTasks[0][i].name;
            let desc = myTasks[0][i].desc;
            let date = myTasks[0][i].datet
            let id = i;
            createElements(name, desc, date, id);
            isEmpty = false;
            }
        }
    }

    if(isEmpty==true){
        messageNoTask.style.display = "block";
    }
}

//Here, It will create the elements and render them
const createElements = function (name, desc, date, id) {
    //Elements
    let create_row = document.createElement("tr");
    let taskNameEl = document.createElement("td");
    let taskDescEl = document.createElement("td");
    let taskDateEl = document.createElement("td");
    let taskActionEl = document.createElement("td");
    let remove = document.createElement("span");
    remove.className = "glyphicon glyphicon-remove-circle removeItem";
    remove.id=id;
    remove.onclick =  function(id){ removeElement(this.id);}


    //Values
    let taskNameTxt = document.createTextNode(name);
    let taskDescTxt = document.createTextNode(desc);
    let taskDateTxt = document.createTextNode(date);
    // Append the element to the values
    taskNameEl.appendChild(taskNameTxt);
    taskDescEl.appendChild(taskDescTxt);
    taskDateEl.appendChild(taskDateTxt);
    taskActionEl.appendChild(remove)
    create_row.appendChild(taskNameEl);
    create_row.appendChild(taskDescEl);
    create_row.appendChild(taskDateEl);
    create_row.appendChild(taskActionEl);


    //Append to the HTML Document
    tableList.appendChild(create_row);
}

// If there is no element in localStorage a simple row will be done.
const crateAnElement = function () {

    let create_row = document.createElement("tr");
    let taskUniqueEl = document.createElement("td");
    taskUniqueEl.colSpan = "3";
    taskUniqueEl.className = "txtCenter bold"
    let taskUniqueTxt = document.createTextNode("There is no task to be shown");
    taskUniqueEl.appendChild(taskUniqueTxt);
    create_row.appendChild(taskUniqueEl);
    tableList.appendChild(create_row);
}

const defDate = function () {

    let option = document.createElement("option");
    let now = new Date;
    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    const optionTxt = document.createTextNode(`${day}/${month}/${year}`);
    option.appendChild(optionTxt);
    selectDate.appendChild(option)
}

const defTime = function () {
    let now = new Date;
    let maxHour = 23;
    let maxMinutes = 59;
    let hour,minute;
    
    const verifyMinutes = function(){

        if (minute <= 9) {
            let option = document.createElement("option");
            let optionTxt = document.createTextNode(hour + "h0" + minute)
            option.appendChild(optionTxt);
            selectTime.appendChild(option)
        } else {
            let option = document.createElement("option");
            let optionTxt = document.createTextNode(hour + "h" + minute)
            option.appendChild(optionTxt);
            selectTime.appendChild(option)
        }
    }

    const getminutes = function(){

        for (minute = 0; minute <= maxMinutes; minute++) {
            if (hour >= now.getHours() && minute >= now.getMinutes()) {
                verifyMinutes();
            }
        }
    }
    const gethour = function(){

        for (hour = now.getHours(); hour <= maxHour; hour++) {
            getminutes();
        }
    }

    gethour();
}

const createTask = function () {
    let taskname = document.getElementById('taskname').value;
    let taskdesc = document.getElementById('taskdesc').value;
    let taskdate = document.getElementById('taskdate').value;
    let tasktime = document.getElementById('tasktime').value;
    let myTasksList = []
    let data = `{
        "name":"${taskname}",
        "desc":"${taskdesc}",
        "datet":"${taskdate}-${tasktime}"
        }`;

    if (taskname == '' || taskdesc == '') {
        alert('preencha todos os campos')
    } else {

        if (localStorage.getItem('taskList') == null) {
            localStorage.setItem('taskList', data);
        } else {
            myTasksList.push(localStorage.getItem('taskList'));
            myTasksList.push(data);
            localStorage.removeItem('taskList');
            localStorage.setItem('taskList', myTasksList);
        }
    }

    $(function () {
        $('#myModal').modal('toggle');
    });

    init();
}

const removeElement = function(p){

    let element;
    element = (JSON.parse('['+localStorage.getItem('taskList')+']'));
    element[p] = false;
    let toString = JSON.stringify(element);
    let size = toString.length-1; 
    let elementRemoved = toString.slice(1,size)
    localStorage.removeItem('taskList');
    localStorage.setItem('taskList', elementRemoved);
    verifyData();
}

const clearInputs = function(){
    document.getElementById('taskname').value=' ';
    document.getElementById('taskdesc').value=' ';
}

const clearAll = function(){
    localStorage.removeItem('taskList');
    init();
}
const init = function(){
    verifyData();
    defDate();
    defTime();
    clearInputs();
}
init();






