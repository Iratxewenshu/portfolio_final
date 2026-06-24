const projectsGrid = document.getElementById("projectsGrid");
const filterButtons = document.querySelectorAll(".filter-button");

function renderProjects(projectsToShow) {
  projectsGrid.innerHTML = "";

  for (let i = 0; i < projectsToShow.length; i++) {
    const project = projectsToShow[i];
    const article = document.createElement("article");
    const link = document.createElement("a");
    const image = document.createElement("img");
    const information = document.createElement("div");
    const meta = document.createElement("p");
    const title = document.createElement("h3");
    const description = document.createElement("p");

    article.className = "project-card";
    link.className = "project-link";
    image.className = "project-image";
    information.className = "project-info";
    meta.className = "project-meta";

    link.href = project.enlace;
    image.src = project.imagen;
    image.alt = project.alt;
    meta.textContent = project.categoria + " · " + project.anio;
    title.textContent = project.titulo;
    description.textContent = project.descripcion;

    information.appendChild(meta);
    information.appendChild(title);
    information.appendChild(description);
    link.appendChild(image);
    link.appendChild(information);
    article.appendChild(link);
    projectsGrid.appendChild(article);
  }
}

renderProjects(proyectos);

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    const selectedCategory = this.getAttribute("data-filter");
    let filteredProjects = proyectos;

    if (selectedCategory !== "Todos") {
      filteredProjects = proyectos.filter(function (project) {
        return project.categoria === selectedCategory;
      });
    }

    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }

    this.classList.add("active");
    renderProjects(filteredProjects);
  });
}

// Validación básica del formulario de contacto.
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const formFeedback = document.getElementById("formFeedback");
  let formIsValid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  formFeedback.textContent = "";

  if (name.value.trim() === "") {
    nameError.textContent = "Escribe tu nombre.";
    formIsValid = false;
  }

  if (email.value.trim() === "" || !email.value.includes("@")) {
    emailError.textContent = "Escribe un email válido.";
    formIsValid = false;
  }

  if (message.value.trim() === "") {
    messageError.textContent = "Escribe un mensaje.";
    formIsValid = false;
  }

  if (formIsValid) {
    formFeedback.textContent = "Mensaje preparado correctamente.";
    contactForm.reset();
  }
});

// Entrada de secciones al aparecer en la pantalla.
const sectionsToReveal = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function (entries) {
  for (let i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      entries[i].target.classList.add("visible");
      observer.unobserve(entries[i].target);
    }
  }
});

for (let i = 0; i < sectionsToReveal.length; i++) {
  observer.observe(sectionsToReveal[i]);
}
