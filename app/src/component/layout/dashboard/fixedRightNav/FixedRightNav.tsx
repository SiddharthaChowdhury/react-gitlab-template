import React from 'react';
import { ExpandedRightNav } from './expanded/ExpandedRightNav';
import {IdResponsiveRenderOnlyIn, Responsive} from "responsive-react";

export class FixedRightNav extends React.PureComponent {
    public render() {
        return (
            <Responsive displayIn={[IdResponsiveRenderOnlyIn.Laptop]}>
                <ExpandedRightNav/>
            </Responsive>
        )
    }
}