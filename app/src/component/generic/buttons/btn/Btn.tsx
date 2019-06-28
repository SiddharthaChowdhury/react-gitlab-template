import React from 'react';
import './btn.scss';
import { IdBtnColor } from '../IdBtnColor';

interface IBtnProps {
    text: string;
    color?: IdBtnColor;
    solid?: boolean
    [index: string]: any;
}

export const Btn: React.FC<IBtnProps> = ({text, color, solid, className, ...rest}) => {

    const colorClass = getColorClass(color, solid);
    const classes = className ? className + ` ${colorClass}` : colorClass

    return (
        <a className={classes} {...rest}>
            {text}
        </a>
    )
}

const getColorClass = (color?: IdBtnColor, solid?: boolean) => {
    let classNames = 'btn ';

    switch(color) {
        case IdBtnColor.BLUE:
            return classNames += solid ? 'btnBlue': 'btnBlueLine';
        case IdBtnColor.GREEN:
            return classNames += solid ? 'btnGreen': 'btnGreenLine';
        case IdBtnColor.ORANGE:
            return classNames += solid ? 'btnOrange': 'btnOrangeLine';
        case IdBtnColor.RED:
            return classNames += solid ? 'btnRed' : 'btnRedLine';
        default:
            return classNames += solid ? 'btnDefault' : 'btnDefaultLine';         
    }
}