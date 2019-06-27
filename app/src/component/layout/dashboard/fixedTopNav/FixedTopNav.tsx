import React from 'react';
import './fixedTopNav.scss';
import { TopNavButton } from './topNavButton/TopNavButton';
import { faAngleDown, faChartArea, faPlusSquare, faComment, faQuestionCircle, faBook, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

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
                <div className="fixedTopNav-right">
                    <TopNavButton icons={[faPlusSquare, faAngleDown]}/>
                    <TopNavButton icons={[faComment]}/>
                    <TopNavButton icons={[faBook]}/>
                    <TopNavButton icons={[faTicketAlt]}/>
                    <TopNavButton icons={[faQuestionCircle, faAngleDown]}/>
                    <TopNavButton icons={[faAngleDown]} classNames="userAccount"/>
                </div>
            </div>
        )
    }
}
