var allDays = document.querySelectorAll(".day");
var inputs = document.querySelector(".inputs");
var firstDateInput = document.querySelector(".firstDate");
var secDateInput = document.querySelector(".secondDate");
// var btn = document.querySelector(".Selectbtn");
var daysArray = document.getElementsByClassName("day");
var myCalender = document.getElementById("calender");
// console.log(daysArray);


inputs.addEventListener("change", function(){
// btn.addEventListener("click", function() {

  var d1 = new Date(firstDateInput.value);
  var d2 = new Date(secDateInput.value);

  var isDay1 = d1.getDay();
  var isDay2 = d2.getDay();

  // get a color for one weekday e.g Monday
  for (var i = 0; i < daysArray.length; i++) {

    daysArray[i].classList.remove("styleOne");
    daysArray[i].classList.remove("styleTwo");
    daysArray[i].classList.remove("styleMatch");

  }

  if (isDay1 === isDay2) {
    daysArray[isDay2].classList.add("styleMatch"); //green
  } else {
    daysArray[isDay1].classList.add("styleOne"); //blue
    daysArray[isDay2].classList.add("styleTwo"); //red
  }

});
