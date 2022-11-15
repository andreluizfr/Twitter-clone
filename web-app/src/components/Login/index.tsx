import './styles.css';
import {FaTwitter,FaGoogle, FaApple} from 'react-icons/fa';
import Text from '../Text';
import ThemedButton from '../ThemedButton';
import StyledInput from '../StyledInput';

import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { newUser } from '../../redux/features/userSlice';
import axios from 'axios';




interface ILoginResponse {
    message: string
    user: object | null
    accessToken: string | null
    refreshToken: string | null
}

interface ILoginComponentProps {
    step: number
    setStep: React.Dispatch<React.SetStateAction<number>>
}


function Login ({step, setStep}: ILoginComponentProps ) {

    const firstInputRef = useRef<HTMLInputElement | null>(null);
    const secondInputRef = useRef<HTMLInputElement | null>(null);

    const [username, setUsername] = useState<string>("");
    const [serverResponse, setServerResponse] = useState<string>("");


    const dispatch = useDispatch();

    function goToPasswordStep () {

        if(firstInputRef?.current?.value){
            setUsername(firstInputRef.current.value);
            setStep(6);
        }

    }

    function enablePasswordButton (event: React.ChangeEvent<HTMLInputElement>) {
        
        const value = (event.target as HTMLInputElement).value;
        
        if(value.length>0){
            const el = document.getElementsByClassName("Btn-entrar");
            const el2 = el[0] as HTMLElement;
            el2.removeAttribute("disabled");
            el2.onclick = handleLogin;
        } else {
            const el = document.getElementsByClassName("Btn-entrar");
            el[0].setAttribute("disabled", "true");
        }

    }

    function handleLogin(){

        const password = secondInputRef.current?.value;

        if(username && password){

            axios.post('http://localhost:5353/user/login', {username: username, password: password}).then((response)=>{

                const data = response.data as ILoginResponse;

                if(data.user && data.accessToken){

                    dispatch(newUser({
                        info: data.user
                    }));
                    localStorage.setItem("x-access-token", data.accessToken);

                } else {
                    
                    setServerResponse(data.message);

                    const el = document.getElementsByClassName("Login2-server-response");
                    el[0].classList.remove("Hidden");

                    //a mensagem só pode aparecer por 3s
                    setTimeout(() => {
                        setServerResponse("");
                        const el = document.getElementsByClassName("Login2-server-response");
                        el[0].classList.add("Hidden");
                    }, 3000);

                }
                
            }).catch(error=>{
                console.error(error);
            });

        }
    }   

    if(step===5)
        return (
            <div className="Login">
                <FaTwitter fill="rgb(29, 155, 240)" className="Login-twitter-icon Icon-large"/>
                
                <div className='Login-container'>

                    <Text className='Login-container-title' 
                          fontWeigth='bold' 
                          fontSize='large' 
                          fontColor='black'
                    >
                        Entrar no Twitter
                    </Text>

                    <ThemedButton className='Btn-login-with' primaryColor='white' secondaryColor='blue'>
                            <FaGoogle fill='black' className="Icon-smaller"/>
                            <Text fontWeigth='medium' 
                                  fontSize='small' 
                                  fontColor='black'
                            >
                                Fazer login com o Google
                            </Text>
                    </ThemedButton>

                    <ThemedButton className='Btn-login-with' primaryColor='white' secondaryColor='black'>
                            <FaApple className="Icon-small"/>
                            <Text fontWeigth='medium' 
                                  fontSize='small' 
                                  fontColor='black'
                            >
                                Entrar com Apple
                            </Text>
                    </ThemedButton>

                    <div className='Lines-around'>
                        <span className='Lines-around-line'></span>
                        <span>or</span>
                        <span className='Lines-around-line'></span>
                    </div>

                    <StyledInput>
                        <input type='text'
                               required={true}
                               ref={firstInputRef} 
                        />
                        <span>Celular, e-mail ou nome de usuário</span>
                    </StyledInput>

                    <ThemedButton className='Login-container-button' primaryColor='black' secondaryColor='white'  onClick={goToPasswordStep}>
                            <Text fontWeigth='medium' 
                                  fontSize='small' 
                                  fontColor='white'
                            >
                                Avançar
                            </Text>
                    </ThemedButton>

                    <ThemedButton className='Login-container-button' primaryColor='white' secondaryColor='black'  onClick={goToPasswordStep}>
                            <Text fontWeigth='medium' 
                                  fontSize='small'
                                  fontColor='black'
                            >
                                Esqueceu a senha?
                            </Text>
                    </ThemedButton>

                </div>

                <span className='Subscribe'>Não tem uma conta? <a href="/">Inscreva-se</a></span>
                
            </div>
        );
    
    if(step===6)
        return (

            <div className="Login2">
                <FaTwitter fill="rgb(29, 155, 240)" className="Login-twitter-icon Icon-large"/>
                
                <div className='Login2-container'>

                    <Text className='Login2-container-title' 
                          fontWeigth='bold' 
                          fontSize='large' 
                          fontColor='black'
                    >
                        Digite sua senha
                    </Text>

                    <StyledInput>
                        <input disabled/>
                        <span>{username}</span>
                    </StyledInput>
                    
                    <StyledInput className='Password-input'>
                        <input type='password'
                               required={true}
                               ref={secondInputRef}
                               onChange={event=>enablePasswordButton(event)}
                        />
                        <span>Senha</span>
                    </StyledInput>

                    <Text className='Forget-password'
                          fontWeigth='normal'
                          fontSize='smaller'
                          fontColor='blue'
                    >
                        Esqueceu sua senha?
                    </Text>


                    <ThemedButton className='Btn-entrar' primaryColor='black' secondaryColor='white' onClick={handleLogin} disabled>
                        <Text fontWeigth='medium'
                              fontSize='normal'
                              fontColor='white'>     
                            Entrar
                        </Text>
                    </ThemedButton>

                </div>

                <span className='Subscribe'>Não tem uma conta? <a href="/">Inscreva-se</a></span>

                <span className='Login2-server-response Hidden'>{serverResponse}</span>
                
            </div>

        );
    
    return <></>
}

export default Login;