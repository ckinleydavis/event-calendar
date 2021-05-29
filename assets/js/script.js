// Get Current Date
// REF: https://momentjs.com/docs/#/displaying/format/
// REF: Week 04 - Activity 09 - Time Intervals
    // TESTING
    // console.log("The Current Day: " + current);
    // console.log("The Current Day Element: " + currentDate);
var current = moment().format("dddd, MMMM DD, YYYY");
var currentDate = document.querySelector(".currentDate");
currentDate.textContent = current;

// Event Element & Submit
// REF: Week 05, Activity - Form Elements
var calendarEl = $('#calendar-form');
var eventEl = $('input[name="event-data"]');

function handleFormSubmit(event) {
    // Prevent the default behavior
    event.preventDefault();
  
    console.log('Event Data:', eventEl.val());
}

// Event Submit
eventEl.on('submit', handleFormSubmit);