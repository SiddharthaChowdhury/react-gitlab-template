import React from 'react';
import { Footer } from './footer/Footer';
import { FixedTopNav } from './fixedTopNav/FixedTopNav'
import { Content } from './content/Content';
import { RightNav } from './fixedRightNav/RightNav';
import { FixedLeftNav } from './fixedLeftNav/expanded/FixedLeftNav';

export class Dashboard extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <FixedTopNav/>
                <FixedLeftNav/>
                <Content/>
                <RightNav/>
                <Footer/>
            </React.Fragment>
        )
    }
}