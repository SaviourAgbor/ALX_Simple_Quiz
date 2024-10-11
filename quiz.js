// Function to check if the selected answer is correct
function checkAnswer() {
  // Correct answer for the quiz
  const correctAnswer = "4";

  // Use document.querySelector to get the user's selected answer (radio input that is checked)
  const userAnswer = document.querySelector('input[name="quiz"]:checked');

  // Get the feedback element
  const feedback = document.getElementById("feedback");

  // Check if an answer was selected
  if (userAnswer) {
    // Compare the selected answer with the correct answer
    if (userAnswer.value === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Incorrect. Try again.";
      feedback.style.color = "red";
    }
  } else {
    feedback.textContent = "Please select an answer.";
    feedback.style.color = "orange";
  }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
