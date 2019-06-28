import React from 'react';
import './partial.scss';

interface IDroppedDownMenuForBtnWithMenuProps {

}

export const DroppedDownMenuForBtnWithMenu: React.FC<IDroppedDownMenuForBtnWithMenuProps> = (props) => {
    return (
        <div className="partial__dropDownMenu">
            {props.children}
        </div>
    );
}