import React from 'react';
import Container from '@material-ui/core/Container';
import './content.scss';
import { IdNavStatus } from '../IdNavStatus';
import {getDeviceTypeInfo} from "responsive-react/dist/utilResponsive";
 import {IDeviceTypeInfo} from "responsive-react/dist/types";
import { IdDeviceTypeBreakdown } from 'responsive-react/dist/ids';

export class Content extends React.PureComponent {
    public render() {
        return (
            <div className="content" style={this.getContainerWidth(IdNavStatus.LeRe)}>
                <Container className="container">
                    hello world
                </Container>
            </div>
        )
    }

    private getContainerWidth = (env: IdNavStatus): React.CSSProperties => {
        const device: IDeviceTypeInfo  = getDeviceTypeInfo()

        switch(env) {
            case IdNavStatus.LnRn:
            case IdNavStatus.LcRc:
                return { width: '70%' };

            case IdNavStatus.LeRe:
                if(device.deviceTypeVariant === IdDeviceTypeBreakdown.LaptopSmall ) {
                    console.log("laptopsmall")
                    return { width: '50%', paddingRight: '60px'};
                }

                return { width: '65%', paddingRight: '60px'};
                

            default: 
                // case IdNavStatus.LcRe:
                // case IdNavStatus.LeRc:
                // case IdNavStatus.LeRn:
                // case IdNavStatus.LnRe:
                // case IdNavStatus.LcRn:
                // case IdNavStatus.LnRc:
                return { width: '60%' };
                
        }
    }
}