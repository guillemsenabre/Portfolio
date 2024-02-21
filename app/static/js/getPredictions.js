function getPredictions() {
  const sex = document.getElementById('titanicSex').value;
  const cabin = document.getElementById('titanicCabin').value;
  const fare = document.getElementById('titanicFare').value;

  const inputData = [sex, fare, cabin]

  fetch('/getPredictions', { // Make the fetch request
    method: 'POST',
    body: JSON.stringify(inputData),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json()) // Parse JSON response
  .then(data => {
    const titanicResult = document.getElementById('titanicResult');
    const titanicResultText = document.getElementById('titanicResultText');
    const titanicSurvivalText = document.getElementById('titanicSurvivalText');

    titanicResult.textContent = data.prob_yes; // Update HTML content
    titanicResultText.textContent = data.result_text;
    titanicSurvivalText.textContent = 'pct of survival'
  })
  .catch(error => { // Handle errors
    console.error('Error fetching data:', error);
    // Display error message to the user
  });
}