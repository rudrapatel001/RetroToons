// Show loader for 2-3 seconds and then show main content
setTimeout(function () {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  loader.style.display = "none"; // Hide the loader
  mainContent.style.display = "block"; // Show the main content
}, 3000); // Change this value to 2000 for 2 seconds or 3000 for 3 seconds

const buttons = document.querySelectorAll(".btn-readmore");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const hiddenContent = this.previousElementSibling; // Get the hidden content

    if (hiddenContent.style.display === "block") {
      hiddenContent.style.display = "none"; // Hide the content
    } else {
      hiddenContent.style.display = "block"; // Show the content
    }
  });
});
