document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) { // Only handle internal anchor links
            e.preventDefault(); // Prevent default scrolling behavior
            const targetId = href.substring(1); // Remove the '#' from href
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
    });
});

function highlightNavLink(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the search input value
    const query = document.getElementById('search-input').value.toLowerCase();

    // Define a mapping of keywords to nav link IDs
    const navMapping = {
        home: 'nav-home',
        resume: 'nav-resume',
        projects: 'nav-projects',
        activities: 'nav-activities',
        publications: 'nav-publications'
    };

    // Find the corresponding nav link ID
    const navId = navMapping[query];

    // Remove the highlight from all nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('highlight');
    });

    // If a matching nav link exists, highlight it
    if (navId) {
        const navLink = document.getElementById(navId);
        if (navLink) {
            navLink.classList.add('highlight');
        }
    } else {
        alert('No matching section found. Please try "resume", "projects", "activities", or "publications".');
    }
}