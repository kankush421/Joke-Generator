const jokeButton = document.getElementById("joke-btn");
const jokeArea = document.getElementById("joke");

const getJokes = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");
   xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        
        const data = JSON.parse(this.response);
        jokeArea.innerHTML = '';
        jokeArea.innerHTML = `${data.value}`;
        
      } else {
      }
    }
  };
  xhr.send();
};
jokeButton.addEventListener("click", getJokes);
