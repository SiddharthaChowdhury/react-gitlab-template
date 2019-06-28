import React from 'react';
import './partial.scss';

interface IBmMenuProps {

}

export const BmMenu: React.FC<IBmMenuProps> = (props) => {
    return (
        <div className="partial__dropDownMenu">
            {props.children}
        </div>
    );
}