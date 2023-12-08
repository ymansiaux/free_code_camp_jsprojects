const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// au moment du clic sur le bouton on va tirer au hasard une couleur dans le tableau
$("#btn").on("click", function () {
    const randomNumber = getRandomInt(3);
    console.log(randomNumber);

    var chosenColor = colors[randomNumber];

    console.log(chosenColor);

    $("body").css("background-color", chosenColor);
    $("span.color").text(chosenColor);
    }
);
