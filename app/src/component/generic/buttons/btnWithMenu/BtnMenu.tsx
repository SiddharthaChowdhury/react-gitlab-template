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
    const {text, menu, color, children, className,  ...rest} = props;

    return (
        <div style={{display: 'flex'}} className={`${className ? className: '' }`}>
            <BmBtn text={text} {...rest} color={color}/>
            <BmDropDown color={color}>
                <div className='popUpMenu'>
                    {menu}
                </div>
            </BmDropDown>
        </div>
    )
};

