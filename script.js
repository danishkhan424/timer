function showIns() {
  document.querySelector(".instruction").style.display = "block";
}

function hideIns() {
  document.querySelector(".instruction").style.display = "none";
}

let hour = document.getElementById("hour");
let min = document.getElementById("mins");
let sec = document.getElementById("secs");
let buttons = document.querySelectorAll("button");
let timer = null;

buttons.forEach((e) => {
  if (e.innerHTML == "Stop") {
    e.addEventListener("click", stopTimer);
  } else if (e.innerHTML == "Start") {
    e.addEventListener("click", startTimer);
  } else if (e.innerHTML == "Reset") {
    e.addEventListener("click", resetTimer);
  }
});

function startTimer() {
  let hours = (hour.value == NaN ? "00" : hour.value);;
  let mins = (min.value == NaN ? "00" : min.value);;
  let secs = (sec.value == NaN ? "00" : sec.value);;
  if (hours > 0) {
    hours = parseInt(hour.value);
  }
  else if (hours > 0) {
    mins = parseInt(min.value);
  }
  else if (hours > 0) {
    secs = parseInt(sec.value);
  }
  
  timer = setInterval(() => {
    if (hours == 0 && mins == 0 && secs == 0) {
      resetTimer();
    }

    if (secs == 0 && mins > 0) {
      mins--;
      secs = 60;
    }
    if (mins == 0 && hours > 0) {
      hours--;
      mins = 59;
    }
    secs--;
    
    let h = hours > 9 ? hours : `0${hours}`;
    let m = mins > 9 ? mins : `0${mins}`;
    let s = secs > 9 ? secs : `0${secs}`;

    

    
    hour.value = h;
    min.value = m;
    sec.value = s;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer)
}

function resetTimer() {
  clearInterval(timer)
  alert("time's up: It's time to go")
  window.location.reload()
}
