const introP = document.querySelector(".intro");
const punchlineP = document.querySelector(".punchline");
const punchlineBtn = document.querySelector(".punchlineBtn");
const newJokeBtn = document.querySelector(".newJokeBtn");
let punchline = "";

const btnUpdate = () => {
  punchlineBtn.classList.toggle("hide");
  newJokeBtn.classList.toggle("hide");
};

const getJokes = async () => {
  btnUpdate();
  punchlineP.style.display = "none";
  punchlineP.innerHTML = "";
  const jokeRes = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
  const jokeData = await jokeRes.json();
  const joke = jokeData[0].setup;
  punchline = jokeData[0].punchline;
  introP.textContent = joke;
};
getJokes();

const getPunchline = () => {
  btnUpdate();
  punchlineP.style.display = "block";
  punchlineP.textContent = punchline;
};
