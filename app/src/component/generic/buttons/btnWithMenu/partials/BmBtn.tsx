import React from 'react';
import './partial.scss';
import {IdBtnColor} from "../../IdBtnColor";
import {utilBtn} from "../../utilBtn";
import '../../btn.scss';

interface IBmBtnProps {
    text: string;
    color?: IdBtnColor;
    [index: string]: any;
}

export const BmBtn: React.FC<IBmBtnProps> = (props) => {
    const {text, color, children, ...rest} = props;

    return (
        <button className={`partial__menuBtn partial__menuBtnBtn ${utilBtn.getColorClass(color)}`} style={{borderRadius: '3px 0px 0px 3px'}} {...rest}>
            {text}
        </button>
    )
};
