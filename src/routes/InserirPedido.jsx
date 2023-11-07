import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListaPedidos } from "../components/ListaPedidos";
import '../routes/InserirPedido.css';


export default function InserirPedido(){

        /* Montagem do 'Inserir Pedido' */
    
        const navigate = useNavigate();

        let novoId= ListaPedidos[ListaPedidos.length - 1].id + 1;

        const [pedido, setPedido] = useState({
            id:novoId,
            nome: '',
            quantidade: '',
            valor: '',
        });

        const handleSubmit = (e) => {

            e.preventDefault();

            ListaPedidos.push(pedido);
            navigate('/pedido');
        };

        const handleChange = (e) => {
            e.preventDefault();

            const{ name, value } = e.target;

            setPedido({ ...pedido, [name]: value });
        };

    return(
        <>
            <section className="sessao_pedido">
                <h1> Inserir Pedidos </h1>
                <form onSubmit={handleSubmit}>
                    <fieldset>          
                        <p>
                            <label htmlFor="idNome" id="nome"> Nome do Pedido </label>
                            <input type="text" name="nome" id="idNome" value={pedido.nome} onChange={handleChange} />
                        </p>

                        <p>
                            <label htmlFor="idDesc" id="descricao"> Quantidade do Pedido </label> 
                            <input type="text" name="quantidade" id="idDesc" value={pedido.quantidade} onChange={handleChange} />
                        </p>

                        <p>
                            <label htmlFor="idValor" id="valores"> Valor do Pedido </label> 
                            <input type="text" name="valor" id="idValor" value={pedido.valor} onChange={handleChange} />
                        </p>

                        <p className="button_cadastrar">
                            <button type="submit"> Cadastrar </button>    
                        </p>
                    </fieldset>
                </form>
            </section>
        </>
    );
}