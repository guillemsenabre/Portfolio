const gmailLogo = document.getElementById("gmailLogo");
const email = 'guillemsenabre@gmail.com'

gmailLogo.addEventListener("click", function (event) {
  if (event.target === gmailLogo) {
    navigator.clipboard.writeText(email);

    alert("Email has been copied!");
  }
})