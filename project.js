/* ══════════════════════════════════════════════════
   Project Data — all 16 projects
   ══════════════════════════════════════════════════ */

const projects = {

    'doodlejump': {
        title: 'DoodleJump',
        date: 'July 2019',
        folder: 'DoddleJump',
        logo: 'logo.png',
        tools: ['C#', 'Unity'],
        status: 'dropped',
        statusLabel: 'Dropped',
        description: 'A collaboration with an animator and graphic designer to create a game similar to DoodleJump. It was my first ever big project and took 9 months of work. The development was 100% on me. Although the game didn\'t reach the deployment stage and was eventually dropped, I learned a tremendous amount from the experience — from game mechanics to asset integration and working with a creative partner.',
        media: [
            { file: 'screenshot1.png', label: 'Gameplay Screenshot' },
            { file: 'character1.png', label: 'Character 1' },
            { file: 'character2.png', label: 'Character 2' },
            { file: 'character3.png', label: 'Character 3' },
            { file: 'character4.png', label: 'Character 4' },
            { file: 'character5.png', label: 'Character 5' },
            { file: 'character6.png', label: 'Character 6' },
            { file: 'gameplay1.mp4', label: 'Gameplay Video' }
        ]
    },

    'najahni': {
        title: 'Najahni',
        date: 'December 2023',
        folder: 'Najahni',
        logo: 'logo.png',
        tools: ['Documentation', 'Data Collection'],
        status: 'active',
        statusLabel: 'Still Active',
        description: 'A collaboration between a group of friends who were all at baccalaureate level. We gathered to create a solution to some of the issues we faced and came up with Najahni. The app is still thriving and we\'re still working on the marketing side. My task was primarily documentation and data collection — mapping out requirements, gathering user feedback, and organizing the project structure.',
        media: [
            { file: 'pub.jpg', label: 'Promotion' },
            { file: 'ui1.jpg', label: 'UI Screenshot 1' },
            { file: 'ui2.jpg', label: 'UI Screenshot 2' },
            { file: 'ui3.jpg', label: 'UI Screenshot 3' },
            { file: 'ui4.jpg', label: 'UI Screenshot 4' }
        ]
    },

    'covoiturage': {
        title: 'Covoiturage',
        date: 'November 2024',
        folder: 'Covoiturage',
        logo: 'logo.png',
        tools: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        status: 'dropped',
        statusLabel: 'Dropped (June 2025)',
        description: 'An idea brought up in the HECFA IT department as a solution to the transportation issue faced by students. I worked on it almost all around the year — the frontend was finished, but the backend wasn\'t as developed. The app was eventually dropped in June 2025. Built with HTML, CSS, JavaScript and PHP.',
        media: [
            { file: 'ui1.png', label: 'UI Screenshot' },
            { file: 'ui2.mp4', label: 'Demo Video' }
        ]
    },

    'iheclibrary': {
        title: 'IHEC Library',
        date: 'April 2025',
        folder: 'IhecLibrary',
        logo: 'logo.jpg',
        tools: ['C#', 'ASP.NET'],
        status: 'dropped',
        statusLabel: 'Dropped (1 year after)',
        description: 'A project made when the launch of our new university Library was announced. We came up with this app to help digitalize the Library and add useful features — like place and book reservations, importing all book data to ease searching. It was built with C# and ASP.NET. The app got dropped a year after completion.',
        media: [
            { file: 'ui1.png', label: 'UI Screenshot 1' },
            { file: 'ui2.png', label: 'UI Screenshot 2' },
            { file: 'ui3.png', label: 'UI Screenshot 3' },
            { file: 'ui4.png', label: 'UI Screenshot 4' },
            { file: 'ui5.png', label: 'UI Screenshot 5' },
            { file: 'ui6.png', label: 'UI Screenshot 6' },
            { file: 'ui7.png', label: 'UI Screenshot 7' }
        ]
    },

    'hecfa': {
        title: 'HECFA Website',
        date: 'September 2025',
        folder: 'HECFA',
        logo: 'logo.png',
        tools: ['Deployment', 'Domain Config', 'Chatbot'],
        status: 'deployed',
        statusLabel: 'Deployed',
        liveUrl: 'https://hecfa.tn',
        description: 'We inherited this project when my friend Mariem and I got elected as the responsables for the IT department. We did the usual needed upgrades and maintenance for the website. My work focused on deployment changes, domain configurations, and chatbot modifications — which after a while got dropped, but the website stayed deployed and running.',
        media: [
            { file: 'ui1.png', label: 'Website Screenshot' }
        ]
    },

    'ihecbot': {
        title: 'IHECBOT',
        date: 'April 2025',
        folder: 'IHECBOT',
        logo: 'logo.jpg',
        tools: ['Chatbot'],
        status: 'dropped',
        statusLabel: 'Dropped',
        description: 'A chatbot integrated into the HECFA club website to assist visitors with information and navigation. The bot helped answer frequently asked questions and guide users through the site. It was eventually dropped after a while, though the core website remained deployed.',
        media: [
            { file: 'ui1.png', label: 'Chatbot UI 1' },
            { file: 'ui2.png', label: 'Chatbot UI 2' }
        ]
    },

    'hecfa-form': {
        title: 'HECFA Integration Form',
        date: 'October 2025',
        folder: 'HECFA Integration Form',
        logo: 'logo.png',
        tools: ['Firebase', 'Next.js', 'React'],
        status: 'deployed',
        statusLabel: 'Deployed',
        description: 'A form made to facilitate the application process for new potential members and to ease the later filtering phase. It was something unique — only our club has used this approach. The project was made with Firebase, Next.js, and React. It was perfectly executed and successfully deployed.',
        media: [
            { file: 'ui1.png', label: 'Form UI 1' },
            { file: 'ui2.png', label: 'Form UI 2' }
        ]
    },

    'hecfa-dashboard': {
        title: 'HECFA Integration Dashboard',
        date: 'Late October 2025',
        folder: 'HECFA Integration dashboard',
        logo: 'logo.png',
        tools: ['Firebase', 'Next.js', 'React'],
        status: 'deployed',
        statusLabel: 'Deployed',
        description: 'A dashboard used to display all applications from the integration form, with useful options that helped us in the filtering phase. The project was made with Firebase, Next.js, and React. It was perfectly executed and saw the light of deployment — making the whole member selection process smooth and data-driven.',
        media: [
            { file: 'ui1.png', label: 'Dashboard Screenshot' }
        ]
    },

    'ihec-connect': {
        title: 'IHEC Connect',
        date: 'November 2025',
        folder: 'Ihec Connect',
        logo: 'logo.png',
        tools: ['UI/UX', 'Prototype'],
        status: 'prototype',
        statusLabel: '1st Prize — Prototype',
        description: 'A project we came up with for the SME (Semaine Mondiale de l\'Entrepreneuriat) competition from our university. The goal was to make a solution that would help the community — a tutoring platform to facilitate knowledge exchange. The app got us the 1st prize and 1500 TND for our club. It was a UI-only prototype.',
        media: [
            { file: 'ui1.png', label: 'UI Screen 1' },
            { file: 'ui2.png', label: 'UI Screen 2' },
            { file: 'ui3.png', label: 'UI Screen 3' },
            { file: 'ui4.png', label: 'UI Screen 4' },
            { file: 'ui5.png', label: 'UI Screen 5' },
            { file: 'ui6.png', label: 'UI Screen 6' }
        ]
    },

    'ihec-learn': {
        title: 'IHEC Learn Skills',
        date: 'Late November 2025',
        folder: 'Ihec learn skills',
        logo: 'logo.png',
        tools: ['Java', 'JavaFX'],
        status: 'local',
        statusLabel: 'Local — Exploring Deployment',
        description: 'An app created as a demand quest to make a useful tool for the university community. It\'s a studying platform that can store courses made by our teachers with added interactive options. The app was built with Java and JavaFX. It currently stays local while we explore deployment possibilities.',
        media: [
            { file: 'ui1.png', label: 'UI Screenshot 1' },
            { file: 'ui2.png', label: 'UI Screenshot 2' },
            { file: 'ui3.png', label: 'UI Screenshot 3' },
            { file: 'ui4.png', label: 'UI Screenshot 4' },
            { file: 'ui5.png', label: 'UI Screenshot 5' }
        ]
    },

    'valorant': {
        title: 'Valorant Assistant',
        date: 'Early December 2025',
        folder: 'Valoratn Assisstant',
        logo: 'logo.png',
        tools: ['Python', 'Streamlit', 'Tkinter', 'Decision Tree'],
        status: 'local',
        statusLabel: 'Personal Project',
        description: 'An app I made to practice new ideas — using a decision tree implemented with the game Valorant to help players choose the right weapon match depending on their play style. It also includes a quiz for strategic decisions to help improve overall in-game decision making. Built with Streamlit, Python, and Tkinter.',
        media: [
            { file: 'streamlitapp.png', label: 'Streamlit App' },
            { file: 'tkinkterapp.png', label: 'Tkinter App' },
            { file: 'ui1.png', label: 'UI 1' },
            { file: 'ui3.png', label: 'UI 3' },
            { file: 'ui4.png', label: 'UI 4' },
            { file: 'ui6.png', label: 'UI 6' },
            { file: 'pres1.png', label: 'Presentation 1' },
            { file: 'pres2.png', label: 'Presentation 2' },
            { file: 'pres3.png', label: 'Presentation 3' },
            { file: 'pres4.png', label: 'Presentation 4' },
            { file: 'pres5.png', label: 'Presentation 5' },
            { file: 'pres6.png', label: 'Presentation 6' }
        ]
    },

    'codelab-ambassadors': {
        title: 'CodeLab 2.0 Ambassadors Form',
        date: 'Late December 2025',
        folder: 'CodeLab2.0 Ambassadors Form',
        logo: 'logo.png',
        tools: ['Firebase', 'Next.js', 'React'],
        status: 'deployed',
        statusLabel: 'Deployed',
        description: 'A form made to follow up the ambassadors of our hackathon. It was a solo project built with Firebase, Next.js, and React. It was perfectly executed and saw the light of deployment — helping us track ambassador engagement and activity.',
        media: [
            { file: 'Form.png', label: 'Form' },
            { file: 'confirmation.jpg', label: 'Confirmation Page' },
            { file: 'ambassRegClosed.jpg', label: 'Registration Closed' }
        ]
    },

    'codelab-registration': {
        title: 'CodeLab 2.0 Registration',
        date: 'January 2026',
        folder: 'CodeLab2.0 Registration',
        logo: 'logo.png',
        tools: ['Firebase', 'Next.js', 'React'],
        status: 'deployed',
        statusLabel: 'Deployed',
        liveUrl: 'https://hecfa.tn/codelab',
        description: 'Both the home page for our hackathon event and the registration form (now closed). It was made for participants to register for our hackathon and track their payments. Built with Firebase, Next.js, and React — perfectly executed and successfully deployed.',
        media: [
            { file: 'regOpen.jpg', label: 'Registration Open' },
            { file: 'form.jpg', label: 'Registration Form' },
            { file: 'RegClosed.jpg', label: 'Registration Closed' },
            { file: 'regclosed.png', label: 'Closed Notice' }
        ]
    },

    'codelab-dashboard': {
        title: 'CodeLab 2.0 Dashboard',
        date: 'Early January 2026',
        folder: 'CodeLab2.0 Dashboard',
        logo: 'logo.png',
        tools: ['Firebase', 'Next.js', 'React'],
        status: 'deployed',
        statusLabel: 'Deployed',
        description: 'A project made to follow up the progress of the participants in our hackathon and check for early issues to solve them. Built with Firebase, Next.js, and React — perfectly executed and successfully deployed. It gave us real-time visibility into participant activity.',
        media: [
            { file: 'ui1.png', label: 'Dashboard View 1' },
            { file: 'ui2.png', label: 'Dashboard View 2' }
        ]
    },

    'codelab-support': {
        title: 'CodeLab 2.0 Support System',
        date: 'Early February 2026',
        folder: 'CodeLab2.0 Participants Support system',
        logo: 'logo.png',
        tools: ['Firebase', 'Next.js', 'React'],
        status: 'deployed',
        statusLabel: 'Deployed',
        description: 'A reclamation platform made to ease the hackathon phase and manage participant requests. If help was needed, our team would receive the request and respond accordingly. Built with Firebase, Next.js, and React — perfectly executed and successfully deployed.',
        media: [
            { file: 'Capture d\'écran 2026-02-11 133616.png', label: 'Support UI 1' },
            { file: 'Capture d\'écran 2026-02-11 133716.png', label: 'Support UI 2' }
        ]
    },

    'codelab-scoring': {
        title: 'CodeLab 2.0 Scoring System',
        date: 'Early February 2026',
        folder: 'CodeLab2.0 Scoring system',
        logo: 'logo.png',
        tools: ['Firebase', 'Next.js', 'React'],
        status: 'deployed',
        statusLabel: 'Deployed',
        description: 'A project made to help our juries rate the participants\' work and take their notes. It ensured quality, equity, and eased the entire scoring process. Built with Firebase, Next.js, and React — perfectly executed and successfully deployed.',
        media: [
            { file: 'ui1.png', label: 'Scoring UI 1' },
            { file: 'ui2.png', label: 'Scoring UI 2' },
            { file: 'ui3.png', label: 'Scoring UI 3' },
            { file: 'ui4.png', label: 'Scoring UI 4' },
            { file: 'ui5.png', label: 'Scoring UI 5' }
        ]
    }
};

