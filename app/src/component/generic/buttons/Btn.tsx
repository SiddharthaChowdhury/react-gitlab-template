import React from 'react';
import './btn.scss';
import {IdBtnColor} from "./IdBtnColor";
import {utilBtn} from "./utilBtn";

interface IBtnProps {
    text: string;
    color?: IdBtnColor;
    solid?: boolean
    icon?: any;
    [index: string]: any;
}

export const Btn: React.FC<IBtnProps> = (props) => {
    const {text, color, solid, className, icon, ...rest} = props;

    const colorClass = utilBtn.getColorClass(color, solid);
    const classes = className ? className + ` ${colorClass}` : colorClass;

    return (
        <a className={classes} {...rest}>
            <span>{text}</span>
            {props.icon && <span className={'btnIcon'}>{icon}</span>}
        </a>
    )
};
