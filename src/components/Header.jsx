import HeaderContainer from "../styles/HeaderContainer";
import Menu from "../styles/Menu";
import MenuFold from "../styles/MenuFold";
import RightMenu from "../styles/RightMenu";

const Header = () => {
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
          <MenuFold />
        </ul>
      </RightMenu>
    </HeaderContainer>
  );
};

export default Header;
