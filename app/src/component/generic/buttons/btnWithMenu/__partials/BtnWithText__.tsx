import React from 'react';
import './partial.scss';

interface IBtnWithTextForBtnWithMenuProps {
    text: string;
    [index: string]: any;
}

export const BtnWithTextForBtnWithMenu: React.FC<IBtnWithTextForBtnWithMenuProps> = (props) => {
    const {text, children, ...rest} = props;

    return (
        <a {...rest}>
            {text}
        </a>
    )
}