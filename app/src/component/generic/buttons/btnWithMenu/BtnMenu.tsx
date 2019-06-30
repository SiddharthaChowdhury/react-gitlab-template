import React from 'react';
import { BmBtn } from './partials/BmBtn';
import { BmDropDown } from './partials/BmDropDown';
import {IdBtnColor} from "../IdBtnColor";
import '../btn.scss';

interface IBtnMenuProps {
    text: string;
    menu: any;
    color?: IdBtnColor;
    [index: string]: any;
}

export const BtnMenu: React.FC<IBtnMenuProps> = (props) => {
    const {text, menu, color, children, ...rest} = props;

    return (
        <div style={{display: 'flex'}}>
            <BmBtn text={text} {...rest} color={color}/>
            <BmDropDown color={color}>
                <div style={menuStyle}>
                    {menu}
                </div>
            </BmDropDown>
        </div>
    )
};

const menuStyle: React.CSSProperties = {
    padding: '15px',
    border: '1px solid black'
};

