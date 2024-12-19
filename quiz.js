function checkAnswer() {
  const correctAnswer = "4";

  const ischecked = document.querySelector('input[name="quiz"]:checked');

    if (ischecked) {
      const userAnswer = ischecked.value;

      if (userAnswer === correctAnswer) {
        let feedbackElement = document.getElementById("feedback");
        feedbackElement.textContent = "Correct! Well done";
        feedbackElement.style.color = "green";
      } else {
        let feedbackElement = document.getElementById("feedback");
    feedbackElement.textContent = "That's incorrect. Try again!";
    feedbackElement.style.color = "red";
      }
    } else {
      let feedbackElement = document.getElementById("feedback");
    feedbackElement.textContent = "Please select an answer";
    feedbackElement.style.color = "red";
    }
  }

  const submit = document.getElementById("submit-answer");
  submit.addEventListener("click", checkAnswer);



  const para = document.getElementById('quiz-question');
  para.textContent += " New text contents";
  para.style.color = "green";