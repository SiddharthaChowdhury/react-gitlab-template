import React from 'react';
import './menuItem.scss'
import { IMenuItem } from './IMenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IMenuItemSubMenuList } from '../../../../../genericTypes/IMenuItemSubMenuList';
import Popup from "reactjs-popup";

interface IMenuItemProps extends IMenuItem{}

export class MenuItem extends React.PureComponent<IMenuItemProps> {
    public render () {
        return this.getSubMenuPopupWrappedMenuButton()
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
                        <div className={item.isEnabled? "menuItem-subElement menuItem-subElement-active" : "menuItem-subElement"} key={index}>
                            <div>{item.text}</div>
                        </div>
                    )
                })}
            </div>
        )
    }

    private getSubMenuPopupWrappedMenuButton = () => {
        const { isEnabled, subMenuList } = this.props;
        const menuButton = this.getMenuButton();

        if(!isEnabled && subMenuList) {
            return (
                <Popup
                    trigger={menuButton}
                    position="right top"
                    on="hover"
                    closeOnDocumentClick
                    mouseLeaveDelay={100}
                    mouseEnterDelay={0}
                    contentStyle={{ padding: "0px", border: "none" }}
                    arrow={false}
                >
                    <div className="leftNav-popupMenu">
                        {this.getSubMenuList()}
                    </div>
                </Popup>
            );
        }

        return menuButton
    }

    private getMenuButton = () => {
        const {
            text,
            icon: Icon,
            isEnabled,
        } = this.props

        return (
            <div className={isEnabled ? "menuItem-enabled" : "menuItem"}>
                <div className={isEnabled ? "menuItem-element-enabled menuItem-element" : "menuItem-element"} >
                    <FontAwesomeIcon icon={Icon} className="menuItem-element-icon"/>
                    <span>{text}</span>
                    {this.getBubbleNumber()}
                </div>
                { isEnabled && this.getSubMenuList()}
            </div>
        );
    }
}