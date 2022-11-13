import './styles.css';
import {FaTwitter,FaGoogle, FaApple} from 'react-icons/fa';
import Text from '../../components/Text';
import ThemedButton from '../../components/ThemedButton';
import FloatingContainer from '../../components/FloatingContainer';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';

import { useState } from 'react';


function FirstPage () {

    const [step, setStep] = useState(0);

    function showSignUpPage () {
        const el = document.getElementsByClassName("Floating-container");
        el[1].classList.remove("Hidden");
        setStep(1);
    }

    function hideSignUpPage () {
        const el = document.getElementsByClassName("Floating-container");
        el[1].classList.add("Hidden");
        setStep(0);
    }

    function showLoginPage () {
        const el = document.getElementsByClassName("Floating-container");
        el[0].classList.remove("Hidden");
        setStep(5);
    }

    function hideLoginPage () {
        const el = document.getElementsByClassName("Floating-container");
        el[0].classList.add("Hidden");
        setStep(0);
    }


    return (
        <div className='First-page'>

            <main className='First-page-wrapper'>

                <div className="First-page-wrapper-right-column">

                    <FaTwitter fill="rgb(29, 155, 240)" className="Icon-xl"/>
                    <Text className='First-page-wrapper-right-column-happening-now' 
                          fontWeigth='bold' 
                          fontSize='xxl'
                          fontColor='black'
                    >
                        Inscreva-se no Twitter hoje mesmo.
                    </Text>

                    <div className='First-page-wrapper-right-column-subscribe-container'>

                        <ThemedButton className='Btn-subscribe-with' primaryColor='white' secondaryColor='blue'>
                            <FaGoogle fill='black' className="Icon-smaller"/>
                            <Text fontWeigth='medium'
                                  fontSize='small'
                                  fontColor='black'
                            >
                                Inscrever-se no Google
                            </Text>
                        </ThemedButton>

                        <ThemedButton className='Btn-subscribe-with' primaryColor='white' secondaryColor='black'>
                            <FaApple fill="black" className="Icon-small"/>
                            <Text fontWeigth='medium' 
                                  fontSize='small' 
                                  fontColor='black'
                            >
                                Inscrever-se com Apple
                            </Text>
                        </ThemedButton>

                        <div className='Lines-around'>
                            <span className='Lines-around-line'></span>
                            <span>or</span>
                            <span className='Lines-around-line'></span>
                        </div>

                        <ThemedButton className='Btn-subscribe-with' primaryColor='blue' secondaryColor='white' onClick={showSignUpPage}>
                            <Text className='Btn-subscribe-with-text' 
                                  fontWeigth='medium' 
                                  fontSize='small' 
                                  fontColor='white'
                            >
                                Inscreva-se com número de celular ou e-mail
                            </Text>
                        </ThemedButton>

                        <span className='Subscribe-politics'>Ao se inscrever, você concorda com os <a href="/">Termos de Serviço</a> e a <a href="/">Política de Privacidade</a>, incluindo o <a href="/">Uso de Cookies</a>.</span>
                    
                    </div>
                    
                    <div className="First-page-wrapper-right-column-login-container">
                        <Text fontWeigth='bold' 
                              fontSize='normal' 
                              fontColor='black'
                        >
                            Já tem uma conta?
                        </Text>
                        <ThemedButton className='Btn-first-page-login' primaryColor='white' secondaryColor='blue' onClick={showLoginPage}>
                            <Text fontWeigth='medium'
                                  fontSize='small'
                                  fontColor='blue'
                            >
                                Entrar
                            </Text>
                        </ThemedButton>
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

            <FloatingContainer className='Hidden' escapeFunction={hideLoginPage}>
                <Login step={step} setStep={setStep}/>
            </FloatingContainer>

            <FloatingContainer className='Hidden' escapeFunction={hideSignUpPage}>
                <SignUp step={step} setStep={setStep}/>
            </FloatingContainer>

        </div>
    );

}

export default FirstPage;