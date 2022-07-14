function onLoad() {
  //window.addEventListener("scroll", showNav);
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

function addProject(imgSrc, title, codeLink, previewLink) {
  const projectsContainer = document.querySelector(".projects-container");

  const projectCard = document.createElement("div");

  projectCard.innerHTML = `
  <img src="${imgSrc}" alt="">
  <h3>${title}</h3>
  <div class="button-container">
  <a href="${codeLink}"><button class="card-btn">View Code</button></a>
  <a href="${previewLink}"><button class="card-btn">Live Demo</button></a>
  <div>
`;

  projectsContainer.appendChild(projectCard);
}

function renderProjects() {
  addProject(
    "images/restaurant-ss.png",
    "Sample Restaurant Page made with Webpack and vanilla JS",
    "https://github.com/lifeofbry19/restaurant-page",
    "https://lifeofbry19.github.io/restaurant-page/"
  );
  addProject(
    "images/library-ss.png",
    "Personal Library with Local Storage",
    "https://github.com/lifeofbry19/js-library",
    "https://lifeofbry19.github.io/js-library/"
  );
  addProject(
    "images/signupform-ss.png",
    "Sample Signup Form with basic validation",
    "https://github.com/lifeofbry19/sample-signup-form",
    "https://lifeofbry19.github.io/sample-signup-form/"
  );

  addProject(
    "images/calculator-ss.png",
    "Calculator App built with vanilla JS",
    "https://github.com/lifeofbry19/js-calculator",
    "https://lifeofbry19.github.io/js-calculator/"
  );

  addProject(
    "images/tictactoe-ss.png",
    "Tic Tac Toe game built with vanilla JS",
    "https://github.com/lifeofbry19/tic-tac-toe",
    "https://lifeofbry19.github.io/tic-tac-toe/"
  );
}

onLoad();
