export function initThemeToggle() {
  const darklightBtn = document.getElementById('darkLight');
  if (!darklightBtn) return; 

  const icon = darklightBtn.querySelector('i');
  if (!icon) return;

  const savedTheme = localStorage.getItem('theme');
  let setDark = savedTheme !== 'light';

  // Apply saved theme
  if (setDark) {
    toggleDarkModeBtn();
    icon.classList.add('fa-sun-o');
  } else {
    toggleLightModeBtn();
    icon.classList.add('fa-moon-o');
  }

  darklightBtn.addEventListener('click', () => {
    if (setDark) {
      toggleLightModeBtn();
      icon.classList.remove('fa-sun-o');
      icon.classList.add('fa-moon-o');
      localStorage.setItem('theme', 'light');
      setDark = false;
    } else {
      toggleDarkModeBtn();
      icon.classList.remove('fa-moon-o');
      icon.classList.add('fa-sun-o');
      localStorage.setItem('theme', 'dark');
      setDark = true;
    }
  });

  // =========================
  // Light mode
  // =========================
 function toggleLightModeBtn() {
    document.body.style.backgroundColor = '#f5f5f5';

    // Header
    const topH1 = document.querySelector<HTMLElement>('.top-h1');
    if (topH1) topH1.style.color = '#ccd6f6';

    const cardPicInf = document.querySelector<HTMLElement>('.cardPicInf');
    if (cardPicInf) {
      cardPicInf.style.color = '#99ebeb';

      const spans = cardPicInf.querySelectorAll<HTMLElement>('span');
      spans.forEach(span => {
        span.style.color = '#99ebeb';
      });
    }

    // About section
    const aboutMyself = document.querySelector<HTMLElement>('.about-myself');
    if (aboutMyself) aboutMyself.style.color = '#0A192F';

    const heading = document.querySelector<HTMLElement>('.heading');
    if (heading) heading.style.color = '#0A192F';

    const pAbout = document.querySelector<HTMLElement>('.p-about');
    if (pAbout) pAbout.style.color = '#2d3748';

    // Skills
    const myOwnSkills = document.querySelector<HTMLElement>('.my_own_skills');
    if (myOwnSkills) myOwnSkills.style.color = '#1a1a1a';

    const hSkills = document.querySelector<HTMLElement>('.h-skills');
    if (hSkills) hSkills.style.color = '#0A192F';

    const program = document.querySelector<HTMLElement>('.program');
    if (program) program.style.color = '#0A192F';

    const programB = document.querySelector<HTMLElement>('.programB');
    if (programB) programB.style.color = '#0A192F';

    // Projects
    const s2Projects = document.querySelector<HTMLElement>('.s2-projects');
    if (s2Projects) s2Projects.style.color = '#0A192F';

    const hProjects = document.querySelector<HTMLElement>('.h-projects');
    if (hProjects) hProjects.style.color = '#0A192F';

    const projects = document.querySelectorAll<HTMLElement>('.project');
    projects.forEach(project => {
      project.style.backgroundColor = '#e8e8e8';
    });

    const cHeaders = document.querySelectorAll<HTMLElement>('.c-header');
    cHeaders.forEach(header => {
      header.style.color = '#0A192F';
    });

    const cPtags = document.querySelectorAll<HTMLElement>('.c-ptag');
    cPtags.forEach(ptag => {
      ptag.style.color = '#1a1a1a';
    });

    // Footer
    const contacts = document.querySelector<HTMLElement>('.contacts');
    if (contacts) contacts.style.color = '#0A192F';

    const fposUl = document.querySelector<HTMLElement>('.fpos-ul');
    if (fposUl) fposUl.style.borderColor = '#2d3748';

    const fotA = document.querySelectorAll<HTMLElement>('.fot-a');
    fotA.forEach(link => {
      link.style.background = 'linear-gradient(#0A192F, #2d3748)';
      link.style.webkitBackgroundClip = 'text';
      link.style.backgroundClip = 'text';
      link.style.webkitTextFillColor = 'transparent';
    });
  }

  // =========================
  // DARK MODE
  // =========================
  function toggleDarkModeBtn() {
    document.body.style.backgroundColor = '#0A192F';

    // Header
    const topH1 = document.querySelector<HTMLElement>('.top-h1');
    if (topH1) topH1.style.color = '#ccd6f6';

    const cardPicInf = document.querySelector<HTMLElement>('.cardPicInf');
    if (cardPicInf) cardPicInf.style.color = '#99ebeb';

    // About section
    const aboutMyself = document.querySelector<HTMLElement>('.about-myself');
    if (aboutMyself) aboutMyself.style.color = '#5ceaca';

    const heading = document.querySelector<HTMLElement>('.heading');
    if (heading) heading.style.color = '#5ceaca';

    const pAbout = document.querySelector<HTMLElement>('.p-about');
    if (pAbout) pAbout.style.color = '#8892b0';

    // Skills
    const myOwnSkills = document.querySelector<HTMLElement>('.my_own_skills');
    if (myOwnSkills) myOwnSkills.style.color = '#ccd6f6';

    const hSkills = document.querySelector<HTMLElement>('.h-skills');
    if (hSkills) hSkills.style.color = '#5ceaca';

    const program = document.querySelector<HTMLElement>('.program');
    if (program) program.style.color = '#ccd6f6';

    const programB = document.querySelector<HTMLElement>('.programB');
    if (programB) programB.style.color = '#ccd6f6';

    // Projects
    const s2Projects = document.querySelector<HTMLElement>('.s2-projects');
    if (s2Projects) s2Projects.style.color = '#5ceaca';

    const hProjects = document.querySelector<HTMLElement>('.h-projects');
    if (hProjects) hProjects.style.color = '#5ceaca';

    const projects = document.querySelectorAll<HTMLElement>('.project');
    projects.forEach(project => {
      project.style.backgroundColor = '';
    });

    const cHeaders = document.querySelectorAll<HTMLElement>('.c-header');
    cHeaders.forEach(header => {
      header.style.color = '#ccd6f6';
    });

    const cPtags = document.querySelectorAll<HTMLElement>('.c-ptag');
    cPtags.forEach(ptag => {
      ptag.style.color = '#ccd6f6';
    });

    // Footer
    const contacts = document.querySelector<HTMLElement>('.contacts');
    if (contacts) contacts.style.color = '#5ceaca';

    const fposUl = document.querySelector<HTMLElement>('.fpos-ul');
    if (fposUl) fposUl.style.borderColor = '#8892b0';

    const fotA = document.querySelectorAll<HTMLElement>('.fot-a');
    fotA.forEach(link => {
      link.style.background =
        'linear-gradient(rgb(227, 242, 241), rgb(146, 255, 177))';
      link.style.webkitBackgroundClip = 'text';
      link.style.backgroundClip = 'text';
      link.style.webkitTextFillColor = 'transparent';
    });
  }
}

