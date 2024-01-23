const comments = document.querySelector(".comments");

comments.innerHTML = `
<div class="comments-title">
            <h2>Feedbacks</h2>
          </div>
          <div class="comments-body">
            <div class="card" style="width: 10rem;">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="card-img-top">
                <circle cx="50" cy="50" r="2rem" />
              </svg>
              
              <div class="card-body">
                <h5 class="card-title">Ana Fernandes</h5>
                <p class="card-text">"Uma experiência fantástica"</p>
              </div>
            </div>
  
            <div class="card" style="width: 10rem;">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="card-img-top">
                <circle cx="50" cy="50" r="2rem" />
              </svg>
              
              <div class="card-body">
                <h5 class="card-title">Julia Fontes</h5>
                <p class="card-text">"O resultado sempre encanta"</p>
              </div>
            </div>
  
            <div class="card" style="width: 10rem;">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="card-img-top">
                <circle cx="50" cy="50" r="2rem" />
              </svg>
              
              <div class="card-body">
                <h5 class="card-title">Giovanna Junqueira</h5>
                <p class="card-text">"A melhor de Famalicão"</p>
              </div>
            </div>
  
            <div class="card" style="width: 10rem;">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="card-img-top">
                <circle cx="50" cy="50" r="2rem" />
              </svg>
              
              <div class="card-body">
                <h5 class="card-title">Patricia Nunes</h5>
                <p class="card-text">"Super recomendo"</p>
              </div>

          </div>
         
          </div>
`