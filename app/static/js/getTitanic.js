const projectsDiv = document.getElementById('projectsDiv')

function getTitanic() {
  fetch('/getTitanicView')
  .then(response => response.text())
  .then(titanicContent => {
    projectsDiv.innerHTML = titanicContent;
  })
  .catch(error => {
    console.error('Error fetching titanic data: ', error);
  })
}