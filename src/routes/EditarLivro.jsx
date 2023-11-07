import { useNavigate, useParams } from 'react-router-dom';
import { ListaLivros } from '../components/ListaLivros';
import { useState } from 'react';


export default function EditarLivro() {
  
    const { id } = useParams ();
    const navigate = useNavigate();

    const recLivroListaByid = ListaLivros.filter((item) => item.id == id);

    const[livro, setLivro] = useState({
        id: recLivroListaByid[0].id,
        nome: recLivroListaByid[0].nome,
        quantidade: recLivroListaByid[0].quantidade,
        valor: recLivroListaByid[0].valor,
    });

    const handleSubmit = (event) =>{
        event.preventDefault();
        let indice;
        ListaLivros.forEach((item, index) => {
            if (item.id == livro.id) {
                indice = index;
            }
        });

        ListaLivros.splice(indice, 1, livro);
        navigate('/livros');
    };

    const handleChange = (event) =>{
        const {name, value } = event.target;
        setLivro({...livro, [name]: value});
    };


  return (
    <section className='editar_geral'>
      <div className='titulo_editar'>
        <h1> EDITAR PEDIDOS </h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend> PEDIDO SELECIONADO </legend>

            <div>
              <input type="hidden" name="id" value={livro.id} onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="idNome"> Nome: </label>
              <input type="text" name="nome" id="idNome" value={livro.nome} onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="idDesc"> Quantidade: </label>
              <input type="text" name="quantidade" id="idDesc" value={livro.quantidade} onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="idValor"> Valor: </label>
              <input type="text" name="valor" id="idValor" value={livro.valor} onChange={handleChange} />
            </div>

            <div className='botao_editar'>
              <button type="subtmit"> EDITAR </button>
            </div>

          </fieldset>
        </form>
      </div>
  </section>
  );
}

