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

function populateHistory(nthDay) {
  for (var i = nthDay - 1; i > 0; i--) {
    console.log(buildHistoryString(i));
  }
}

function buildHistoryString(daysElapsed) {
  var historyDate = addDaysToDate(START, daysElapsed - 1);
  return historyDate + " day " + daysElapsed;
}

function addDaysToDate(date, days) {
  var result = new Date(date);
  result.setDate(date.getDate() + days);
  return result;
}


var nthDay = getNthDay(TODAY);

updateHeroH1(nthDay);
populateHistory(nthDay);
