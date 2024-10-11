// Function to check if the selected answer is correct
function checkAnswer() {
  // Correct answer
  const correctAnswer = "4";
  
  // Get all radio buttons with the name 'quiz'
  const choices = document.getElementsByName("quiz");
  
  // Variable to store the user's selected answer
  let selectedAnswer = null;
  
  // Loop through choices to find which one is checked
  for (let i = 0; i < choices.length; i++) {
      if (choices[i].checked) {
          selectedAnswer = choices[i].value;
          break;
      }
  }

  // Get the feedback element
  const feedback = document.getElementById("feedback");

  // Check if the user selected an answer
  if (selectedAnswer === null) {
      feedback.textContent = "Please select an answer.";
      feedback.style.color = "red";
  } else if (selectedAnswer === correctAnswer) {
      // If the answer is correct
      feedback.textContent = "Correct! Well done.";
      feedback.style.color = "green";
  } else {
      // If the answer is incorrect
      feedback.textContent = "Incorrect. Try again!";
      feedback.style.color = "red";
  }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
