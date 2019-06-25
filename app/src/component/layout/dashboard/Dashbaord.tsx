import React from 'react';
import { TopNav } from './topNav/TopNav';
import { Container } from './container/Container';
import { Footer } from './footer/Footer';

export class Dashboard extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <TopNav/>
                <Container/>
                <Footer/>
            </React.Fragment>
        )
    }
}