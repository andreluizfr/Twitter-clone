import './styles.css';

import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
    escapeFunction: () => void
}

const FloatingContainer = (props:Props) : JSX.Element => {

    return (
        <div className={"Floating-container "+props.className}>
            <div className='Background' onClick={props.escapeFunction}></div>
            {props.children}
        </div>
    );

}

export default FloatingContainer;