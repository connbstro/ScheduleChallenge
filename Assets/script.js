const currentDay = document.querySelector("#currentDay");
const currentTime = dayjs().format("HH");
const textArea = document.querySelector(".text-field");
const textInput = [];

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


/* ⬇︎ JQUERY TO RECOGNIZE WHEN A BUTTON IS CLICKED AND UPON CLICK EXECUTE THE SPECIFIED ACTION 
    • In this case the action we are executing is to run the saveInput function
    • This entire line is what the event parameter in line 73 is referencing */
$(".saveBtn").on("click", saveInput);

/* ⬇︎ SAVE INPUT FUNCTION
    • Sibilings of each div (aka the timeblocks) are span, textarea, and button. 
    • The sibilings are an array so that makes:
          span ➝ 0
          textarea ➝ 1  
          button ➝ 2
    • Parents refers to the div (aka timeblock) and we only want the immediate parent (go up 1 level in the DOM) so that would be 0
    • event is click, target is saveBtn */
function saveInput(event) {
  const timeBlockId = $(event.target).parents()[0].id;
  const textLine = $(event.target).siblings()[1].value;
  localStorage.setItem(timeBlockId, textLine);
}

/* ⬇︎ LOAD ALL DATA SAVED IN LOCAL STORAGE FUNCTION
//     • LINE 52 & 53: Create a for loop to get/retrieve the items (values) saved to each id (key)
//     • LINE 53: (i) = the id
//     • LINE 54: Append the item (value) retrieved from local storage to it's cordinating id (key) */
function loadStorage () {
  for (let i = 9; i <= 17; i++) {
    localStorage.getItem(i);
    $("#" + i).append(localStorage.getItem(i));
    // $("textarea").append(localStorage.getItem(i));
  }
}

// Calling functions
showDate();
colorCoding();
loadStorage();