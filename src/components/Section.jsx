import ArrowImg from "../styles/ArrowImg";
import Button from "../styles/Button";
import Buttons from "../styles/Buttons";
import ItemText from "../styles/ItemText";
import LowerButton from "../styles/LowerButton";
import Wrap from "../styles/Wrap";

import { Fade } from "react-reveal";

const Section = props => {
  return (
    <Wrap bg={props.bg}>
      <Fade bottom>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </ItemText>
      </Fade>

      <div>
        <Buttons>
          <Fade left>
            <Button>{props.btnText}</Button>
          </Fade>
          {props.lowerBtn && (
            <Fade right>
              <LowerButton>{props.lowerBtn}</LowerButton>
            </Fade>
          )}
        </Buttons>

        <ArrowImg src={`images/${props.arrow}`} />
      </div>
    </Wrap>
  );
};

export default Section;
