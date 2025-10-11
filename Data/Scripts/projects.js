async function ProjectHTML(name, description, title, subtitle, action, infourl, url, iconPath, bannerPath, color) {    
    return `
        <div class="project" style="background-color: ${color}">
            <div class="project-filter" style="background-image: linear-gradient(45deg, ${color}, rgba(0,0,0,0) 70%);"></div>
            <a href="${infourl}" class="project-title-area">
                <h5 class="project-action">${action}</h5>
                <h1 class="project-title">${title}</h1>
                <h5 class="project-subtitle">${subtitle}</h5>
            </a>
            <div class="project-banner" style="background-image: url('${bannerPath}')"></div>
            <div class="project-bottom">
                <div class="project-icon" style="background-image: url('${iconPath}');"></div>
                <h4 class="project-name">${name}</h4>
                <p class="project-description">${description}</p>
                <a class="project-view" rel="nofollow noreferrer noopener" href="${url}">GET</a>
            </div>
        </div>
    `;
}

async function ProjectsHTML(projects, owner) {
    let html = '';
    for (const id in projects) {
        const project = projects[id];
        html += await ProjectHTML(
            project.name,
            project.description,
            project.title,
            project.subtitle,
            project.action,
            project.infourl || `projects?focus=${owner}.${id}`,
            project.url,
            project.icon || `/Data/Icons/icon.${id}.svg`,
            project.banner || `/Data/Images/project.${id}.banner.png`,
            project.color
        );
    }
    return html;
}

async function ProjectsHTMLFromURL(url) {
    return await fetch(url)
        .then(response => response.json())
        .then(projects => ProjectsHTML(projects));
}

async function ProjectsHTMLFromOwner(owner) {
    return await fetch(`/Data/Projects/${owner}.json`)
        .then(response => response.json())
        .then(projects => ProjectsHTML(projects, owner));
}

export { ProjectsHTMLFromURL, ProjectsHTMLFromOwner };