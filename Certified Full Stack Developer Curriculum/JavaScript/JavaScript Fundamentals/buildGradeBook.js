function getAverage(arr) {
  const arrLen = arr.length;
  return arr.reduce((sum, el) => sum + el / arrLen, 0);
}

function getGrade(score) {

  if (score >= 0 && score < 60) {
    return "F";
  }

  else if (score < 70) {
    return "D";
  }

  else if (score < 80) {
    return "C";
  }

  else if (score < 90) {
    return "B";
  } 

  else if (score < 100) {
    return "A";
  }

  else {
    return "A+";
  }
}

function hasPassingGrade(score) {
  const grade = getGrade(score);

  if (grade !== "F") {
    return true;
  }

  return false;
}

function studentMsg(scores, score) {
  const grade = getGrade(score);
  const avgScore = getAverage(scores);

  let message = `Class average: ${avgScore}. Your grade: ${grade}.`;

  hasPassingGrade(score) ? message += " You passed the course." : message += " You failed the course.";

  return message;
}
