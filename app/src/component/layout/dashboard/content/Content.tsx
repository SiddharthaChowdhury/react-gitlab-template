import React from 'react';
import Container from '@material-ui/core/Container';
import './content.scss';
import {IdNavStatus} from '../IdNavStatus';
import {utilContent} from './utilContent';
import {Breadcrumb} from './breadcrumb/Breadcrumb';
import {Heading} from '../../../generic/typography/heading/Heading';
import {Btn} from '../../../generic/buttons/Btn';
import {IdBtnColor} from '../../../generic/buttons/IdBtnColor';
import {BtnMenu} from '../../../generic/buttons/btnWithMenu/BtnMenu';

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
                    <Segment>
                        <Heading> This is "Heading" from typography</Heading>
                    </Segment>
                    <Segment>
                        <Btn text={'Default Btn'} style={{margin: '2px'}}/>
                        <Btn text={'Disable Btn'} solid={true} style={{margin: '2px'}}/>

                        <Btn text={'Green Btn'} color={IdBtnColor.GREEN} style={{margin: '2px'}} />
                        <Btn text={'Green Btn'} color={IdBtnColor.GREEN} solid={true} style={{margin: '2px'}} />

                        <Btn text={'Orange Btn'} color={IdBtnColor.ORANGE} style={{margin: '2px'}}/>
                        <Btn text={'Orange Btn'} color={IdBtnColor.ORANGE} solid={true} style={{margin: '2px'}} />

                        <Btn text={'Blue Btn'} color={IdBtnColor.BLUE} style={{margin: '2px'}}/>
                        <Btn text={'Blue Btn'} color={IdBtnColor.BLUE} solid={true} style={{margin: '2px'}} />

                        <Btn text={'Red Btn'} color={IdBtnColor.RED} style={{margin: '2px'}} />
                        <Btn text={'Red Btn'} color={IdBtnColor.RED} solid={true} style={{margin: '2px'}} />
                    </Segment>
                    <Segment>
                        <BtnMenu text="button BtnMenu" menu={
                            <h3>Menu Content in dropdown</h3>
                        } />

                        <BtnMenu text="button BtnMenu" color={IdBtnColor.BLUE} menu={
                            <h3>Menu Content in dropdown</h3>
                        } />

                        <BtnMenu text="button BtnMenu" color={IdBtnColor.RED} menu={
                            <h3>Menu Content in dropdown</h3>
                        } />

                        <BtnMenu text="button BtnMenu" color={IdBtnColor.GREEN} menu={
                            <h3>Menu Content in dropdown</h3>
                        } />

                        <BtnMenu text="button BtnMenu" color={IdBtnColor.ORANGE} menu={
                            <h3>Menu Content in dropdown</h3>
                        } />
                    </Segment>
                </Container>
            </div>
        )
    }
}


export const Segment = ({children}: any) => {
    return (
        <div className="container-element">
            {children}
        </div>
    )
}