import ArrowImg from "../styles/ArrowImg";
import Button from "../styles/Button";
import Buttons from "../styles/Buttons";
import ItemText from "../styles/ItemText";
import LowerButton from "../styles/LowerButton";
import Wrap from "../styles/Wrap";

import { Fade } from "react-reveal";

const MainSection = props => {
  return (
    <Wrap bg={props.bg}>
      <ItemText>
        <Fade bottom>
          <h1>{props.title}</h1>
        </Fade>
        <Fade bottom delay={700}>
          <p>{props.desc}</p>
        </Fade>
      </ItemText>

      <div>
        <Buttons>
          <Fade left delay={700}>
            <Button>{props.btnText}</Button>
          </Fade>
          {props.lowerBtn && (
            <Fade right delay={700}>
              <LowerButton>{props.lowerBtn}</LowerButton>
            </Fade>
          )}
        </Buttons>

        <Fade delay={700}>
          <ArrowImg src={`images/${props.arrow}`} />
        </Fade>
      </div>
    </Wrap>
  );
};

export default MainSection;