/* ══════════════════════════════════════════════════
   Load Project Based on URL Parameter
   ══════════════════════════════════════════════════ */

function getProjectId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function isVideo(filename) {
    return /\.(mp4|webm|ogg|mov)$/i.test(filename);
}

function loadProject() {
    const id = getProjectId();
    const project = projects[id];

    if (!project) {
        document.getElementById('projectTitle').textContent = 'Project Not Found';
        document.getElementById('projectDesc').textContent = 'The requested project could not be found.';
        return;
    }

    // Set page title
    document.title = project.title + ' — Project Details';

    // Hero
    const logoEl = document.getElementById('projectLogo');
    logoEl.src = 'projects/' + project.folder + '/' + project.logo;
    logoEl.alt = project.title;

    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectDate').textContent = project.date;

    // Tools
    const toolsContainer = document.getElementById('projectTools');
    project.tools.forEach(tool => {
        const tag = document.createElement('span');
        tag.className = 'tool-tag';
        tag.textContent = tool;
        toolsContainer.appendChild(tag);
    });

    // Description
    document.getElementById('projectDesc').textContent = project.description;

    // Status badge
    const statusEl = document.getElementById('projectStatus');
    statusEl.textContent = project.statusLabel;
    statusEl.classList.add(project.status);

    // Live URL button
    if (project.liveUrl) {
        const visitBtn = document.getElementById('visitBtn');
        visitBtn.href = project.liveUrl;
        visitBtn.textContent = 'Visit Live Website ↗';
        visitBtn.style.display = 'inline-block';
    }

    // Gallery
    const grid = document.getElementById('galleryGrid');
    if (project.media.length === 0) {
        document.getElementById('projectGallery').style.display = 'none';
        return;
    }

    project.media.forEach((item, index) => {
        const mediaPath = 'projects/' + project.folder + '/' + item.file;
        const card = document.createElement('div');
        card.className = 'gallery-item';
        card.setAttribute('data-index', index);

        if (isVideo(item.file)) {
            card.innerHTML = `
                <video src="${mediaPath}" muted preload="metadata"></video>
                <div class="gallery-item-label">${item.label}</div>
            `;
        } else {
            card.innerHTML = `
                <img src="${mediaPath}" alt="${item.label}" loading="lazy">
                <div class="gallery-item-label">${item.label}</div>
            `;
        }

        card.addEventListener('click', () => openLightbox(index));
        grid.appendChild(card);
    });
}

