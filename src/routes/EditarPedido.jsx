import { useNavigate, useParams } from 'react-router-dom';
import { ListaPedidos } from '../components/ListaPedidos';
import { useState } from 'react';
import '../routes/EditarPedido.css';


export default function EditarPedido() {
  
    const { id } = useParams ();
    const navigate = useNavigate();

    const recPedidoListaByid = ListaPedidos.filter((item) => item.id == id);

    const[pedido, setPedido] =useState({
        id: recPedidoListaByid[0].id,
        nome: recPedidoListaByid[0].nome,
        quant: recPedidoListaByid[0].quant,
        valor: recPedidoListaByid[0].valor,
    });

    const handleSubmit = (event) =>{
        event.preventDefault();
        let indice;
        ListaPedidos.forEach((item, index) => {
            if (item.id == pedido.id) {
                indice = index;
            }
        });

        ListaPedidos.splice(indice, 1, pedido);
        navigate('/pedido');
    };

    const handleChange = (event) =>{
        const {name, value } = event.target;
        setPedido({...pedido, [name]: value});
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
              <input type="hidden" name="id" value={pedido.id} onChange={handleChange} />
            </div>
            
            <div>
              <label htmlFor="idNome"> Nome do Pedido </label>
              <input type="text" name="nome" id="idNome" value={pedido.nome} onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="idDesc"> Quantidade </label>
              <input type="text" name="quantidade" id="idDesc" value={pedido.quant} onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="idValor"> Valor </label>
              <input type="text" name="valor" id="idValor" value={pedido.valor} onChange={handleChange} />
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

