import {} from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Nav.css';


export default function Nav (){

    const navigate= useNavigate();

    const handleLogout= async()=>{
        sessionStorage.removeItem('userData');
        sessionStorage.removeItem('senhaData');
        alert('Saindo da sessão');
        navigate('/');
    }
    
    return(
        <>
            <header>
                <div className='logo'>
                    <h1> CodeBookstore </h1>
                </div>                   
                             
                <div className='menu_nav'>
                    <ul>
                        <li> <Link to='home' className='rotas'> Home </Link> </li>
                        <li> <Link to='livros' className='rotas'> Livros </Link> </li>
                        <li> <Link to='sobre' className='rotas'> Sobre </Link> </li>
                        <li> <Link to='login' className='rotas'> Login </Link> </li>
                        <li> <button onClick={handleLogout}> Logout </button> </li>
                    </ul>                                           
                </div>
            </header>
        </>
    )
}