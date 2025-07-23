document.addEventListener("DOMContentLoaded", () => {
  const API_URL = "http://localhost:3000/projects.json";
  const container = document.getElementById("projects-container");
  const tagFilters = document.getElementById("tag-filters");
  let allProjects = [];
  let activeTag = null;

  fetch(API_URL)
    .then((res) => res.json())
    .then((projects) => {
      allProjects = projects;
      renderProjects(projects);
      generateTagButtons(projects);
    });

  function renderProjects(projects) {
    container.innerHTML = "";

    const filtered = activeTag
      ? projects.filter((p) => p.tags?.includes(activeTag))
      : projects;

    if (filtered.length === 0) {
      container.innerHTML = "<p>No hay proyectos con esa etiqueta.</p>";
      return;
    }

    filtered.forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        ${project.image_url ? `<img src="${project.image_url}" alt="${project.title}" />` : ""}
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p>
          🌐 <a href="${project.url}" target="_blank">Sitio</a> |
          💻 <a href="${project.github}" target="_blank">GitHub</a>
        </p>
        <p><strong>Etiquetas:</strong> ${project.tags || "Ninguna"}</p>
      `;
      container.appendChild(card);
    });
  }

  function generateTagButtons(projects) {
    const tagsSet = new Set();

    projects.forEach((p) => {
      if (p.tags) {
        p.tags.split(",").map((tag) => tag.trim()).forEach((tag) => tagsSet.add(tag));
      }
    });

    tagsSet.forEach((tag) => {
      const button = document.createElement("button");
      button.innerText = tag;
      button.addEventListener("click", () => {
        if (activeTag === tag) {
          activeTag = null;
          clearActiveButtons();
        } else {
          activeTag = tag;
          clearActiveButtons();
          button.classList.add("active");
        }
        renderProjects(allProjects);
      });
      tagFilters.appendChild(button);
    });
  }

  function clearActiveButtons() {
    document.querySelectorAll("#tag-filters button").forEach((btn) => btn.classList.remove("active"));
  }
});
