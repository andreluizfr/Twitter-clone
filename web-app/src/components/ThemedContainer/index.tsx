import './styles.css';

import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
    primaryColor: string
    hoverColor: string
}

const ThemedDiv = (props:Props) : JSX.Element => {

    return (
        <div className={props.className+"Container-themed-"}
             onClick={props.onClick}
        > 
            {props.children}
        </div>
    );

}

export default ThemedDiv;