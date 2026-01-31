// @ts-nocheck
export function initThemeToggle() {
  const darklightBtn = document.getElementById('darkLight') as HTMLButtonElement;
  const icon = darklightBtn.querySelector('i') as HTMLElement;

  const savedTheme = localStorage.getItem('theme');
  let isDark = savedTheme === 'light' ? false : true;

  // Applicera sparat tema
  if (!isDark) {
    applyLightMode();
    icon.classList.add('fa-moon-o');
  } else {
    applyDarkMode();
    icon.classList.add('fa-sun-o');
  }

  darklightBtn.addEventListener('click', () => {
    if (isDark) {
      // Byt till ljust läge
      applyLightMode();
      icon.classList.remove('fa-sun-o');
      icon.classList.add('fa-moon-o');
      localStorage.setItem('theme', 'light');
      isDark = false;
    } else {
      // Byt till mörkt läge
      applyDarkMode();
      icon.classList.remove('fa-moon-o');
      icon.classList.add('fa-sun-o');
      localStorage.setItem('theme', 'dark');
      isDark = true;
    }
  });

  function applyLightMode() {
    document.body.style.backgroundColor = '#f5f5f5';
    
    // Header
    const topH1 = document.querySelector('.top-h1') as HTMLElement;
    if (topH1) topH1.style.color = '#ccd6f6';

    const cardPicInf = document.querySelector('.cardPicInf') as HTMLElement;
    if (cardPicInf) {
      cardPicInf.style.color = '#99ebeb';
      // Återställ span-elementen till original
      const spans = cardPicInf.querySelectorAll('span');
      spans.forEach(span => {
        (span as HTMLElement).style.color = '#99ebeb';
      });
    }
    
    // About section
    const aboutMyself = document.querySelector('.about-myself') as HTMLElement;
    if (aboutMyself) aboutMyself.style.color = '#0A192F';
    
    const heading = document.querySelector('.heading') as HTMLElement;
    if (heading) heading.style.color = '#0A192F';
    
    const pAbout = document.querySelector('.p-about') as HTMLElement;
    if (pAbout) pAbout.style.color = '#2d3748';
    
    // Skills section
    const myOwnSkills = document.querySelector('.my_own_skills') as HTMLElement;
    if (myOwnSkills) myOwnSkills.style.color = '#1a1a1a';
    
    const hSkills = document.querySelector('.h-skills') as HTMLElement;
    if (hSkills) hSkills.style.color = '#0A192F';
    
    const program = document.querySelector('.program') as HTMLElement;
    if (program) program.style.color = '#0A192F';
    
    const programB = document.querySelector('.programB') as HTMLElement;
    if (programB) programB.style.color = '#0A192F';
    
    // Projects section
    const s2Projects = document.querySelector('.s2-projects') as HTMLElement;
    if (s2Projects) s2Projects.style.color = '#0A192F';
    
    const hProjects = document.querySelector('.h-projects') as HTMLElement;
    if (hProjects) hProjects.style.color = '#0A192F';
    
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
      (project as HTMLElement).style.backgroundColor = '#e8e8e8';
    });
    
    const cHeaders = document.querySelectorAll('.c-header');
    cHeaders.forEach(header => {
      (header as HTMLElement).style.color = '#0A192F';
    });
    
    const cPtags = document.querySelectorAll('.c-ptag');
    cPtags.forEach(ptag => {
      (ptag as HTMLElement).style.color = '#1a1a1a';
    });
    
    // Footer section
    const contacts = document.querySelector('.contacts') as HTMLElement;
    if (contacts) contacts.style.color = '#0A192F';
    
    const fposUl = document.querySelector('.fpos-ul') as HTMLElement;
    if (fposUl) fposUl.style.borderColor = '#2d3748';
    
    // Footer links
    const fotA = document.querySelectorAll('.fot-a');
    fotA.forEach(link => {
      (link as HTMLElement).style.background = 'linear-gradient(#0A192F, #2d3748)';
      (link as HTMLElement).style.webkitBackgroundClip = 'text';
      (link as HTMLElement).style.backgroundClip = 'text';
      (link as HTMLElement).style.webkitTextFillColor = 'transparent';
    });
  }

  function applyDarkMode() {
    document.body.style.backgroundColor = '#0A192F';
    
    // Header
    const topH1 = document.querySelector('.top-h1') as HTMLElement;
    if (topH1) topH1.style.color = '#ccd6f6';
    
    const cardPicInf = document.querySelector('.cardPicInf') as HTMLElement;
    if (cardPicInf) cardPicInf.style.color = '#99ebeb';
    
    // About section
    const aboutMyself = document.querySelector('.about-myself') as HTMLElement;
    if (aboutMyself) aboutMyself.style.color = '#5ceaca';
    
    const heading = document.querySelector('.heading') as HTMLElement;
    if (heading) heading.style.color = '#5ceaca';
    
    const pAbout = document.querySelector('.p-about') as HTMLElement;
    if (pAbout) pAbout.style.color = '#8892b0';
    
    // Skills section
    const myOwnSkills = document.querySelector('.my_own_skills') as HTMLElement;
    if (myOwnSkills) myOwnSkills.style.color = '#ccd6f6';
    
    const hSkills = document.querySelector('.h-skills') as HTMLElement;
    if (hSkills) hSkills.style.color = '#5ceaca';
    
    const program = document.querySelector('.program') as HTMLElement;
    if (program) program.style.color = '#ccd6f6';
    
    const programB = document.querySelector('.programB') as HTMLElement;
    if (programB) programB.style.color = '#ccd6f6';
    
    // Projects section
    const s2Projects = document.querySelector('.s2-projects') as HTMLElement;
    if (s2Projects) s2Projects.style.color = '#5ceaca';
    
    const hProjects = document.querySelector('.h-projects') as HTMLElement;
    if (hProjects) hProjects.style.color = '#5ceaca';
    
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
      (project as HTMLElement).style.backgroundColor = '';
    });
    
    const cHeaders = document.querySelectorAll('.c-header');
    cHeaders.forEach(header => {
      (header as HTMLElement).style.color = '#ccd6f6';
    });
    
    const cPtags = document.querySelectorAll('.c-ptag');
    cPtags.forEach(ptag => {
      (ptag as HTMLElement).style.color = '#ccd6f6';
    });
    
    // Footer section
    const contacts = document.querySelector('.contacts') as HTMLElement;
    if (contacts) contacts.style.color = '#5ceaca';
    
    const fposUl = document.querySelector('.fpos-ul') as HTMLElement;
    if (fposUl) fposUl.style.borderColor = '#8892b0';
    
    // Footer links - återställ till original
    const fotA = document.querySelectorAll('.fot-a');
    fotA.forEach(link => {
      (link as HTMLElement).style.background = 'linear-gradient(rgb(227, 242, 241), rgb(146, 255, 177))';
      (link as HTMLElement).style.webkitBackgroundClip = 'text';
      (link as HTMLElement).style.backgroundClip = 'text';
      (link as HTMLElement).style.webkitTextFillColor = 'transparent';
    });
  }
}