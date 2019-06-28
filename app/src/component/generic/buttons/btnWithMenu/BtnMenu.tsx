import React from 'react';
import { BmBtn } from './partials/BmBtn';
import { BmDropDown } from './partials/BmDropDown';
import { BmMenu } from './partials/BmMenu';
interface IBtnMenuProps {
    text: string;
    menu: any;
    [index: string]: any;
}

export const BtnMenu: React.FC<IBtnMenuProps> = (props) => {
    const {text, menu, children, ...rest} = props;

    return (
        <div style={{display: 'flex'}}>
            <BmBtn text={text} {...rest}/>
            <BmDropDown>
                <BmMenu>
                    {menu}
                </BmMenu>
            </BmDropDown>
        </div>
    )
}