import React from "react";
import './inputText.scss';

export enum IdInputTextType {
    text = "text",
    password = "password",
    email = "email"
}

interface IInputTextProps {
    classes?: string;
    header?: string | React.ReactNode;
    footer?: string | React.ReactNode;
    [key: string]: any;
}

export const InputText: React.FC<IInputTextProps> = (props: IInputTextProps) => {
    const {classes, header, footer, label, ...rest} = props;
    return (
        <div className={`input-text-cont`}>
            <div className={`input-text-label-top`}>
                {label && 
                    <label>{label}</label>
                }
                <div>{header}</div>
            </div>
            <input className={`input-text ${classes || ''}`} {...rest}/>
            <div className={`input-text-label-bot`}>{footer}</div>
        </div>
    );
}