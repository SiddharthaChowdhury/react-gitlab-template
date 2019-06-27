import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import './expandedLeftNav.scss';
import { menuItemMap } from '../menuItem/menuItemMap';
import { IMenuItem } from '../menuItem/IMenuItem';
import { MenuItem } from '../menuItem/MenuItem';

export class ExpandedLeftNav extends React.PureComponent {
    private menuList: Array<IMenuItem> = []
    constructor(props: any) {
        super(props)

        menuItemMap.forEach((value: IMenuItem, key: string) => {
            this.menuList.push(value)
        })
    }

    public render() {
        return (
            <div className="expandedLeftNav">
                <div className="expandedLeftNav-container">
                    <div className="expandedLeftNav-project">
                        <div className="expandedLeftNav-project-icon"></div>
                        <div className="expandedLeftNav-project-name">Project 1</div>
                    </div>
                    <div className="expandedleftNav-menuItems">
                        {this.menuList.map((item: IMenuItem, index: number) => {
                            return (
                            <MenuItem 
                                text={item.text} 
                                icon={item.icon} 
                                bubbleNumber={item.bubbleNumber}
                                subMenuList={item.subMenuList}
                                isEnabled={item.isEnabled}
                                key={index}
                            />)
                        })}
                    </div>
                    <div className="expandedLeftNav-toggleButton">
                        <FontAwesomeIcon icon={faAngleDoubleLeft} className="collapse-icon fa-lg"/>
                        <span>Collapse sidebar</span>
                    </div>
                </div>
            </div>
        )
    }
}