// Smooth Scrolling for Internal Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) { 
            e.preventDefault(); 
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


function highlightNavLink(event) {
    event.preventDefault(); 

   
    const query = document.getElementById('search-input').value.toLowerCase();

    
    const navMapping = {
        home: 'nav-home',
        resume: 'nav-resume',
        projects: 'nav-projects',
        activities: 'nav-activities',
        publications: 'nav-publications'
    };

    
    const navId = navMapping[query];

   
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('highlight');
    });

  
    if (navId) {
        const navLink = document.getElementById(navId);
        if (navLink) {
            navLink.classList.add('highlight');
        }
    } else {
        alert('No matching section found. Please try "resume", "projects", "activities", or "publications".');
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show"); 
    });
});
