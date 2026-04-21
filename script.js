/MENU TOGGLE/
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/CONTACT FORM SECTION/
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

/SKILLS SECTION PROGRESS BAR/

const progressBars = document.querySelectorAll(".progress");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const target = +bar.getAttribute("data-width");

      let count = 0;

      const update = () => {
        if (count < target) {
          count++;
          bar.style.width = count + "%";
          bar.textContent = count + "%";
          requestAnimationFrame(update);
        }
      };

      update();
      observer.unobserve(bar);
    }
  });
}, { threshold: 0.6 });

progressBars.forEach(bar => {
  observer.observe(bar);
});

/DARK MODE TOGGLE/
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // icon switch
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

/SCROLL REVEAL ANIMATION/

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      section.classList.add("active");
    } else {
      section.classList.remove("active"); 
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

/DYNAMIC PROJECT FILTER/
const buttons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".project-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    cards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    
    // remove active from all
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    cards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});