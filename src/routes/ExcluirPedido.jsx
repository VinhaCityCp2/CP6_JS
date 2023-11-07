import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaPedidos } from '../components/ListaPedidos';
import './ExcluirPedido.css'


export default function ExcluirPedido (){
            
    const { id } = useParams();
    const navigate = useNavigate();
          
    const recPedidoListaByid = ListaPedidos.filter((item) => item.id == id);
            
    const [pedido] = useState({
        id: recPedidoListaByid[0].id,
        nome: recPedidoListaByid[0].nome,
        quantidade: recPedidoListaByid[0].quantidade,
        valor: recPedidoListaByid[0].valor,
    });
            
        const handleExclude = (event) => {
            event.preventDefault();
            let indice;
            ListaPedidos.forEach((item, index) => {
            if (item.id == pedido.id) {
                indice = index;
            }
            });
            ListaPedidos.splice(indice, 1);
            navigate('/pedido');
        };
          
        return (
            <section className='excluir_geral'>
              <div className='container'>
                <h1> Excluir Pedido </h1>
                <div>
                  <p>Nome : {pedido.nome}</p>
                  <p>Quantidade : {pedido.quantidade}</p>
                  <p>Valor : {pedido.valor}</p>
                </div>

                <div className='botoes'>
                  <button onClick={handleExclude}> EXCLUIR </button>
                  
                  <button onClick={() => navigate('/pedido')}> CANCELAR </button>
                </div>
              </div>
            </section>
          );
}
    