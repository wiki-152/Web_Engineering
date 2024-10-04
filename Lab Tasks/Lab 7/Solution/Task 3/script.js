function calculateScore() {

    const correctAnswers = {
        q1: 'b',
        q2: 'b',
        q3: 'a',
        q4: 'a',
        q5: 'b',
        q6: 'b',
        q7: 'a',
        q8: 'd',
        q9: 'a',
        q10: 'a'
    };
    
    let score = 0;
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    const totalQuestions = Object.keys(correctAnswers).length;

    for (let question in correctAnswers) {
        const userAnswer = form[question].value;
        if (userAnswer === correctAnswers[question]) {
            score++;
        }
    }

    const percentage = (score / totalQuestions) * 100;
    resultDiv.innerText = `You scored ${score} out of ${totalQuestions} (${percentage}%)`;

    if (percentage >= 80) {
        resultDiv.style.color = "green"; // Text color green for pass
        resultDiv.innerText += "\nCongratulations, you passed!";
    } else {
        resultDiv.style.color = "red"; // Text color red for fail
        resultDiv.innerText += "\nSorry, you failed.";
    }
}
