/* Lab8  */
/* Name:Abdulaziz Ali Alhumidi  */
/* ID: 2141075  */

document
  .getElementsByClassName("text")[0]
  .addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      getCheapest();
    }
  });

document
  .getElementsByClassName("button")[0]
  .addEventListener("click", getCheapest);

function getCheapest() {
  const game = document
    .getElementsByClassName("text")[0]
    .value.trim()
    .split(" ")
    .join("");

  if (game.match("[a-zA-z0-9 ]+")) {
    const endpoint = "https://www.cheapshark.com/api/1.0/games?title=" + game;

    //AJAX
    const xhr = new XMLHttpRequest();

    // Open connection
    xhr.open("GET", endpoint);

    //connection
    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);

        // Game Name
        const gameName = data[0].external;
        const nameElement = document.createElement("p");
        nameElement.textContent = "Game Name : " + gameName;
        nameElement.classList.add("p");

        // Game price
        const gameprice = data[0].cheapest;
        const priceElement = document.createElement("p");
        priceElement.textContent = "  Cheapest Price: " + gameprice + " $";
        priceElement.classList.add("p");

        // Game img
        const gameImg = data[0].thumb;
        const imgElement = document.createElement("img");
        imgElement.src = gameImg;
        imgElement.classList.add("img");

        // Game 1
        const div1 = document.createElement("div");
        div1.appendChild(nameElement);
        div1.appendChild(priceElement);
        div1.appendChild(imgElement);
        div1.classList.add("div");

        // Game Name
        const gameName2 = data[1].external;
        const nameElement2 = document.createElement("p");
        nameElement2.textContent = "Game Name : " + gameName2;
        nameElement2.classList.add("p");

        // Game price
        const gameprice2 = data[1].cheapest;
        const priceElement2 = document.createElement("p");
        priceElement2.textContent = "  Cheapest Price: " + gameprice2 + " $";
        priceElement2.classList.add("p");

        // Game img
        const gameImg2 = data[1].thumb;
        const imgElement2 = document.createElement("img");
        imgElement2.src = gameImg2;
        imgElement2.classList.add("img");

        // Game 2
        const div2 = document.createElement("div");
        div2.appendChild(nameElement2);
        div2.appendChild(priceElement2);
        div2.appendChild(imgElement2);
        div2.classList.add("div");

        const result = document.getElementsByClassName("result")[0];
        result.textContent = "";
        result.appendChild(div1);
        result.appendChild(div2);
      }
    };

    //Error
    xhr.onerror = function () {
      displayError("An error occured while fetching weather data.");
    };

    //send
    xhr.send();
  } else {
    // error message
    displayError("Enter the game name corectly, for example 'we were here' ");
  }
}

function displayError(err) {
  const message = document.createElement("p");
  message.textContent = err;
  message.classList.add("red");

  const result = document.getElementsByClassName("result")[0];
  result.textContent = "";
  result.appendChild(message);
}
