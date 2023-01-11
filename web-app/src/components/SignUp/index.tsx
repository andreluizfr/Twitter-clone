import './styles.css';
import {FaCheckCircle} from 'react-icons/fa';
import Text from '../Text';
import ThemedButton from '../ThemedButton';
import StyledInput from '../StyledInput';

import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';


const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",                       
    "Maio",                              
    "Junho",                                
    "Julho",                           
    "Agosto",                              
    "Setembro",                            
    "Outubro",                          
    "Novembro",                             
    "Dezembro"                               
]

interface ISignUpComponentProps {
    step: number
    setStep: React.Dispatch<React.SetStateAction<number>>
}


function SignUp ({step, setStep}: ISignUpComponentProps ) {

    const nameInputRef = useRef<HTMLInputElement | null>(null);
    const emailInputRef = useRef<HTMLInputElement | null>(null);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");
    const [verificationCode, setVerificationCode] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [serverResponse, setServerResponse] = useState<string>("");

    function handleBlur (event: React.FocusEvent<HTMLInputElement>) {
        const el = (event.target as HTMLInputElement);
        el.setAttribute('wasFocused', 'true');
    }

    function handleNameChange (event: React.ChangeEvent<HTMLInputElement>) {
        const value = (event.target as HTMLInputElement).value;
        setName(value);
    }

    function handleEmailChange (event: React.ChangeEvent<HTMLInputElement>) {
        const value = (event.target as HTMLInputElement).value;
        setEmail(value);
    }

    function handleDateChange () {

        const day = (document.getElementById("Birth-date-day") as HTMLSelectElement)?.value;
        const month = (document.getElementById("Birth-date-month") as HTMLSelectElement)?.value;
        const year = (document.getElementById("Birth-date-year") as HTMLSelectElement)?.value;
        
        if(day!=="0" && month!=="0" && year!=="0"){
            setBirthDate(`${day}/${month}/${year}`);
        } else {
            setBirthDate("");
        }

    }

    const enableAdvanceButton = useCallback(()=>{

        if(name && email && birthDate){
            const el = document.getElementsByClassName("Btn-avancar");
            if(el.length>0)
                el[0].removeAttribute("disabled");
            
        } else {
            const el = document.getElementsByClassName("Btn-avancar");
            if(el.length>0)
                el[0].setAttribute("disabled", "true");
        }

    }, [name, email, birthDate]);

    
    useEffect(()=>{
        enableAdvanceButton();
    }, [enableAdvanceButton]);


    function goToSecondStep (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStep(2);
    }

    function backToFirstStep () {
        setStep(1);
    }

    function verifyEmail () {

        console.log("Enviando código para e-mail se for válido");
        //enviar request para validar se email já não existe e envia codigo de verificação para o email
        axios.post('http://localhost:5353/user/verifyEmail', {email: email}).then((response)=>{

            console.log(response.data.message);
            
            if(response.status===201)
                setStep(3);
            else if (response.status===202){
                setServerResponse(response.data.message);

                const el = document.getElementsByClassName("Signup-server-response");
                el[0].classList.remove("Hidden");

                //a mensagem só pode aparecer por 3s
                setTimeout(() => {
                    setServerResponse("");
                    const el = document.getElementsByClassName("Signup-server-response");
                    el[0].classList.add("Hidden");
                }, 3000);
            }
                
        }).catch(error => {
            console.error(error);
        });
        
    }

    function handleCodeChange (event: React.ChangeEvent<HTMLInputElement>) {
        const value = (event.target as HTMLInputElement).value;
        setVerificationCode(value);

        if(value.length===6){
            const el = document.getElementsByClassName("Btn-avancar");
            if(el.length>0)
                el[0].removeAttribute("disabled");
        } else {
            const el = document.getElementsByClassName("Btn-avancar");
            if(el.length>0)
                el[0].setAttribute("disabled", "true");
        }
    }

    function validateCode (event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        axios.post('http://localhost:5353/user/validateCode', {email: email, verificationCode: verificationCode}).then((response)=>{

            console.log(response.data.message);
            
            if(response.status===201)
                setStep(4);
            else if (response.status===202){
                setServerResponse(response.data.message);

                const el = document.getElementsByClassName("Signup-server-response");
                el[0].classList.remove("Hidden");

                //a mensagem só pode aparecer por 3s
                setTimeout(() => {
                    setServerResponse("");
                    const el = document.getElementsByClassName("Signup-server-response");
                    el[0].classList.add("Hidden");
                }, 3000);
            }
                
        }).catch(error => {
            console.error(error);
        });

    }

    function handleUsernameChange (event: React.ChangeEvent<HTMLInputElement>) {

        const value = (event.target as HTMLInputElement).value;
        setUsername(value);

        if(value.length >= 3 && value.length<=30 && password.length>=8 && password.length<=30){
            const el = document.getElementsByClassName("Btn-avancar");
            if(el.length>0)
                el[0].removeAttribute("disabled");
        } else {
            const el = document.getElementsByClassName("Btn-avancar");
            if(el.length>0)
                el[0].setAttribute("disabled", "true");
        }

    }

    function handlePasswordChange (event: React.ChangeEvent<HTMLInputElement>) {

        const value = (event.target as HTMLInputElement).value;
        setPassword(value);

        if(value.length>=8 && value.length<=30 && username.length>=3 && username.length<=30){
            const el = document.getElementsByClassName("Btn-avancar");
            if(el.length>0)
                el[0].removeAttribute("disabled");
        } else {
            const el = document.getElementsByClassName("Btn-avancar");
            if(el.length>0)
                el[0].setAttribute("disabled", "true");
        }

    }

    function signup(event: React.FormEvent<HTMLFormElement>){

        event.preventDefault();

        axios.post('http://localhost:5353/user/signup', {name: name, email: email, birthDate: birthDate, username: username, password: password}).then((response)=>{

            console.log(response.data.message);
            
            if(response.status===201){
                window.location.reload();
            }
            else if (response.status===202){
                setServerResponse(response.data.message);

                const el = document.getElementsByClassName("Signup-server-response");
                el[0].classList.remove("Hidden");

                //a mensagem só pode aparecer por 3s
                setTimeout(() => {
                    setServerResponse("");
                    const el = document.getElementsByClassName("Signup-server-response");
                    el[0].classList.add("Hidden");
                }, 3000);
            }
                
        }).catch(error => {
            console.error(error);
        });
        
    }   

    if(step===1)
        return (
            <form onSubmit={goToSecondStep}>

                <div className="Signup">
                    
                    <div className='Signup-container'>
                        
                        <Text className='Signup-container-step'
                              fontWeigth='medium'
                              fontSize='medium'
                              fontColor='black'
                        >
                            Etapa 1 de 4
                        </Text>

                        <Text className='Signup-container-title'
                              fontWeigth='medium'
                              fontSize='large'
                              fontColor='black'
                        >
                            Criar sua conta
                        </Text>


                        <StyledInput>
                            <input type='text'
                                   required={true}
                                   ref={nameInputRef}
                                   onChange={handleNameChange}
                                   onBlur={handleBlur}
                            />
                            <span>Nome</span>
                            <p>Digite seu nome</p>
                        </StyledInput>

                        <StyledInput>
                            <input type='email'
                                   required={true}
                                   ref={emailInputRef}
                                   onChange={handleEmailChange}
                                   onBlur={handleBlur}
                            />
                            <span>E-mail</span>
                            <p>Digite um e-mail válido</p>
                        </StyledInput>

                        <div className='Telephone-or-email'>
                            <Text className='Telephone-or-email-text'
                                  fontWeigth='normal'
                                  fontSize='small'
                                  fontColor='blue'
                            >
                                Usar telefone
                            </Text>
                        </div>

                        <div className='Birth-date-wrapper'>
                            
                            <Text className='Birth-date-title'
                                  fontWeigth='medium'
                                  fontSize='small'
                                  fontColor='black'
                            >
                                Data de nascimento
                            </Text>

                            <Text className='Birth-date-message'
                                  fontWeigth='normal'
                                  fontSize='smaller'
                                  fontColor='gray'
                            >
                                Isso não será exibido publicamente. Confirme usa própria idade, mesmo se esta conta
                                for de empresa, de um animal de estimação ou outros.
                            </Text>

                            <div className='Birth-date-values'>

                                <span>Mês</span>
                                <span>Dia</span>
                                <span>Ano</span>

                                <select id="Birth-date-month" name='month' onChange={handleDateChange}>
                                    <option value="0"></option>
                                    {Array(12).fill(null).map((value, index) => { 
                                        
                                        return <option key={index+1} value={index+1}>{monthNames[index]}</option>
                                
                                    })}
                                </select>
                                
                                <select id="Birth-date-day" name='day' onChange={handleDateChange}>
                                    <option value="0"></option>
                                    {Array(31).fill(null).map((value, index) => { 
                                        
                                        return <option key={index+1} value={index+1}>{index+1}</option>
                                
                                    })}
                                </select>
                                
                                <select id="Birth-date-year" name='year' onChange={handleDateChange}>
                                    <option value="0"></option>
                                    {Array(130).fill(null).map((value, index) => { 
                                        
                                        return <option key={index} value={2022-index}>{2022-index}</option>
                                
                                    })}
                                </select>

                            </div>

                        </div>
                    

                    </div>

                    <ThemedButton className='Btn-avancar' primaryColor='black' secondaryColor='white' type='submit' disabled>
                            <Text fontWeigth='medium' 
                                  fontSize='small' 
                                  fontColor='white'
                            >
                                Avançar
                            </Text>
                    </ThemedButton>
                    
                </div>

            </form>

        );
    
    if(step===2)
        return (
            <div className="Signup">
                
                <div className='Signup-container'>
                        
                        <Text className='Signup-container-step'
                              fontWeigth='medium'
                              fontSize='medium'
                              fontColor='black'
                        >
                            Etapa 2 de 4
                        </Text>

                        <Text className='Signup-container-title'
                              fontWeigth='medium'
                              fontSize='large'
                              fontColor='black'
                        >
                            Criar sua conta
                        </Text>

                        <StyledInput className='Filled-field'>
                            <input onClick={backToFirstStep}
                                   placeholder={name}
                            />
                            <span>Nome</span>
                            <FaCheckCircle className="Filled-field-check Icon-small"/>
                        </StyledInput>

                        <StyledInput className='Filled-field'>
                            <input
                                onClick={backToFirstStep}
                                placeholder={email}
                            />
                            <span>E-mail</span>
                            <FaCheckCircle className="Filled-field-check Icon-small"/>
                        </StyledInput>

                        <StyledInput className='Filled-field'>
                            <input
                                onClick={backToFirstStep}
                                placeholder={birthDate}
                            />
                            <span>Date</span>
                            <FaCheckCircle className="Filled-field-check Icon-small"/>
                        </StyledInput>

                </div>

                <div className='Signup-last-section'>

                    <Text 
                        className='Signup-last-section-message'
                        fontWeigth='normal'
                        fontSize='smaller'
                        fontColor='black'
                    >
                        Ao se inscrever, você concorda com os nossos <a href="/">Termos</a>, com a  <a href="/">Política de privacidade</a>
                        e com o <a href="/">Uso de Cookies</a>. O Twitter pode usar suas informações de contato, inclusive seu endereço de e-mail
                        e seu número de telefone, para os fins descritos na nossa Política de Privacidade. <a href="/">Saiba mais</a>
                    </Text>

                    <ThemedButton className='Btn-inscrever-se' primaryColor='blue' secondaryColor='white' onClick={verifyEmail}>
                        <Text 
                            fontWeigth='normal'
                            fontSize='normal'
                            fontColor='white'
                        >
                            Inscrever-se
                        </Text>
                    </ThemedButton>
                    
                </div>

                <span className='Signup-server-response Hidden'>{serverResponse}</span>

            </div>
        );
    
    if (step===3)
        return (
            
            <form onSubmit={validateCode}>

                <div className="Signup">
                    
                    <div className='Signup-container'>
                        
                        <Text 
                            className='Signup-container-step'
                            fontWeigth='medium'
                            fontSize='medium'
                            fontColor='black'
                        >
                            Etapa 3 de 4
                        </Text>

                        <Text 
                            className='Signup-container-title'
                            fontWeigth='medium'
                            fontSize='large'
                            fontColor='black'
                        >
                            Enviamos um código para você
                        </Text>

                        <Text 
                            fontWeigth='normal'
                            fontSize='small'
                            fontColor='gray'
                        >
                            Insira-o abaixo para verificar {email}.
                        </Text>

                        <StyledInput className='Verification-code-input'>
                            <input
                                type='text'
                                required={true}
                                onChange={handleCodeChange}
                            />
                            <span>Código de verificação</span>
                        </StyledInput>

                        <div className='Didnt-receive-email'>
                            <Text
                                className='Didnt-receive-email-message'
                                fontWeigth='normal'
                                fontSize='smaller'
                                fontColor='gray'
                                onClick={verifyEmail}
                            >
                                Não recebeu o e-mail?
                            </Text>
                        </div>
                    
                    </div>
                    
                    <ThemedButton className='Btn-avancar' primaryColor='black' secondaryColor='white' type='submit' disabled>
                        <Text fontWeigth='medium' 
                                fontSize='small' 
                                fontColor='white'
                        >
                            Avançar
                        </Text>
                    </ThemedButton>
                    
                    <span className='Signup-server-response Hidden'>{serverResponse}</span>

                </div>

            </form>
        );

    if (step===4)
        return (
            
            <form onSubmit={signup}>

                <div className="Signup">
                    
                    <div className='Signup-container'>
                        
                        <Text 
                            className='Signup-container-step'
                            fontWeigth='medium'
                            fontSize='medium'
                            fontColor='black'
                        >
                            Etapa 4 de 4
                        </Text>

                        <Text 
                            className='Signup-container-title'
                            fontWeigth='medium'
                            fontSize='large'
                            fontColor='black'
                        >
                            Você precisará de um usuário e senha
                        </Text>

                        <Text 
                            fontWeigth='normal'
                            fontSize='small'
                            fontColor='gray'
                        >
                            É preciso ter 8 caracteres ou mais
                        </Text>
                        
                        <StyledInput className='Username-input'>
                            <input
                                type='text'
                                minLength={3}
                                maxLength={30}
                                required={true}
                                onChange={handleUsernameChange}
                                onBlur={handleBlur}
                            />
                            <span>Username</span>
                            <p>Seu username precisa ter entre 3 à 30 caracteres.</p>
                        </StyledInput>

                        <StyledInput className='Password-input'>
                            <input
                                type='password'
                                minLength={8}
                                maxLength={30}
                                required={true}
                                onChange={handlePasswordChange}
                                onBlur={handleBlur}
                            />
                            <span>Senha</span>
                            <p>Sua senha precisa ter pelo menos 8 caracteres. Insira uma senha mais longa.</p>
                        </StyledInput>
                    
                    </div>
                    
                    <ThemedButton className='Btn-avancar' primaryColor='black' secondaryColor='white' type='submit' disabled>
                        <Text fontWeigth='medium' 
                                fontSize='small' 
                                fontColor='white'
                        >
                            Avançar
                        </Text>
                    </ThemedButton>
                    
                    <span className='Signup-server-response Hidden'>{serverResponse}</span>

                </div>

            </form>
        );

    return <></>
}

export default SignUp;