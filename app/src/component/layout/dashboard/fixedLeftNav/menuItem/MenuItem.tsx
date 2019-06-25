import React from 'react';
import './menuItem.scss'
import { IMenuItem } from './IMenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IMenuItemProps extends IMenuItem{}

export class MenuItem extends React.PureComponent<IMenuItemProps> {
    public render () {
        const {
            text,
            icon: Icon,
            // trigger,
            // subMenuList,
            // bubbleNumber
        } = this.props

        return (
            <div className="menuItem">
                <FontAwesomeIcon icon={Icon} className="menuItem-icon"/>
                <span>{text}</span>
            </div>
        );
    }
}