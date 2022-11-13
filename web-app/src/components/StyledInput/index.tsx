import './styles.css';

import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLInputElement> {

}

const StyledInput = (props:Props) : JSX.Element => {

    if(props.className)
        return (
            <div className={'Styled-input '+props.className}>
                {props.children}
            </div>
        );
    else
        return (
            <div className='Styled-input'>
                {props.children}
            </div>
        );

}

export default StyledInput;