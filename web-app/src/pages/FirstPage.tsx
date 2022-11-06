import {FaTwitter,FaGoogle, FaApple} from 'react-icons/fa';
import { useState } from 'react';
import Login from '../components/Login';
import SignUp from '../components/SignUp';


function FirstPage () {

    const [step, setStep] = useState(0);
    //

    function showLoginPage () {
        const el = document.getElementsByClassName("First-page-floated-page");
        el[0].classList.remove("Hidden");
        setStep(1);
    }

    function hideLoginPage () {
        const el = document.getElementsByClassName("First-page-floated-page");
        el[0].classList.add("Hidden");
        setStep(0);
    }

    function showSignUpPage () {
        const el = document.getElementsByClassName("First-page-floated-page");
        el[1].classList.remove("Hidden");
        setStep(3);
    }

    function hideSignUpPage () {
        const el = document.getElementsByClassName("First-page-floated-page");
        el[1].classList.add("Hidden");
        setStep(0);
    }

    return (
        <div className='First-page'>

            <main className='First-page-wrapper'>

                <div className="First-page-wrapper-right-column">

                    <FaTwitter fill="rgb(29, 155, 240)" className="Icon-xl"/>
                    <span className='First-page-wrapper-right-column-happening-now Span-bold-xxl'>Acontecendo agora</span>
                    <span className='Span-bold-large'>Inscreva-se no Twitter hoje mesmo.</span>
                    <div className='First-page-wrapper-right-column-subscribe-container'>
                        <div className='btn-primary Btn-login-subscribe-with-google'>
                            <FaGoogle className="Icon-small"/>
                            <span className="Span-normal-small">Inscrever-se no Google</span>
                        </div>
                        <div className='btn-primary btn-themed-white-black Btn-login-subscribe-with-apple'>
                            <FaApple fill="black" className="Icon-small"/>
                            <span className="Span-medium-small">Inscrever-se com Apple</span>
                        </div>
                        <div className='Span-lines-around'>
                            <span className='Span-lines-around-line'></span>
                            <span>or</span>
                            <span className='Span-lines-around-line'></span>
                        </div>
                        <button className='btn-primary btn-themed-blue-white Btn-subscribe-with-number' onClick={showSignUpPage}>
                            Inscreva-se com número de celular ou e-mail
                        </button>
                        <span className='Span-subscribe-politics'>Ao se inscrever, você concorda com os <a href="/">Termos de Serviço</a> e a <a href="/">Política de Privacidade</a>, incluindo o <a href="/">Uso de Cookies</a>.</span>
                    </div>
                    
                    <div className="First-page-wrapper-right-column-login-container">
                        <span className='Span-bold-normal'>Já tem uma conta?</span>
                        <button className='btn-primary btn-themed-white-blue Btn-first-page-login' onClick={showLoginPage}>Entrar</button>
                    </div>
                    
                </div>

                <div className="First-page-wrapper-left-column">
                    <FaTwitter fill="white" className="First-page-wrapper-left-column-twitter-icon"/>
                </div>
                
            </main>

            <footer className='First-page-footer'>
                <a href="/" className='First-page-footer-link'>Sobre</a>
                <a href="/" className='First-page-footer-link'>Central de Ajuda</a>
                <a href="/" className='First-page-footer-link'>Termos de serviço</a>
                <a href="/" className='First-page-footer-link'>Política de Privacidade</a>
                <a href="/" className='First-page-footer-link'>Política de cookies</a>
                <a href="/" className='First-page-footer-link'>Acessibilidade</a>
                <a href="/" className='First-page-footer-link'>Informações de anúncios</a>
                <a href="/" className='First-page-footer-link'>Blog</a>
                <a href="/" className='First-page-footer-link'>Status</a>
                <a href="/" className='First-page-footer-link'>Carreiras</a>
                <a href="/" className='First-page-footer-link'>Recursos da marca</a>
                <a href="/" className='First-page-footer-link'>Publicidade</a>
                <a href="/" className='First-page-footer-link'>Marketing</a>
                <a href="/" className='First-page-footer-link'>Twitter para empresas</a>
                <a href="/" className='First-page-footer-link'>Desenvolvedores</a>
                <a href="/" className='First-page-footer-link'>Diretório</a>
                <a href="/" className='First-page-footer-link'>Configurações</a>
                <a href="/" className='First-page-footer-link'>@ 2022 Twitter, Inc.</a>
            </footer>


            <div className='First-page-floated-page Hidden'>
                <div className='First-page-floated-page-background' onClick={hideLoginPage}></div>
                <Login step={step} setStep={setStep}/>
            </div>

            <div className='First-page-floated-page Hidden'>
                <div className='First-page-floated-page-background' onClick={hideSignUpPage}></div>
                <SignUp step={step} setStep={setStep}/>
            </div>

        </div>
    );

}

export default FirstPage;