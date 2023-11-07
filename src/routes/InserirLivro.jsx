import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListaLivros } from '../components/ListaLivros';
import '../routes/InserirLivro.css';

export default function InserirLivro(){
    
        const navigate = useNavigate();

        let novoId= ListaLivros[ListaLivros.length - 1].id + 1;

        const [livro, setLivro] = useState({
            id:novoId,
            nome: '',
            quantidade: '',
            valor: '',
        });

        const handleSubmit = (e) => {

            e.preventDefault();

            ListaLivros.push(livro);
            navigate('/livros');
        };

        const handleChange = (e) => {
            e.preventDefault();

            const{ name, value } = e.target;

            setLivro({ ...livro, [name]: value });
        };
     
    return(
        <>
            <section className="sessao">
                <h1> Inserir Livro </h1>
                <form onSubmit={handleSubmit}>
                    <fieldset>          
                        <p className="formulario">
                            <label htmlFor="idNome" id="nome"> Nome do Livro </label>
                            <input type="text" name="nome" id="idNome" value={livro.nome} onChange={handleChange} />
                        </p>

                        <p className="formulario">
                            <label htmlFor="idDesc" id="descricao"> Quantidade </label>
                            <input type="text" name="quantidade" id="idDesc" value={livro.quantidade} onChange={handleChange} />
                        </p>

                        <p className="formulario">
                            <label htmlFor="idValor" id="valores"> Valor </label>
                            <input type="text" name="valor" id="idValor" value={livro.valor} onChange={handleChange} />
                        </p>
                        <p className="cadastrar">
                            <button type="submit"> Cadastrar </button>
                        </p>
                    </fieldset>
                </form>
            </section>
        </>
    );
}