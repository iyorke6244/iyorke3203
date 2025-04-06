// JavaScript to check quiz answers and display results
function checkAnswers() {
  const resultsDiv = document.getElementById("results");
  let score = 0;
  let total = 5;
  let feedback = "<h2>Quiz Results:</h2>";

  // Question 1
  const q1 = document.querySelector("input[name='q1']:checked");
  if (q1 && q1.value === "b") {
    score++;
    feedback += "<p>Q1: Correct ✅</p>";
  } else {
    feedback += "<p>Q1: Incorrect ❌ (Correct: A small piece of data stored on the user's computer)</p>";
  }

  // Question 2
  const q2 = document.querySelector("input[name='q2']:checked");
  if (q2 && q2.value === "b") {
    score++;
    feedback += "<p>Q2: Correct ✅</p>";
  } else {
    feedback += "<p>Q2: Incorrect ❌ (Correct: Use HTTP-only and Secure flags)</p>";
  }

  // Question 3
  const q3 = document.querySelector("input[name='q3']:checked");
  if (q3 && q3.value === "b") {
    score++;
    feedback += "<p>Q3: Correct ✅</p>";
  } else {
    feedback += "<p>Q3: Incorrect ❌ (Correct: User authentication and session tracking)</p>";
  }

  // Question 4
  const q4 = document.querySelector("input[name='q4']").value.trim().toLowerCase();
  if (q4 === "path") {
    score++;
    feedback += "<p>Q4: Correct ✅</p>";
  } else {
    feedback += "<p>Q4: Incorrect ❌ (Correct: path)</p>";
  }

  // Question 5
  const q5 = document.querySelectorAll("input[name='q5']:checked");
  const correctAnswers = ["a", "b", "d"];
  const selected = Array.from(q5).map(input => input.value);
  const isCorrect = correctAnswers.every(ans => selected.includes(ans)) && selected.length === correctAnswers.length;
  if (isCorrect) {
    score++;
    feedback += "<p>Q5: Correct ✅</p>";
  } else {
    feedback += "<p>Q5: Incorrect ❌ (Correct: expires, max-age, secure)</p>";
  }

  // Final Results
  const pass = score >= 3 ? "Pass 🎉" : "Fail 💡";
  feedback += `<h3>Total Score: ${score}/${total} - ${pass}</h3>`;
  resultsDiv.innerHTML = feedback;
}
