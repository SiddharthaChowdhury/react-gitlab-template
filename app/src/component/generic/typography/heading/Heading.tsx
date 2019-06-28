import React from 'react';
import './heading.scss'

interface IHeadingProps {
}

export const Heading:React.FC<IHeadingProps> = ({children}) => {
    return (
        <h2>{children}</h2>
    );
}