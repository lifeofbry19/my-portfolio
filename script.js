function onLoad() {
  window.addEventListener("scroll", showNav);
  renderProjects();
}

function showNav() {
  const nav = document.querySelector("nav");
  if (this.scrollY > 10) {
    nav.classList.add("active");
  } else if (nav.classList.contains("active") && this.scrollY <= 10) {
    nav.classList.remove("active");
  }
}

function addProject(title, codeLink, previewLink) {
  const projectsContainer = document.querySelector(".projects-container");

  const projectCard = document.createElement("div");

  projectCard.innerHTML = `
  <h3>${title}</h3>
  <hr>
  <a href="${codeLink}"><button class="card-btn">View Code</button></a>
  <a href="${previewLink}"><button class="card-btn">Live Demo</button></a>
`;

  projectsContainer.appendChild(projectCard);
}

function renderProjects() {
  addProject(
    "Sample Restaurant Page made with Webpack and vanilla JS",
    "https://github.com/lifeofbry19/restaurant-page",
    "https://lifeofbry19.github.io/restaurant-page/"
  );
  addProject(
    "Personal Library with Local Storage",
    "https://github.com/lifeofbry19/js-library",
    "https://lifeofbry19.github.io/js-library/"
  );
  addProject(
    "Sample Signup Form with basic validation",
    "https://github.com/lifeofbry19/sample-signup-form",
    "https://lifeofbry19.github.io/sample-signup-form/"
  );

  addProject(
    "Calculator App built with vanilla JS",
    "https://github.com/lifeofbry19/js-calculator",
    "https://lifeofbry19.github.io/js-calculator/"
  );

  addProject(
    "Tic Tac Toe game built with vanilla JS",
    "https://github.com/lifeofbry19/tic-tac-toe",
    "https://lifeofbry19.github.io/tic-tac-toe/"
  );
}

onLoad();
