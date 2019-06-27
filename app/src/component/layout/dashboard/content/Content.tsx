import React from 'react';
import Container from '@material-ui/core/Container';
import './content.scss';
import { IdNavStatus } from '../IdNavStatus';

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

        switch(env) {
            case IdNavStatus.LnRn:
            case IdNavStatus.LcRc:
                return { width: '70%' };

            case IdNavStatus.LeRe:
                /* TODO:    add more breakdowns on display size 
                            for example - { width: '65%'}; for screenSize >= 1440 

                            package ref: https://www.npmjs.com/package/responsive-react
                            use: getDeviceTypeInfo() [returnType: IDeviceTypeInfo]
                */

                // screenSize >= 1024 && screenSize <= 1439
                return { width: '50%', paddingRight: '60px'};

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