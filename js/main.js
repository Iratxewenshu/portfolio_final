const projectsGrid = document.getElementById("projectsGrid");

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
