function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  if (marks.length === 0) {
    return {
      finalScore: 0,
      pass: 0,
      fail: 0,
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
  average = Math.floor(average);
  return {
    finalScore: average,
    pass: totalPass,
    fail: totalFail,
  };
}
const result = resultReport([100]);
console.log(result);
