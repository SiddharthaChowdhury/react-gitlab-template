import React from "react";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IdBtnColor} from "../../IdBtnColor";
import {utilBtn} from "../../utilBtn";
import {StyledMenu} from "../../StypedMenu";

interface IBmDropDownProps {
    color?: IdBtnColor;
}

export const BmDropDown: React.FC<IBmDropDownProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event: any) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <button className={`partial__menuBtn partial__menuBtnDownBtn ${utilBtn.getColorClass(props.color)}`} onClick={handleClick} style={{borderRadius: '0px 3px 3px 0px'}}>
          <FontAwesomeIcon icon={faCaretDown} className="menuItem-element-icon"/>
      </button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.children}
      </StyledMenu>
    </div>
  );
}
