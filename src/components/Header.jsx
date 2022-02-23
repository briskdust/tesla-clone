import HeaderContainer from "../styles/HeaderContainer";
import Menu from "../styles/Menu";
import MenuFold from "../styles/MenuFold";
import RightMenu from "../styles/RightMenu";
import ReactDOM from "react-dom";
import SideBar from "./SideBar";
import { useState } from "react";

const Header = () => {
  const [sideBarOpen, setSideBar] = useState(false);

  return (
    <HeaderContainer>
      <img
        src="images/logo.svg"
        alt="tesla-logo"
        style={{ cursor: "pointer" }}
      />

      <Menu>
        <ul>
          <li>Model S</li>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Solar Roof</li>
          <li>Solar Panels</li>
        </ul>
      </Menu>

      <RightMenu>
        <ul>
          <li>Shop</li>
          <li>Account</li>
          <MenuFold
            onClick={() => {
              setSideBar(true);
            }}
          />
        </ul>
      </RightMenu>

      {ReactDOM.createPortal(
        <SideBar show={sideBarOpen} />,
        document.getElementById("side-bar")
      )}
    </HeaderContainer>
  );
};

export default Header;
