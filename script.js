document.addEventListener("DOMContentLoaded", function() {
    const projectList = document.getElementById('project-list');

    fetch('https://api.github.com/users/daviethedeveloper/repos')
        .then(response => response.json())
        .then(data => {
            const pinnedProjects = data.filter(project => project.fork === false); // Adjust this filter based on your criteria for pinned projects
            pinnedProjects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                projectCard.innerHTML = `
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <a href="${project.html_url}" target="_blank">View on GitHub</a>
                `;
                projectList.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error fetching projects:', error));
});
