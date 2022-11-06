import {FaTwitter,FaGoogle, FaApple} from 'react-icons/fa';

import { useCallback, useEffect, useRef, useState } from 'react';
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


function SignUp ({step, setStep}: ILoginComponent ) {

    const nameInputRef = useRef<HTMLInputElement | null>(null);
    const emailInputRef = useRef<HTMLInputElement | null>(null);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [date, setDate] = useState<string>("");

    const [serverResponse, setServerResponse] = useState<string>("");


    const dispatch = useDispatch();

    function handleBlur (event: React.FocusEvent<HTMLInputElement>) {
        const value = (event.target as HTMLInputElement);
        value.setAttribute('wasFocused', 'true');
    }

    function handleNameChange (event: React.ChangeEvent<HTMLInputElement>) {
        const value = (event.target as HTMLInputElement).value;
        setName(value);
    }

    function handleEmailChange (event: React.ChangeEvent<HTMLInputElement>) {
        const value = (event.target as HTMLInputElement).value;
        setEmail(value);
    }

    function handleThirdStep (event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        const day = (document.getElementById("Birth-date-day") as HTMLSelectElement).value
        const month = (document.getElementById("Birth-date-month") as HTMLSelectElement).value
        const year = (document.getElementById("Birth-date-year") as HTMLSelectElement).value

        console.log(name);
        console.log(email);
        console.log(day, month, year);
        
        //setStep(5);

    }

    const enableAdvanceButton = useCallback(()=>{

        const day = (document.getElementById("Birth-date-day") as HTMLSelectElement)?.value || "-1"
        const month = (document.getElementById("Birth-date-month") as HTMLSelectElement)?.value || "-1"
        const year = (document.getElementById("Birth-date-year") as HTMLSelectElement)?.value || "-1"

        if(name && email && day!=="-1" && month!=="-1" && year!=="-1"){
            const el = document.getElementsByClassName("Btn-avancar");
            if(el.length>0)
                el[0].removeAttribute("disabled");
            
        } else {
            const el = document.getElementsByClassName("Btn-avancar");
            if(el.length>0)
                el[0].setAttribute("disabled", "true");
        }

    }, [name, email]);

    useEffect(()=>{
        enableAdvanceButton();
    }, [enableAdvanceButton]);


    function handleLogin(){

        /*
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
        */
    }   

    if(step===3)
        return (
            <form onSubmit={handleThirdStep}>

                <div className="Signup2">
                    
                    <div className='Signup2-container'>
                        
                        <div className='Signup2-container-step Span-medium-medium'>Etapa 1 de 5</div>

                        <span className='Signup2-container-title Span-medium-large'>Criar sua conta</span>

                        <div className='Input-animated'>
                            <input className='Input-primary'
                                type='text'
                                required={true}
                                ref={nameInputRef}
                                onChange={handleNameChange}
                                onBlur={handleBlur}
                            />
                            <span>Nome</span>
                            <p>Digite seu nome</p>
                        </div>
                        <div className='Input-animated'>
                            <input className='Input-primary'
                                type='email'
                                required={true}
                                ref={emailInputRef}
                                onChange={handleEmailChange}
                                onBlur={handleBlur}
                            />
                            <span>E-mail</span>
                            <p>Digite um e-mail válido</p>
                        </div>

                        <div className='Telephone-or-email'>
                            <span className='Span-normal-small'>Usar telefone</span>
                        </div>

                        <div className='Birth-date-wrapper'>
                            
                            <span className='Birth-date-title Span-medium-small'>Data de nascimento</span>
                            <span className='Birth-date-message Span-normal-smaller'>
                                Isso não será exibido publicamente. Confirme usa própria idade, mesmo se esta conta
                                for de empresa, de um animal de estimação ou outros.
                            </span>
                            <div className='Birth-date-values'>

                                <span>Mês</span>
                                <span>Dia</span>
                                <span>Ano</span>

                                <select id="Birth-date-month" name='month' onChange={enableAdvanceButton}>
                                    <option value="-1"></option>
                                    <option value="01">Janeiro</option>
                                    <option value="02">Fevereiro</option>
                                    <option value="03">Março</option>
                                    <option value="04">Abril</option>
                                    <option value="05">Maio</option>
                                    <option value="06">Junho</option>
                                    <option value="07">Julho</option>
                                    <option value="08">Agosto</option>
                                    <option value="09">Setembro</option>
                                    <option value="10">Outubro</option>
                                    <option value="11">Novembro</option>
                                    <option value="12">Dezembro</option>
                                </select>
                                
                                <select id="Birth-date-day" name='day' onChange={enableAdvanceButton}>
                                    <option value="-1"></option>
                                    {Array(31).fill(null).map((value, index) => { 
                                        
                                        return <option key={index+1} value={index+1}>{index+1}</option>
                                
                                    })}
                                </select>
                                
                                <select id="Birth-date-year" name='year' onChange={enableAdvanceButton}>
                                    <option value="-1"></option>
                                    {Array(130).fill(null).map((value, index) => { 
                                        
                                        return <option key={index} value={2022-index}>{2022-index}</option>
                                
                                    })}
                                </select>

                            </div>

                        </div>
                    

                    </div>
                    
                    <button className='btn-primary btn-themed-black-white Btn-avancar' type='submit' disabled>Avançar</button>
                    
                </div>

            </form>

        );
    
    return <></>
}

export default SignUp;