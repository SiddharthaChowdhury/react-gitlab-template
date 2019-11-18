import React from "react";
import '../btn.scss';
import {utilBtn} from "../utilBtn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {StyledMenu} from "../StypedMenu";
import './btnSelect.scss'
import {IdBtnColor} from "../IdBtnColor";

interface IBtnSelectProps {
    text?: string;
    icon?: any;
    options: Array<React.ReactNode>;
    color?: IdBtnColor;
    solid?: boolean
    [index: string]: any;
}

export const BtnSelect: React.FC<IBtnSelectProps> = (props) => {
    const {text, icon, options, className, children, ...rest} = props;
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event: any) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <button className={`btnSelect ${utilBtn.getColorClass(props.color, props.solid || false)} ${className && className}`} onClick={handleClick} {...rest}>
                {icon && <div><FontAwesomeIcon icon={icon} /></div>}
                {text && <div>{text}</div>}
                <div className={'btnSelect-icon2'}><FontAwesomeIcon icon={faCaretDown} className="menuItem-element-icon"/></div>
            </button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {getOptions(options)}
            </StyledMenu>
        </div>
    );
};

const getOptions = (options: Array<React.ReactNode>) => {
    return (
        <li className={'btnSelectDropDownMenu'}>
            {options.map((item: React.ReactNode, index: number) => {
                return (
                    <div className={'btnSelectDropDownMenu-item'} key={index}>
                        {item}
                    </div>
                )
            })}
        </li>
    );
};