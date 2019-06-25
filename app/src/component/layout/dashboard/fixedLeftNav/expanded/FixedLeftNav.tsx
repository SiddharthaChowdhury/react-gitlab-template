import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import './fixedLeftNav.scss';
import { menuItemMap } from '../menuItem/menuItemMap';
import { IMenuItem } from '../menuItem/IMenuItem';
import { MenuItem } from '../menuItem/MenuItem';

export class FixedLeftNav extends React.PureComponent {
    private menuList: Array<IMenuItem> = []
    constructor(props: any) {
        super(props)

        menuItemMap.forEach((value: IMenuItem, key: string) => {
            this.menuList.push(value)
        })
    }

    public render() {
        return (
            <div className="fixedLeftNav">
                <div className="fixedLeftNav-container">
                    <div className="fixedLeftNav-project">
                        <div className="fixedLeftNav-project-icon"></div>
                        <div className="fixedLeftNav-project-name">Project 1</div>
                    </div>
                    <div className="fixedleftNav-menuItems">
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
                    <div className="fixedLeftNav-toggleButton">
                        <FontAwesomeIcon icon={faAngleDoubleLeft} className="collapse-icon"/>
                        <span>Collapse sidebar</span>
                    </div>
                </div>
            </div>
        )
    }
}