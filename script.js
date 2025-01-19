// Just noticed accessing localStorage is banned from codepen, so disabling saving theme to localStorage

const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const setKoreaClock = (clockElement) => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const koreaTimeDiff = 9 * 60 * 60 * 1000;
  const korNow = new Date(utc + koreaTimeDiff);
  let day = korNow;
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  clockElement.querySelector(".hour").style.transform = `rotateZ(${
    hh + mm / 12
  }deg)`;
  clockElement.querySelector(".min").style.transform = `rotateZ(${mm}deg)`;
  clockElement.querySelector(".sec").style.transform = `rotateZ(${ss}deg)`;
  clockElement.querySelector(".time").textContent = korNow.toLocaleTimeString(
    "en-US",
    { hour: "numeric", minute: "numeric", hour12: true }
  );
};

const setSwissClock = (clockElement) => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const swissTimeDiff = 1 * 60 * 60 * 1000;
  const swissNow = new Date(utc + swissTimeDiff);
  let hh = swissNow.getHours() * 30;
  let mm = swissNow.getMinutes() * deg;
  let ss = swissNow.getSeconds() * deg;

  clockElement.querySelector(".hour").style.transform = `rotateZ(${hh}deg)`;
  clockElement.querySelector(".min").style.transform = `rotateZ(${mm}deg)`;
  clockElement.querySelector(".sec").style.transform = `rotateZ(${ss}deg)`;
  clockElement.querySelector(".time").textContent = swissNow.toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }
  );
};

document.querySelectorAll(".clock-container.korea").forEach(setKoreaClock);
setInterval(() => {
  document.querySelectorAll(".clock-container.korea").forEach(setKoreaClock);
}, 1000);

document.querySelectorAll(".clock-container.swiss").forEach(setSwissClock);
setInterval(() => {
  document.querySelectorAll(".clock-container.swiss").forEach(setSwissClock);
}, 1000);

let currentTheme = "";
// currentTheme = localStorage.getItem("theme")
// 	? localStorage.getItem("theme")
// 	: null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  switchModeBtn.textContent = currentTheme;
}
