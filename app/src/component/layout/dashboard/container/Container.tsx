import React from 'react';
import { SideNav } from './sideNav/SideNav';
import { Content } from './content/Content';
import './container.scss';

export class Container extends React.PureComponent {
    public render() {
        return (
            <div className="container">
                <SideNav/>
                <Content/>
            </div>
        )
    }
}