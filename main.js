function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }
  let fine = fare + fare * (20 / 100) + 30;
  return fine;
}



function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let character = str.toUpperCase();
  let noSpace = character.split(" ").join("");
  return noSpace;
}


function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }
  let team1 = player1.foul + player1.cardY + player1.cardR;
  let team2 = player2.foul + player2.cardY + player2.cardR;
  if (team1 < team2) {
    return player1.name;
  } else if (team2 < team1) {
    return player2.name;
  } else {
    return "Tie";
  }
}

