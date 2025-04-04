// Just noticed accessing localStorage is banned from codepen, so disabling saving theme to localStorage

const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const setClock = (clockElement, timeZone, locale = "en-US") => {
  const now = new Date();
  const localNow = new Date(now.toLocaleString("en-US", { timeZone }));

  const hh = localNow.getHours() * 30;
  const mm = localNow.getMinutes() * deg;
  const ss = localNow.getSeconds() * deg;

  clockElement.querySelector(".hour").style.transform = `rotateZ(${
    hh + mm / 12
  }deg)`;
  clockElement.querySelector(".min").style.transform = `rotateZ(${mm}deg)`;
  clockElement.querySelector(".sec").style.transform = `rotateZ(${ss}deg)`;
  clockElement.querySelector(".time").textContent = localNow.toLocaleTimeString(
    locale,
    { hour: "numeric", minute: "numeric", hour12: true }
  );
};

// 한국 시계 설정
document
  .querySelectorAll(".clock-container.korea")
  .forEach((clock) => setClock(clock, "Asia/Seoul", "en-US"));
setInterval(() => {
  document
    .querySelectorAll(".clock-container.korea")
    .forEach((clock) => setClock(clock, "Asia/Seoul", "en-US"));
}, 1000);

// 스위스 시계 설정
document
  .querySelectorAll(".clock-container.swiss")
  .forEach((clock) => setClock(clock, "Europe/Zurich", "en-US"));
setInterval(() => {
  document
    .querySelectorAll(".clock-container.swiss")
    .forEach((clock) => setClock(clock, "Europe/Zurich", "en-US"));
}, 1000);

let currentTheme = "";
// currentTheme = localStorage.getItem("theme")
// 	? localStorage.getItem("theme")
// 	: null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  switchModeBtn.textContent = currentTheme;
}
