import {} from 'react';
import { AiOutlineMail, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css'

export default function Footer (){

    return(
        <>
        <section className='footer_geral'>
            <div className='icon'>
                <div className='icones'>   
                    <a href="" target='blank'> <AiOutlineMail/> </a>
                </div>

                <div className='icones'>   
                    <a href="https://www.linkedin.com/in/guilherme-fazito-5a3288277/" target='blank'> <FaLinkedin/> </a>
                </div>

                <div className='icones'>
                    <a href="https://www.facebook.com/?locale=pt_BR" target='blank'> <AiFillFacebook/> </a>
                </div>

                <div className='icones'>
                    <a href="https://www.instagram.com/__fazito__/" target='blank'> <AiFillInstagram/> </a>
                </div> 
                
            </div>
            <div className='footer'>
                <h3> @2023 - Todos os direitos reservados </h3>
            </div>
            
        </section>
      
        </>

    )


}