// Define a scoring system for each answer, with points assigned to multiple characters.
const characterPoints = {
  // Question 1: What's your favorite activity?
  q1: {
    adventure: { ScoobyDoo: 2, Batman: 1, BugsBunny: 1 },
    science: { Dexter: 2, Velma: 2, AshKetchum: 1 },
    eating: { Garfield: 3, PatrickStar: 2 },
    fighting: { Superman: 2, Batman: 2, Popeye: 1 },
  },
  // Question 2: What's your favorite snack?
  q2: {
    pizza: { MickeyMouse: 2, ScoobyDoo: 1, PatrickStar: 1 },
    sweets: { Tom: 2, BugsBunny: 1 },
    fruit: { Popeye: 2, Velma: 1 },
    burgers: { Garfield: 2, PatrickStar: 1 },
  },
  // Question 3: Which quality describes you best?
  q3: {
    brave: { Batman: 2, Superman: 1, AshKetchum: 1 },
    smart: { Velma: 3, Dexter: 2 },
    funny: { BugsBunny: 2, Garfield: 1, MickeyMouse: 1 },
    leader: { AshKetchum: 3, Batman: 1, Superman: 1 },
  },
  // Question 4: What's your ideal vacation spot?
  q4: {
    beach: { PatrickStar: 3, BugsBunny: 1, MickeyMouse: 1 },
    mountains: { ScoobyDoo: 2, Superman: 1, Velma: 1 },
    city: { Batman: 3, Dexter: 1 },
    jungle: { AshKetchum: 2, Popeye: 1 },
  },
  // Question 5: What's your favorite color?
  q5: {
    blue: { Dexter: 2, AshKetchum: 2 },
    red: { Superman: 2, Garfield: 1 },
    yellow: { Velma: 2, Tom: 1 },
    green: { ScoobyDoo: 2, BugsBunny: 1, Popeye: 1 },
  },
};

// Define possible cartoon characters
const characters = {
  ScoobyDoo: 0,
  Dexter: 0,
  Garfield: 0,
  Superman: 0,
  MickeyMouse: 0,
  Tom: 0,
  Popeye: 0,
  PatrickStar: 0,
  Batman: 0,
  Velma: 0,
  BugsBunny: 0,
  AshKetchum: 0,
};

// Function to calculate the result based on user's choices
function calculateResult() {
  // Reset the scores for all characters
  for (let character in characters) {
    characters[character] = 0;
  }

  // Get selected answers
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');
  const q4 = document.querySelector('input[name="q4"]:checked');
  const q5 = document.querySelector('input[name="q5"]:checked');

  // Ensure all questions are answered
  if (!q1 || !q2 || !q3 || !q4 || !q5) {
    alert("Please answer all questions.");
    return;
  }

  // Calculate points for each selected answer
  const answers = [q1.value, q2.value, q3.value, q4.value, q5.value];
  answers.forEach((answer, index) => {
    const question = `q${index + 1}`;
    const pointDistribution = characterPoints[question][answer];
    for (let character in pointDistribution) {
      characters[character] += pointDistribution[character];
    }
  });

  // Find the character with the highest score
  const resultCharacter = Object.keys(characters).reduce((a, b) =>
    characters[a] > characters[b] ? a : b
  );

  // Display the result
  document.getElementById("quiz-result").style.display = "block";
  document.getElementById("result-text").innerText = resultCharacter;
}

function goBack() {
  window.location.href = "index.html";
}
