const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

$("#btn").on("click", function () {
    var color = "#";

    for (let step = 0; step < 6; step++) {
        // Runs 5 times, with values of step 0 through 4.
        var value = getRandomInt(hex.length);
        color += hex[value];
      }

    $("body").css("background-color", color);
    $("span.color").text(color);
    }
);


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
