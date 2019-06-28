import React from 'react';
import { BtnWithTextForBtnWithMenu } from './__partials/BtnWithText__';
import { BtnDropDownForGenericBtnWithIcon } from './__partials/BtnDropDown__';
import { DroppedDownMenuForBtnWithMenu } from './__partials/DroppedDownMenu__';

interface IBtnMenuProps {
    text: string;
    menu: any;
    [index: string]: any;
}

export const BtnMenu: React.FC<IBtnMenuProps> = (props) => {
    const {text, menu, children, ...rest} = props;

    return (
        <div style={{display: 'flex'}}>
            <BtnWithTextForBtnWithMenu text={text} {...rest}/>
            <BtnDropDownForGenericBtnWithIcon>
                <DroppedDownMenuForBtnWithMenu>
                {menu}
                </DroppedDownMenuForBtnWithMenu>
            </BtnDropDownForGenericBtnWithIcon>
        </div>
    )
}