var START = new Date("May 10 2015");
var TODAY = new Date();
var MS_PER_DAY = 1000 * 60 * 60 * 24;

function getNthDay(endDate) {
  var msElapsed = endDate - START;
  var daysElapsed = msElapsed / MS_PER_DAY;
  var roundedDays = Math.floor(daysElapsed);
  var nthDay = roundedDays + 1;

  return nthDay;
}

function updateHeroH1(nthDay) {
  var heroH1 = document.querySelector(".hero h1");
  heroH1.innerHTML = "DAY " + nthDay;
}

updateHeroH1(getNthDay(TODAY));
