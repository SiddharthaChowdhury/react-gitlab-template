import React from 'react';
import './partial.scss';

interface IBmBtnProps {
    text: string;
    [index: string]: any;
}

export const BmBtn: React.FC<IBmBtnProps> = (props) => {
    const {text, children, ...rest} = props;

    return (
        <a {...rest}>
            {text}
        </a>
    )
}