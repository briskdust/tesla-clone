import ArrowImg from "../styles/ArrowImg";
import Button from "../styles/Button";
import Buttons from "../styles/Buttons";
import ItemText from "../styles/ItemText";
import LowerButton from "../styles/LowerButton";
import Wrap from "../styles/Wrap";

const Section = props => {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>

      <div>
        <Buttons>
          <Button>Custom Order</Button>
          <LowerButton>Existing Inventory</LowerButton>
        </Buttons>

        <ArrowImg src="images/down-arrow.svg" />
      </div>
    </Wrap>
  );
};

export default Section;
