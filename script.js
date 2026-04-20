const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // clear errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // NAME
  if (name.value.trim() === "") {
    name.nextElementSibling.textContent = "Name is required";
    isValid = false;
  }

  // EMAIL
  if (!email.value.includes("@")) {
    email.nextElementSibling.textContent = "Enter a valid email";
    isValid = false;
  }

  // MESSAGE
  if (message.value.trim().length < 10) {
    message.nextElementSibling.textContent = "Message too short";
    isValid = false;
  }

  // SUCCESS
  if (isValid) {
    successMessage.textContent = "Message sent successfully!";
    form.reset();
  }
});