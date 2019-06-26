import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './topNavButton.scss';

interface ITopNavButtonProps {
    icons?: Array<any>;
    text?: string;
    classNames?: string;
    disable?: boolean;
}

export const TopNavButton: React.FC<ITopNavButtonProps> = (props) => {
    const {classNames, text, icons, children} = props;

    return (
        <div className={`topNavButton ${classNames ? classNames : ''}`}>
            {text && <span className="topNavButton-text">{text}</span>}
            {icons && icons.map((icon: any, key: number) => {
                return (
                    <span className="topNavButton-iconCont">
                        <FontAwesomeIcon icon={icon} key={key} className="topNavButton-icon"/>
                    </span>
                )
            })}
            {children}
        </div>
    );
}