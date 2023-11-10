
const indiaImage = document.getElementById("india");
function redirectToViratQuiz() {
  console.log("Clicked");
  window.location.href = "Virat.html";
}
indiaImage.onclick = redirectToViratQuiz;

const babu = document.getElementById("pakistan");
babu.onclick = () => {
  location.href = "Babar.html";
};
const maxu = document.getElementById("Australia");
maxu.onclick = () => {
  location.href = "Maxwell.html";
};
const quenton = document.getElementById("southAfrica");
quenton.onclick = () => {
  location.href = "quenton.html";
};
const shakib = document.getElementById("afganisthan");
shakib.onclick = () => {
  location.href = "shakib.html";
}