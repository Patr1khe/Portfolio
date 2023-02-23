import '/src/css/style.css'
// import quizImg from "/src/images/m_gquiz.png"
// import bortakvallImg from "/../src/images/m_bortakvallgrupp.png"

const myoSkillsEl = document.querySelector('#myoSkills') as HTMLElement
const s2ProjectsEl = document.querySelector('#s2Projects') as HTMLElement

const s2ProjectsSection = (() => {
    s2ProjectsEl.innerHTML += ` 
    <h2 class="h-projects text-center">Projects</h2>
    <div class="assignments col-12">
      <div class="project card col-6 bg-dark">
        <h3 class="c-header text-center">Quiz</h3>
        <img src="/src/images/m_gquiz.png" alt="My Quiz">
        <h4 class="c-header text-center">Project</h4>
        <p class="c-ptag text-center">Members: 1</p>
        <button class="s2-button"><a href="https://rad-crostata-6bd455.netlify.app/" target="_blank" class="s2-button-a">Visit Website</a></button>
        <button class="s2-button"><a href="https://github.com/Patr1khe/D-Quiz" target="_blank" class="s2-button-a">Visist Github</a></button>
      </div>
      <div class="project card col-6 bg-dark">
        <h3 class="c-header text-center">Bortakväll</h3>
        <img src="/src/images/m_bortakvallgrupp.png" alt="Made by my group">
        <h4 class="c-header text-center">Group project</h4>
        <p class="c-ptag text-center">Members: 3</p>
        <button class="s2-button"><a href="https://gentle-dusk-abe4a9.netlify.app/" target="_blank" class="s2-button-a">Visit Website</a></button>
        <button class="s2-button"><a href="https://github.com/Patr1khe/javascript-grupparbete" target="_blank" class="s2-button-a">Visist Github</a></button>
      </div>
    </div>`
})

const mySkillsSection = (() => {
    myoSkillsEl.innerHTML += `<h2 class="h-skills text-center">Skills</h2>
    <div class="flexrowF_B justify-content-center col-12 text-center">
      <div class="iconsF col-6 ">
        <h3 class="program">Front End</h3>
          <div class="card-name col-6 m-3 mt-5">
            <p>HTML</p>
          </div>
          <div class="card-name col-6 m-3 mt-5">
            <p>CSS</p>
          </div>
          <div class="card-name col-6 m-3 mt-5">
            <p>SASS</p>
          </div>
          <div class="card-name col-6 m-3 mt-5">
            <p>Bootstrap</p>
          </div>
          <div class="card-name col-6 m-3 mt-5">
            <p>JavaScript</p>
          </div>
          <div class="card-name col-6 m-3 mt-5">
            <p>TypeScript</p>
          </div>
      </div>
      <div class="iconsB col-6">
          <h3 class="programB">Back End <br> <span class="bg-warning">(in progress)</span></h3>
            <div class="card-name col-6 m-5 mt-5">
              <p>NODE Basic</p>
            </div>
            <div class="card-name col-6 m-5 mt-5">
              <p>Express</p>
            </div>
            <div class="card-name col-6 m-5 mt-5">
              <p>SQL</p>
            </div>
            <div class="card-name col-6 m-5 mt-5">
              <p>CRUD</p>
            </div>
            <div class="card-name col-6 m-5 mt-5">
              <p>ORM</p>
            </div>
            <div class="card-name col-6 m-5 mt-5">
              <p>MVC</p>
            </div>
            <div class="card-name col-6 m-5 mt-5">
              <p>Validation</p>
            </div>
            <div class="card-name col-6 m-5 mt-5">
              <p>API Basic Authentication</p>
            </div>
            <div class="card-name col-6 m-5 mt-5">
              <p>API JSON WEB TOKEN Authentication</p>
            </div>
      </div>
    </div>`
})
mySkillsSection()
s2ProjectsSection()