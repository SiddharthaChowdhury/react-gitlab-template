import React from 'react';
import './menuItem.scss'
import { IMenuItem } from './IMenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IMenuItemSubMenuList } from '../../../../../genericTypes/IMenuItemSubMenuList';

interface IMenuItemProps extends IMenuItem{}

export class MenuItem extends React.PureComponent<IMenuItemProps> {
    public render () {
        const {
            text,
            icon: Icon,
            // trigger,
            // subMenuList,
            isEnabled
        } = this.props

        return (
            <div className={isEnabled ? "menuItem-enabled" : "menuItem"}>
                <div className={isEnabled ? "menuItem-element-enabled menuItem-element" : "menuItem-element"} >
                    <FontAwesomeIcon icon={Icon} className="menuItem-element-icon"/>
                    <span>{text}</span>
                    {this.getBubbleNumber()}
                </div>
                {this.getSubMenuList()}
            </div>
        );
    }

    private getBubbleNumber = () => {
        const {bubbleNumber, isEnabled} = this.props;

        if(!bubbleNumber) {
            return null;
        }

        return(
            <small className={
                isEnabled ? 
                "menuItem-element-bubbleNum menuItem-element-bubbleNum-active" :
                "menuItem-element-bubbleNum"
            }>{bubbleNumber}</small>
        )
    }

    private getSubMenuList = () => {
        const {subMenuList} = this.props;

        if (!subMenuList) {
            return null;
        }

        return (
            <div>
                {subMenuList.map((item: IMenuItemSubMenuList, index: number) => {
                    return (
                        <div className={item.isEnabled? "menuItem-subElement menuItem-subElement-active" : "menuItem-subElement"}>
                            <div>{item.text}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}