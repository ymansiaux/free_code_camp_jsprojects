// set inital value to zero
let count = 0;
// select value and buttons
let value = $("#value");

$("button").on("click", function () {

    let color = "black";

if($(this).attr('class') == "btn decrease" ){
    count--;    
} else if($(this).attr('class') == "btn increase"){
    count++;    
} else if($(this).attr('class') == "btn reset"){
    count = 0;    
}

if(count > 0){
    color = "green";
} else if(count < 0){
    color = "red";
} else {
    color = "black";
}

value.text(count);
value.css("color", color);

})

// si ca c'es égal à decrease alors on fait -1
// etc
// le compteur c'est value.innerHTML

