// Smooth Scrolling for Internal Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) { // Only handle internal anchor links
            e.preventDefault(); // 
            const targetId = href.substring(1); 
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

// Highlight Navigation Links Based on Search
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

// Toggle Navigation Menu
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show"); // Toggle the 'show' class to display or hide nav-links
    });
});
