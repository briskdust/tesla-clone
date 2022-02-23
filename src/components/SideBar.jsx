import BurgerMenu from "../styles/BurgerMenu.styled";
import Close from "../styles/Close.styled";

const SideBar = props => {
  return (
    <BurgerMenu show={props.show}>
      <ul>
        <Close
          onClick={() => {
            props.onClose();
            props.unBlur();
          }}
        />
        <li>Existing Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-In</li>
        <li>Test Drive</li>
        <li>Cybertruck</li>
        <li>Roadster</li>
        <li>Semi</li>
        <li>Charging</li>
        <li>Powerwall</li>
        <li>Commercial Energy</li>
        <li>Utilities</li>
        <li>Find Us</li>
        <li>Support</li>
        <li>Investor Relations</li>
      </ul>
    </BurgerMenu>
  );
};

export default SideBar;
