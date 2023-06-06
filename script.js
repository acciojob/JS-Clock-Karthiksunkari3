//your code here
// Get the clock hands elements
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

// Function to update the clock hands' rotation based on the current time
function updateClock() {
  const now = new Date();

  // Get the current time components (hour, minute, second)
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate the rotation angles for the clock hands
  const hourRotation = (hours * 30) + (minutes / 2); // Each hour is 30 degrees, plus additional rotation based on minutes
  const minuteRotation = (minutes * 6) + (seconds / 10); // Each minute is 6 degrees, plus additional rotation based on seconds
  const secondRotation = seconds * 6; // Each second is 6 degrees

  // Apply the rotation to the clock hands using CSS transforms
  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Call the updateClock function initially to set the initial positions of the clock hands
updateClock();

// Call the updateClock function every second to continuously update the clock hands
setInterval(updateClock, 1000);
