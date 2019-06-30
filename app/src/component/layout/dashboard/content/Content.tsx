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
import {BtnSelect} from "../../../generic/buttons/btnSelect/BtnSelect";

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
                        <Btn text={'Disable Btn'} solid={true} className='container-btn-elements'/>
                        <Btn text={'Default Btn'} className='container-btn-elements'/>
                        <Btn text={'Green Btn'} color={IdBtnColor.GREEN} className='container-btn-elements' />
                        <Btn text={'Orange Btn'} color={IdBtnColor.ORANGE} className='container-btn-elements'/>
                        <Btn text={'Blue Btn'} color={IdBtnColor.BLUE} className='container-btn-elements'/>
                        <Btn text={'Red Btn'} color={IdBtnColor.RED} className='container-btn-elements' />

                        <Btn text={'Green Btn'} color={IdBtnColor.GREEN} solid={true} className='container-btn-elements' />
                        <Btn text={'Orange Btn'} color={IdBtnColor.ORANGE} solid={true} className='container-btn-elements' />
                        <Btn text={'Blue Btn'} color={IdBtnColor.BLUE} solid={true} className='container-btn-elements' />
                        <Btn text={'Red Btn'} color={IdBtnColor.RED} solid={true} className='container-btn-elements' />
                    </Segment>
                    <Segment>
                        <BtnMenu text="button BtnMenu" menu={getDummyMenu()} className='container-btn-elements'/>
                        <BtnMenu text="button BtnMenu" color={IdBtnColor.BLUE} menu={getDummyMenu()} className='container-btn-elements' />
                        <BtnMenu text="button BtnMenu" color={IdBtnColor.RED} menu={getDummyMenu()} className='container-btn-elements' />
                        <BtnMenu text="button BtnMenu" color={IdBtnColor.GREEN} menu={getDummyMenu()} className='container-btn-elements' />
                        <BtnMenu text="button BtnMenu" color={IdBtnColor.ORANGE} menu={getDummyMenu()} className='container-btn-elements' />
                    </Segment>
                    <Segment>
                        <BtnSelect text={'BtnSelect'} options={getDummySelectItems()} className='container-btn-elements' />
                        <BtnSelect text={'BtnSelect'} options={getDummySelectItems()} color={IdBtnColor.GREEN} className='container-btn-elements' />
                        <BtnSelect text={'BtnSelect'} options={getDummySelectItems()} color={IdBtnColor.BLUE} className='container-btn-elements'/>
                        <BtnSelect text={'BtnSelect'} options={getDummySelectItems()} color={IdBtnColor.ORANGE} className='container-btn-elements' />
                        <BtnSelect text={'BtnSelect'} options={getDummySelectItems()} color={IdBtnColor.RED} className='container-btn-elements' />

                        {/*------------------------------*/}
                        <BtnSelect text={'BtnSelect'} options={getDummySelectItems()} className='container-btn-elements' solid={true} />
                        <BtnSelect text={'BtnSelect'} options={getDummySelectItems()} color={IdBtnColor.GREEN} className='container-btn-elements' solid={true} />
                        <BtnSelect text={'BtnSelect'} options={getDummySelectItems()} color={IdBtnColor.BLUE} className='container-btn-elements' solid={true}/>
                        <BtnSelect text={'BtnSelect'} options={getDummySelectItems()} color={IdBtnColor.ORANGE} className='container-btn-elements' solid={true} />
                        <BtnSelect text={'BtnSelect'} options={getDummySelectItems()} color={IdBtnColor.RED} className='container-btn-elements' solid={true} />
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
};

const getDummyMenu = () => (<h3>Menu Content in dropdown</h3>);

const getDummySelectItems = () => ([
    <a href="/" style={{width: '100%'}}> Item 1 </a>,
    <a href="/" style={{width: '100%'}}> Item 2 </a>,
    <a href="/" style={{width: '100%'}}> Item 3 </a>,
]);