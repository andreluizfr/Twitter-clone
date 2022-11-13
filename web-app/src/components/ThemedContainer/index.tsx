import './styles.css';

import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
    primaryColor: string
    secondaryColor: string
}

const ThemedDiv = (props:Props) : JSX.Element => {

    return (
        <div
            className={"Container-themed-"+props.primaryColor+"-"+props.secondaryColor+" "+props.className}
            onClick={props.onClick}
        > 
            {props.children}
        </div>
    );

}

export default ThemedDiv;