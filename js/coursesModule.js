const courses = document.querySelector(".courses");

courses.innerHTML = `
<div class="courses-title">
    <h2>Cursos</h2>
 </div>
<div class="courses-body">

    <div class="card">

        <img src="images/designerSobrancelhas.png" alt="Imagem do Curso de designer de sobrancelhas de Cirleia Francisca">
        
        <h5 class="card-title card-header">Designer de sobrancelhas</h5>
        
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-body-secondary">Conquiste a sua liberdade financeira</h6>
            <p class="card-text">O curso de designer de sobrancelhas é um curso feito especialmente para você que deseja aprender e trabalhar na área de estética. Nesse curso você aprende não só as técnicas para executar um trabalho bem feito, também recebe dicas sobre o tratamento e cuidados ao cliente, assim, fidelizando e mantendo uma agenda sempre lotada.</p>
            <a href="cursos/CURSO-DESIGNER-DE-SOBRANCELHAS.pdf" class="btn btn-primary">Quero saber mais</a>
        </div>
    </div>
  
    <div class="card">

        <img src="images/estilismoUnhas.png" alt="Imagem do curso de Estilismo de Unhas de Cirleia Francisca, de vestido branco sobre fundo preto">
        
        <h5 class="card-title card-header">Estilista de Unhas</h5>
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-body-secondary">Liberte a sua criatividade!</h6>
            <p class="card-text">No Curso de Estilista de Unhas você vai descobrir que não é só de materiais é técnicas que se faz um ótimo trabalho. Aprenda todos os preparos e combinações, solte a criatividade e cative suas clientes. Aprenda como ser uma profissional desejada, aprenda a gerar receita e transformar pessoas através da beleza. Quer saber mais? Clica no botão.</p>
            <a href="cursos/ESTILISMO-DE-UNHAS.pdf" class="btn btn-primary">Quero saber mais</a>
        </div>
    </div>

    <div class="card">

        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>

        
        <h5 class="card-title card-header">Experiência do Cliente</h5>
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-body-secondary">O Bônus dos cursos</h6>
            <p class="card-text">Este módulo está presente em todos os cursos da Cirleia Francisca que de maneira leve e descontraída vai te passar todas as dicas e aquele sentimento de captar a vontade de seus clientes, de entender e interagir, cativar e vender exatamente o que o cliente necessita, gerando receita para o seu negócio atráves da empatia e do cuidado personalizado. Venha transformar a auto estima e sentimentos de teus clientes. Clica no botão e saiba mais.</p>
            <a href="#" class="btn btn-primary">Quero saber mais</a>
        </div>

    </div>

          
</div>
`;