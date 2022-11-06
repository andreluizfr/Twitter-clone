import {FaTwitter,FaGoogle, FaApple} from 'react-icons/fa';

import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { newUser } from '../redux/features/userSlice';
import axios from 'axios';


interface ILoginResponse {
    message: string
    user: object | null
    accessToken: string | null
}

interface ILoginComponent {
    step: number
    setStep: React.Dispatch<React.SetStateAction<number>>
}


function Login ({step, setStep}: ILoginComponent ) {

    const firstInputRef = useRef<HTMLInputElement | null>(null);
    const secondInputRef = useRef<HTMLInputElement | null>(null);

    const [username, setUsername] = useState<string>("");
    const [serverResponse, setServerResponse] = useState<string>("");


    const dispatch = useDispatch();

    function goToSecondStep () {

        if(firstInputRef?.current?.value){
            setUsername(firstInputRef.current.value);
            setStep(2);
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
                        info: data.user,
                        accessToken: data.accessToken
                    }));
                    localStorage.setItem("info", JSON.stringify(data.user));
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

    if(step===1)
        return (
            <div className="Login">
                <FaTwitter fill="rgb(29, 155, 240)" className="Login-twitter-icon Icon-large"/>
                
                <div className='Login-container'>

                    <span className='Login-container-title Span-bold-large'>Entrar no Twitter</span>
                    <div className='btn-primary Btn-login-subscribe-with-google'>
                        <FaGoogle className="Icon-small"/>
                        <span className='Span-medium-smaller'>Fazer login com o Google</span>
                    </div>
                    <div className='btn-primary btn-themed-white-black Btn-login-subscribe-with-apple'>
                        <FaApple className="Icon-small"/>
                        <span className='Span-medium-small'>Entrar com Apple</span>
                    </div>
                    <div className='Span-lines-around'>
                        <span className='Span-lines-around-line'></span>
                        <span>or</span>
                        <span className='Span-lines-around-line'></span>
                    </div>
                    <div className='Input-animated'>
                        <input className='Input-primary' 
                               type='text'
                               required={true}
                               ref={firstInputRef} 
                        />
                        <span>Celular, e-mail ou nome de usuário</span>
                    </div>
                    <button className='btn-primary btn-themed-black-white Btn-avancar' onClick={goToSecondStep}>Avançar</button>
                    <button className='btn-primary btn-themed-white-black Btn-esqueceu-a-senha'>Esqueceu a senha?</button>

                </div>

                <span className='Span-subscribe Hidden'>Não tem uma conta? <a href="/">Inscreva-se</a></span>
                
            </div>
        );
    
    if(step===2)
        return (

            <div className="Login2">
                <FaTwitter fill="rgb(29, 155, 240)" className="Login-twitter-icon Icon-large"/>
                
                <div className='Login2-container'>

                    <span className='Login2-container-title Span-bold-large'>Digite sua senha</span>
                    <div className='Input-animated'>
                        <input className='Input-primary' disabled/>
                        <span>{username}</span>
                    </div>
                    <div className='Input-animated'>
                        <input className='Input-primary'
                               type='password'
                               required={true}
                               ref={secondInputRef}
                               onChange={event=>enablePasswordButton(event)}
                        />
                        <span>Senha</span>
                    </div>
                    <span className='Forget-password'>Esqueceu sua senha?</span>
                    <button onClick={handleLogin} className='btn-primary Btn-entrar' disabled>Entrar</button>

                </div>

                <span className='Span-subscribe'>Não tem uma conta? <a href="/">Inscreva-se</a></span>

                <span className='Login2-server-response'>{serverResponse}</span>
                
            </div>

        );
    
    return <></>
}

export default Login;