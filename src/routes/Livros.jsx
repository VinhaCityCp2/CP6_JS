import { } from 'react';
import { Link } from 'react-router-dom';
import { GrFormEdit as EditarLivro } from 'react-icons/gr';
import { RiDeleteBin2Fill as ExcluirLivro } from 'react-icons/ri';
import { ListaLivros } from '../components/ListaLivros';
import '../routes/Livro.css';


export default function Livros (){
    return(
        <>
        <section className='pedidos_geral'>
            <h1> Lista de Livros </h1>
            <table>
              <thead>
                <tr>
                  <th className="titulos"> ID </th>
                  <th className="titulos"> Nome </th>
                  <th className="titulos"> Quantidade </th>
                  <th className="titulos"> Valor </th>
                  <th className="titulos"> Editar/Excluir </th>
                </tr>
              </thead>
              <tbody>
                {ListaLivros.map((item,indice) =>(
                  <tr key={indice}>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>{item.quantidade}</td>
                    <td>{item.valor}</td>
                    <td>
                      {' '}
                                            
                      <Link to={`/editar/livro/${item.id}`}>
                        <EditarLivro />
                      </Link>{' '}


                      <Link to={`/excluir/livro/${item.id}`}>
                        <ExcluirLivro />
                      </Link>{' '}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='Inserir_pedido'>
                <Link to="/inserirlivro">
                    <button> Cadastrar Novo Livro </button>
                </Link>
            </div>
      </section>
        
        </>
    )
}