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
            <p class="card-text">O Curso de Designer de Sobrancelhas é um curso feito especialmente para você que deseja certificar-se e trabalhar na área de estética. Nesse curso você aprende não só as técnicas para executar um trabalho bem feito, também recebe dicas sobre o tratamento e cuidados ao cliente, assim, fidelizando e mantendo uma agenda sempre lotada. Clique no botão e descarregue gratuitamente nosso PDF do curso, preparado para você com todo o carinho.</p>
            <a href="cursos/CURSO-DESIGNER-DE-SOBRANCELHAS.pdf" class="btn btn-primary">Quero saber mais</a>
        </div>
    </div>
  
    <div class="card">

        <img src="images/estilismoUnhas.png" alt="Imagem do curso de Estilismo de Unhas de Cirleia Francisca, de vestido branco sobre fundo preto">
        
        <h5 class="card-title card-header">Estilista de Unhas</h5>
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-body-secondary">Liberte a sua criatividade!</h6>
            <p class="card-text">No Curso de Estilista de Unhas você vai descobrir que não é só de materiais é técnicas que se faz um ótimo trabalho. Entenda todos os preparos e combinações, solte a criatividade e surpreenda seus clientes. Saiba como ser uma profissional desejada, aprenda a gerar receita e transformar pessoas através da beleza. Quer saber mais? Clica no botão e descarrega nosso PDF gratuitamente.</p>
            <a href="cursos/ESTILISMO-DE-UNHAS.pdf" class="btn btn-primary">Quero saber mais</a>
        </div>
    </div>

    <div class="card">

        <img src="images/desenvolvimentoPessoal.png" alt="Imagem de Cirleia Francisca com fato rosa e camisola preta e texto estilizado a dizer Encante, dicas bonus para te ajudar a alavancar vendas">

        
        <h5 class="card-title card-header">Desenvolvimento Pessoal</h5>
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-body-secondary">O Bônus dos cursos</h6>
            <p class="card-text">Com quase vinte anos de experiência no ramo da estética a Cirleia Francisca desenvolveu metódos e uma forma toda especial de tratar os clientes, criando um ambiente sempre prazeiroso e relaxante. Essas dicas são todas bônus que você recebe ao longo do seu curso, afinal mais do que fazer um bom trabalho é preciso encantar e cativar o seu cliente.</p>
            <a href="#" class="btn btn-primary">Quero saber mais</a>
        </div>

    </div>

          
</div>
`;