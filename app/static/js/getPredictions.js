function getPredictions() {
  sex = document.getElementById('titanicSex').value,
  cabin = document.getElementById('titanicCabin').value,
  fare = document.getElementById('titanicFare').value
  
  // Check if any of the required values is null
  if (sex === "" || cabin === "" || fare === "") {
    // Handle the case where any of the values is null
    alert("Please fill in all required fields.");
    return;
  }
  const inputData = {
    sex: sex,
    cabin: cabin,
    fare: fare
  }

  fetch('/getPredictions', { // Make the fetch request
    method: 'POST',
    body: JSON.stringify(inputData),
    headers: { 'Content-Type': 'application/json'}
  })
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    const titanicResult = document.getElementById('titanicResult');
    const titanicResultText = document.getElementById('titanicResultText');
    const titanicSurvivalText = document.getElementById('titanicSurvivalText');

    titanicResult.textContent = data.prob_yes; // Update HTML content
    titanicResultText.textContent = data.result_text;
    titanicSurvivalText.textContent = '%'
  })
  .catch(error => { // Handle errors
    console.error('Error fetching data:', error);
    // Display error message to the user
  });
}