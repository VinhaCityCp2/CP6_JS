import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaLivros } from '../components/ListaLivros';


export default function ExcluirLivro (){
            
    const { id } = useParams();
    const navigate = useNavigate();
          
    const recLivroListaByid = ListaLivros.filter((item) => item.id == id);
            
    const [livro] = useState({
        id: recLivroListaByid[0].id,
        nome: recLivroListaByid[0].nome,
        quantidade: recLivroListaByid[0].quantidade,
        valor: recLivroListaByid[0].valor,
    });
            
        const handleExclude = (event) => {
            event.preventDefault();
            let indice;
            ListaLivros.forEach((item, index) => {
            if (item.id == livro.id) {
                indice = index;
            }
            });
            ListaLivros.splice(indice, 1);
            navigate('/livros');
        };
          
        return (
            <section className='excluir_geral'>
              <div className='container'>
                <h1> Excluir Pedido </h1>

                <div>
                  <p> Nome: {livro.nome}  </p>
                  <p> Quantidade: {livro.quantidade} </p>
                  <p> Valor: {livro.valor} </p>
                </div>

                <div>
                  <button onClick={handleExclude}> EXCLUIR </button>
                  <button onClick={() => navigate('/livros')}> CANCELAR </button>
                </div>

              </div>
            </section>
          );
}
    