const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let y = new Date().getFullYear();
  let mm = new Date().getMonth() + 1;
  let d = new Date().getDate();
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";


  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  y = y < 10 ? "0" + y : y;
  mm = mm < 10 ? "0" + mm : mm;
  d = d < 10 ? "0" + d : d;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  yearEl.innerText = y;
  monthEl.innerText = mm;
  dayEl.innerText = d;   
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
