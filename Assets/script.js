const currentDay = document.querySelector("#currentDay");
const currentTime = dayjs().format("HH");
const textArea = document.querySelector(".text-field");
const textInput = [];

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// Function for updated/current time.
function showDate() {
  const rightNow = dayjs().format("MM-DD");
  currentDay.innerHTML = rightNow;
  console.log(rightNow);
}

// Function for creating past, present, and future slots for a work day 9am - 5pm
function colorCoding() {
  console.log(currentTime);
  for (let i = 9; i <= 17; i++) {
    if (i < currentTime) {
      $("#" + i).addClass("past");
    } else if (i == currentTime) {
      $("#" + i).addClass("present");
    } else if (i > currentTime) {
      $("#" + i).addClass("future");
    }
  }
}

document.getElementById("firstTime").addEventListener("click", function () {
  // Get the parent element that contains the input and save button
  var timeBlock = this.parentNode;
  // Get the id of the time block
  var id = timeBlock.id;
  // Get the value of the user input
  var userInput = timeBlock.getElementsByTagName("saveBtn")[0].value;
  // Save the user input in local storage using the id as the key
  localStorage.setItem(id, userInput);
});

document.getElementById("firstTime").addEventListener("click", function () {
  // Code to be executed when the element is clicked
});

// // Input text area and logs into console.
// $("textarea").on("click", function () {
//   console.log("text clicked");
//   var text = $(this).text().trim();

//   var textInput = $("<textarea>").val(text);

//   $(this).replaceWith(textInput);

//   textInput.trigger("focus");
// });

// $(".saveBtn").on("click, saveInput");

// Calling functions
showDate();
colorCoding();
