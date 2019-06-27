import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './topNavButton.scss';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface ITopNavButtonProps {
    icons?: Array<any>;
    text?: string;
    classNames?: string;
    disable?: boolean;
}

export const TopNavButton: React.FC<ITopNavButtonProps> = (props) => {
    const {classNames, text} = props;

    if (classNames) {
        return (
            <div className="topNavButton-custom">
                <div className={`${classNames}`}/>
                {getIcons(props)}
            </div>
        )
    }

    return (
        <div className="topNavButton">
            {text && <span className="topNavButton-text">{text}</span>}
            {getIcons(props)}
        </div>
    );
}

const getIcons = (props: ITopNavButtonProps) => {
    const {icons} = props;

    if(!icons) {
        return null;
    }

    return icons.map((icon: any, key: number) => {
        return (
            <span className="topNavButton-iconCont">
                <FontAwesomeIcon 
                icon={icon} 
                key={key} 
                className={isIconButton(icon)}
                />
            </span>
        )
    })
    
}

const isIconButton = (icon: any) => {
    if(icon !== faAngleDown) {
        return 'fa-lg';
    }

    return 'topNavButton-iconArrow';
}