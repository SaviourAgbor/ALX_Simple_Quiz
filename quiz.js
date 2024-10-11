// Function to check if the selected answer is correct
function checkAnswer() {
  // Retrieve the correct answer from the data attribute of the question element
  const quizContainer = document.getElementById("quiz-question");
  const correctAnswer = quizContainer.getAttribute("data-correct-answer");

  // Use document.querySelector to get the user's selected answer (radio input that is checked)
  const userAnswer = document.querySelector('input[name="quiz"]:checked');

  // Get the feedback element
  const feedback = document.getElementById("feedback");

  // Check if an answer was selected
  if (userAnswer) {
    // Use a comparison function to evaluate the answers
    if (isCorrectAnswer(userAnswer.value, correctAnswer)) {
      feedback.textContent = "Correct! Well done.";
      feedback.style.color = "green"; // Change text color to green for correct answer
    } else {
      feedback.textContent = "Incorrect. Try again.";
      feedback.style.color = "red"; // Change text color to red for incorrect answer
    }
  } else {
    feedback.textContent = "Please select an answer.";
    feedback.style.color = "orange"; // Warn the user to select an answer
  }
}

// Comparison function to check if the user's answer matches the correct answer
function isCorrectAnswer(userAnswerValue, correctAnswerValue) {
  return userAnswerValue === correctAnswerValue;
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
