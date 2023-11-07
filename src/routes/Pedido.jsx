import { } from 'react';
import { Link } from 'react-router-dom';
import { GrFormEdit as EditarPedido } from 'react-icons/gr';
import { RiDeleteBin2Fill as ExcluirPedido } from 'react-icons/ri';
import { ListaPedidos } from '../components/ListaPedidos';
import '../routes/Pedido.css';


export default function Pedido(){

    return(
        <>
          <section className='pedidos_geral'>
              <h1> Lista de Pedidos </h1>
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
                  {ListaPedidos.map((item,indice) =>(
                    <tr key={indice}>
                      <td>{item.id}</td>
                      <td>{item.nome}</td>
                      <td>{item.quantidade}</td>
                      <td>{item.valor}</td>
                      <td>
                        {' '}
                                              
                        <Link to={`/editar/pedido/${item.id}`}>
                          <EditarPedido />
                        </Link>{' '}


                        <Link to={`/excluir/pedido/${item.id}`}>
                          <ExcluirPedido />
                        </Link>{' '}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className='Inserir_pedido'>
                  <Link to="/inserirpedido">
                      <button> Cadastrar Novo Pedido </button>
                  </Link> 
              </div>
          </section>
        </>
    )
}