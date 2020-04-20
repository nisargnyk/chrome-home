//DOM Elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

//Option
const showAmPm = true;

//show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //Set AM and PM
  const amPm = hour >= 12 ? "PM" : "AM";

  //12hr Format
  hour = hour % 12 || 12;

  //Output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
}
//Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//Set Background Function
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //Morning
    document.body.style.backgroundImage = "url(../img/morning.jpg)";
    document.body.style.backgroundSize = "100% 100%";
    greeting.textContent = "Good Morning!";
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = "url(../img/afternoon.jpg)";
    document.body.style.backgroundSize = "100% 100%";
    document.body.style.color = "white";
    greeting.textContent = "Good Afternoon!";
  } else {
    //Evening
    document.body.style.backgroundImage = "url(../img/night.jpg)";
    document.body.style.backgroundSize = "100% 100%";
    greeting.textContent = "Good Evening!";
    document.body.style.color = "white";
  }
}

//Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

//set name
function setName(e) {
  if (e.type === "keypress") {
    //Make Sure Enter is Pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

//get focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

//Set Focus
function setFocus(e) {
  if (e.type === "keypress") {
    //Make Sure Enter is Pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

//run
showTime();
setBgGreet();
getName();
getFocus();
