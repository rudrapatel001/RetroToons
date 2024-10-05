// Array to store results based on user selections
const results = {
  adventure: "Scooby-Doo",
  science: "Dexter from Dexter's Laboratory",
  eating: "Garfield",
  fighting: "Superman",
  pizza: "Mickey Mouse",
  sweets: "Tom from Tom and Jerry",
  fruit: "Popeye",
  burgers: "Patrick Star",
  brave: "Batman",
  smart: "Velma from Scooby-Doo",
  funny: "Bugs Bunny",
  leader: "Ash Ketchum",
};

// Function to calculate and display the result
function calculateResult() {
  // Get selected answers
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');

  // Check if all questions are answered
  if (!q1 || !q2 || !q3) {
    alert("Please answer all questions.");
    return;
  }

  // Calculate result based on selections
  const answers = [q1.value, q2.value, q3.value];
  const characterCount = {};

  // Count answers for each character
  answers.forEach((answer) => {
    if (results[answer]) {
      characterCount[results[answer]] =
        (characterCount[results[answer]] || 0) + 1;
    }
  });

  // Find the character with the highest count
  const mostFrequentCharacter = Object.keys(characterCount).reduce((a, b) =>
    characterCount[a] > characterCount[b] ? a : b
  );

  // Display the result
  document.getElementById("quiz-result").style.display = "block";
  document.getElementById("result-text").innerText = mostFrequentCharacter;
}
function goBack() {
  window.location.href = "index.html"; // Change "index.html" to your main HTML file's name if it's different
}
