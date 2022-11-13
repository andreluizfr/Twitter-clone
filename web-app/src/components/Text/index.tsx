import './styles.css';

import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLSpanElement> {
    fontWeigth: string
    fontSize: string
    fontColor: string
}

const Text = (props:Props) : JSX.Element => {

    return (
        <span className={"Font-weigth-"+props.fontWeigth+" Font-size-"+props.fontSize+" Font-color-"+props.fontColor+" "+props.className}
              onClick={props.onClick}
        > 
            {props.children}
        </span>
    );

}

export default Text;