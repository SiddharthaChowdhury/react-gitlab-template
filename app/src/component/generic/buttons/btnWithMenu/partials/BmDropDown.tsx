import React from "react";
import Menu from "@material-ui/core/Menu";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IdBtnColor} from "../../IdBtnColor";
import {utilBtn} from "../../utilBtn";

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
      {/* TODO: This needs to be styled as drop down icon button */}
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

const StyledMenu = (props: any) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      {...props}
    />
  );