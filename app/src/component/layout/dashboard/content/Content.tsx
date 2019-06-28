import React from 'react';
import Container from '@material-ui/core/Container';
import './content.scss';
import { IdNavStatus } from '../IdNavStatus';
import { utilContent } from './utilContent';
import { Breadcrumb } from './breadcrumb/Breadcrumb';
import { Heading } from '../../../generic/typography/heading/Heading';
import { Btn } from '../../../generic/buttons/btn/Btn';
import { IdBtnColor } from '../../../generic/buttons/IdBtnColor';
import { BtnMenu } from '../../../generic/buttons/btnWithMenu/BtnMenu';

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
                        <div style={{display: 'flex', width: '100%'}}>
                            <Btn text={'Default Btn'}/>
                            <Btn text={'Disable Btn'} solid={true}/>

                            <Btn text={'Green Btn'} color={IdBtnColor.GREEN}/>
                            <Btn text={'Green Btn'} color={IdBtnColor.GREEN} solid={true}/>

                            <Btn text={'Orange Btn'} color={IdBtnColor.ORANGE}/>
                            <Btn text={'Orange Btn'} color={IdBtnColor.ORANGE} solid={true}/>

                            <Btn text={'Blue Btn'} color={IdBtnColor.BLUE}/>
                            <Btn text={'Blue Btn'} color={IdBtnColor.BLUE} solid={true}/>

                            <Btn text={'Red Btn'} color={IdBtnColor.RED}/>
                            <Btn text={'Red Btn'} color={IdBtnColor.RED} solid={true}/>
                        </div>
                        <div style={{display: 'flex', width: '100%'}}>
                            <BtnMenu text="button BtnMenu" menu={
                                <h3>Menu Content in dropdown</h3>
                            } />
                        </div>
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