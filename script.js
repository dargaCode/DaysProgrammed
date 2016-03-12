var START = new Date("May 10 2015");
var TODAY = new Date();
var MS_PER_DAY = 1000 * 60 * 60 * 24;
var MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

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

function createHistoryElement(parent, historyDay) {
  var historyElement = document.createElement("p");
  historyElement.innerHTML = buildHistoryString(historyDay);
  parent.appendChild(historyElement);
}

function buildHistoryString(daysElapsed) {
  var historyDate = addDaysToDate(START, daysElapsed - 1);
  var monthNum = historyDate.getMonth();
  var month = MONTHS[monthNum];
  var day = historyDate.getDate();
  var year = historyDate.getFullYear();
  var dateString = month + " " + day + " " + year;
  return dateString + " - Day " + daysElapsed;
}

function addDaysToDate(date, days) {
  var result = new Date(date);
  result.setDate(date.getDate() + days);
  return result;
}

var nthDay = getNthDay(TODAY);

updateHeroH1(nthDay);
populateHistory(nthDay);
