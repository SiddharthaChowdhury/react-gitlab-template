import React from 'react';
import Container from '@material-ui/core/Container';
import './content.scss';
import { IdNavStatus } from '../IdNavStatus';
import { utilContent } from './utilContent';
import { Breadcrumb } from './breadcrumb/Breadcrumb';

interface IContentOwnState {
    navStatus: IdNavStatus
}

const initialState: IContentOwnState = {navStatus: IdNavStatus.LeRe}

export class Content extends React.PureComponent {

    public readonly state: IContentOwnState = initialState;

    public render() {

        const {navStatus} = this.state;

        return (
            <div className="content" style={utilContent.getContentWidth(navStatus)}>
                <Container className="container">
                    <div className="container-breadcrumb">
                        <Breadcrumb/>
                    </div>
                </Container>
            </div>
        )
    }
}
