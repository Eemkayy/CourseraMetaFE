//spread operator is three dots

let top3 = ["The Colosseum", "Trevi Fountain", "The Vatican"];

function showItinierary(place1,place2,place3){
    console.log("Visit " + place1);
    console.log("Then " + place2);
    console.log("And Then " + place3);
}

showItinierary(top3[0],top3[1],top3[2]);

//suppose we had 7 arguments, it would be impractical
showItinierary(...top3);
//no need to list every member 