/* ══════════════════════════════════════════════════
   Lightbox
   ══════════════════════════════════════════════════ */

let currentLightboxIndex = 0;
let currentMedia = [];

function openLightbox(index) {
    const id = getProjectId();
    const project = projects[id];
    if (!project) return;

    currentMedia = project.media;
    currentLightboxIndex = index;

    renderLightboxContent();
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';

    // Stop any videos
    const video = document.querySelector('#lightboxContent video');
    if (video) video.pause();
}

function renderLightboxContent() {
    const id = getProjectId();
    const project = projects[id];
    const item = currentMedia[currentLightboxIndex];
    const mediaPath = 'projects/' + project.folder + '/' + item.file;
    const container = document.getElementById('lightboxContent');

    if (isVideo(item.file)) {
        container.innerHTML = `<video src="${mediaPath}" controls autoplay></video>`;
    } else {
        container.innerHTML = `<img src="${mediaPath}" alt="${item.label}">`;
    }
}

function nextSlide() {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentMedia.length;
    renderLightboxContent();
}

function prevSlide() {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentMedia.length) % currentMedia.length;
    renderLightboxContent();
}

// Event listeners
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxNext').addEventListener('click', nextSlide);
document.getElementById('lightboxPrev').addEventListener('click', prevSlide);

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
});

document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

/* ── Init ── */
loadProject();
