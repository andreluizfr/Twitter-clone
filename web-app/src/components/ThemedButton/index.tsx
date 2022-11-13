import './styles.css';

import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    primaryColor: string
    secondaryColor: string
}

const ThemedButton = (props:Props) : JSX.Element => {

    return (
        <button className={"Btn Btn-themed-"+props.primaryColor+"-"+props.secondaryColor+" "+props.className}
                type={props.type}
                onClick={props.onClick}
        > 
            {props.children}
        </button>
    );

}

export default ThemedButton;