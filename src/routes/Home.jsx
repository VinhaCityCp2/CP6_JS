import {} from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";

export default function Home() {
  
  
  return (
    <>
      <main>
        <h1 className='titulo_home'> Código & Conhecimento: Seu Portal para os Livros de Programação Essenciais! </h1>

        <div className='carrossel'> 
          <div id="carouselExampleIndicators" className="carousel slide">

            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="src\assets\img1.png" className="d-block w-100" alt="img1" />
              </div>

              <div className="carousel-item">
                <img src="src\assets\img2.jpg" className="d-block w-100" alt="img2" />
              </div>

              <div className="carousel-item">
                <img src="src\assets\img4.jpg" className="d-block w-100" alt="img3" />
              </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden"> Previous </span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden"> Next </span>
            </button>

          </div>
        </div>
        

        <div className='paragrafo_home'>
          <p className='texto'>
          Bem-vindo ao nosso universo de conhecimento em programação! Na CodeBookstore, estamos comprometidos em oferecer a você uma seleção abrangente de livros que irão aprofundar seus conhecimentos e ampliar suas habilidades na arte da programação. Seja você um iniciante em busca de aprender as bases ou um desenvolvedor experiente em busca de aprimoramento, você encontrará uma variedade de títulos abrangendo linguagens, frameworks e tópicos diversos. Explore nossa coleção de livros cuidadosamente selecionados e embarque em uma jornada de aprendizado que o levará a novos patamares em sua carreira de programador. Comece sua busca agora e mergulhe no mundo fascinante da programação!
          </p>
        </div>

        <section>
          <h2 className='titulo'> Confira nossos livros </h2>
          <div className='card_superior'>

            <div className="card" style={{ width: '14rem' }}>
              <img src="src\assets\livro1.png" className="card-img-top" alt="Livro1" />
              <div className="card-body">
                <h2> Python </h2>
                <p className="card-text"> Este livro é orientado ao iniciante em programação. Os conceitos básicos de programação, como expressões, variáveis, repetições, decisões, listas, dicionários, conjuntos, funções, arquivos, classes, objetos e banco de dados. </p>
                <h4> R$60,50 </h4>
              </div>
            </div>

            <div className="card" style={{ width: '14rem' }}>
              <img src="src\assets\livro2.PNG" className="card-img-top" alt="Livro2" />
              <div className="card-body">
                <h2> Python </h2>
                <p className="card-text"> Este livro é o guia de programação Python mais vendido do mundo. Com essa introdução rápida e abrangente, você será capaz de escrever, programar, solucionar problemas e desenvolver aplicações que funcionam num piscar de olhos. </p>
                <h4> R$150,00 </h4>
              </div>
            </div>

            <div className="card" style={{ width: '14rem' }}>
              <img src="src\assets\livro3.jpg" className="card-img-top" alt="Livro3" />
              <div className="card-body">
                <h2> Python </h2>
                <p className="card-text"> Com este livro você aprenderá a usar o Python para criar programas que farão em minutos o que exigiria horas para ser feito manualmente – sem que seja necessário ter qualquer experiência anterior com programação. </p>
                <h4> R$180,00 </h4>
              </div>
            </div>
          </div>

          <div className='card_inferior'>   
              <div className="card" style={{ width: '14rem' }}> 
              <img src="src\assets\livro4.jpg" className="card-img-top" alt="Livro4" />
              <div className="card-body">
                <h2> Linguagem C </h2>
                <p className="card-text"> Este livro oferece conteúdo abrangente e plenamente compatível para ser utilizado como material didático em disciplinas introdutórias de programação. </p>
                <h4 className='LinguagemC1'> R$60,00 </h4>
              </div>
            </div>

            <div className="card" style={{ width: '14rem' }}>
              <img src="src\assets\livro5.PNG" className="card-img-top" alt="Livro5" />
              <div className="card-body">
                <h2> Linguagem C </h2>
                <p className="card-text"> O livro "Curso Básico da Linguagem C" serve de guia para utilizar a linguagem C, ao mesmo tempo que desenvolve conceitos básicos de algoritmos e de programação. </p>
                <h4> R$75,00 </h4>
              </div>
            </div>

            <div className="card" style={{ width: '14rem' }}>
              <img src="src\assets\livro6.PNG" className="card-img-top" alt="Livro6" />
              <div className="card-body">
                <h2> Linguagem C </h2>
                <p className="card-text"> Esta obra cobre, de forma didática, a totalidade da Linguagem C, desde os aspectos mais básicos até os aspectos mais avançados. </p>
                <h4 className='LinguagemC3'>R$260,00 </h4>
              </div>
            </div>
            
          </div>
        </section>     
      </main>  
    </>
  );
}
