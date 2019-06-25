import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import './fixedLeftNav.scss';

export class FixedLeftNav extends React.PureComponent {
    public render() {
        return (
            <div className="fixedLeftNav">
                <div className="fixedLeftNav-toggleButton">
                    <FontAwesomeIcon icon={faAngleDoubleLeft} className="collapse-icon"/>
                    <span>Collapse sidebar</span>
                </div>
            </div>
        )
    }
}