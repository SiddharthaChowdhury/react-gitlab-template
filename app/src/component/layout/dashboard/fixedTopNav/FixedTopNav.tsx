import React from 'react';
import './fixedTopNav.scss';
import { TopNavButton } from './topNavButton/TopNavButton';
import { faAngleDown, faChartArea } from '@fortawesome/free-solid-svg-icons';

export class FixedTopNav extends React.PureComponent {
    public render() {
        return (
            <div className="fixedTopNav">
                <div className="fixedTopNav-left">
                    <TopNavButton classNames="logo"/>
                    <TopNavButton text="Projects" icons={[faAngleDown]}/>
                    <TopNavButton text="Groups" icons={[faAngleDown]}/>
                    <TopNavButton text="Activity"/>
                    <TopNavButton text="Milestone"/>
                    <TopNavButton text="Snippets"/>
                    <TopNavButton icons={[faChartArea]}/>
                </div>
                <div className="fixedTopNav-right"></div>
            </div>
        )
    }
}
