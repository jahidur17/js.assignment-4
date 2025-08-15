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



function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let n = 0; n < arr1.length; n++) {
    if (arr1[n] === arr2[n]) {
    } else {
      return false;
    }
  }
  return true;
}



function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  if (marks.length === 0) {
    return {
      finalScore: 0,
      pass: 0,
      fail: 0
    };
  }
  let sum = 0;
  let totalPass = 0;
  let totalFail = 0;
  for (let mark of marks) {
    sum = mark + sum;
    if (mark >= 40) {
      totalPass++;
    } else {
      totalFail++;
    }
  }
  let average = sum / marks.length;
  average = Math.round(average);
  return {
    finalScore: average,
    pass: totalPass,
    fail: totalFail
  };
}

