const toggleBtn = document.getElementById("toggle-btn");
const body = document.body;

// Default Light Mode
body.classList.add("light-mode");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Dark Mode";
  } else {
    toggleBtn.textContent = "Light Mode";
  }
});
