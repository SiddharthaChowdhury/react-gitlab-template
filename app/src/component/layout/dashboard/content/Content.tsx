import React from 'react';
import Container from '@material-ui/core/Container';
import './content.scss';

export class Content extends React.PureComponent {
    public render() {
        return (
            <div className="content">
                <Container className="container">
                    hello world
                </Container>
            </div>
        )
    }
}