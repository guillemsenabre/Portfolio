
const toggleWords = ['Robotics', 'Machine Learning', 'Hardware'];
let currentIndex = 0;

function toggleText () {
  document.getElementById("toggleText").innerHTML = toggleWords[currentIndex];
  
  // The modulo operator is used so the index wraps around at the beginning
  //of the array when its end is reached.
  // If the current index is smaller than the length of the list, the
  //remainder will be the same as (currentIndex + 1). Otherwise, when the
  //currentIndex reaches the last element (length of the list) the current
  //index will become 0.

  currentIndex = (currentIndex + 1) % toggleWords.length;
}

setInterval(toggleText,3000);