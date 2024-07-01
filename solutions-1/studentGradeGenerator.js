const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getStudentGrade() {
    r1.question("Enter student marks (0-100): ", scoreInput => {
       const score = Number(scoreInput);

    if (score > 100 || score < 0 || isNaN(score)) {
        console.log("Invalid marks. Please enter a number between 0 and 100.");
        r1.close();
        return;
    }
    
    let grade;
    if (score > 79) {
       grade = 'A';
    } else if (score >= 60) {
       grade = 'B';
    } else if (score >= 49) {
       grade = 'C';
    } else if (score >= 40) {
       grade = 'D';
    } else {
       grade = 'E';
    }

    console.log(`Student's grade: ${grade}`);
    r1.close();
  });
}

console.log(getStudentGrade());




