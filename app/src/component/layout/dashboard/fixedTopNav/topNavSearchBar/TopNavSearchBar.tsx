import React from 'react';
import './topNavSearchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons';

interface ITopNavSearchBarProps {}

export const TopNavSearchBar: React.FC<ITopNavSearchBarProps> = (props) => {
    return (
        <div className="topNavSearchBar">
            <div className="topNavSearchBar-optionBtn">
                <FontAwesomeIcon icon={faEllipsisV} />
            </div>
            <input type="text" className="topNavSearchBar-input" placeholder={'Search or jump to...'}/>
            <div className="topNavSearchBar-searchBtn">
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
    )
}