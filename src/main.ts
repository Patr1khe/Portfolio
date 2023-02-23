import '/src/css/style.css'

const myoSkillsEl = document.querySelector('#myoSkills') as HTMLElement

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