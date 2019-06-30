import React from 'react';
import './btnIcon.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Btn} from "../Btn";
import '../btn.scss';

interface IBmBtnProps {
    text: string;
    icon?: any;
    [index: string]: any;
}

export const BtnIcon: React.FC<IBmBtnProps> = (props) => {
    const {text, children, icon, ...rest} = props;

    return (
        <Btn text={text} {...rest} icon={<FontAwesomeIcon icon={icon} className="btn-icon"/>}/>
    )
};
