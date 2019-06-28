import React from "react";
import Menu from "@material-ui/core/Menu";

interface IBtnDropDownForGenericBtnWithIconProps {}

export const BtnDropDownForGenericBtnWithIcon: React.FC<IBtnDropDownForGenericBtnWithIconProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event: any) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      {/* TODO: This needs to be styled as drop down icon button */}
      <button onClick={handleClick}>Open Menu</button>
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