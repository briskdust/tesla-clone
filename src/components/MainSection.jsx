import ArrowImg from "../styles/ArrowImg.styled";
import Button from "../styles/Button.styled";
import Buttons from "../styles/Buttons.styled";
import ItemText from "../styles/ItemText.styled";
import LowerButton from "../styles/LowerButton.styled";
import Wrap from "../styles/Wrap.styled";

import { Fade } from "react-reveal";
import Author from "./Author";

const MainSection = props => {
  const description = (
    <span>
      Order Online for <span id="touchless">Touchless Delivery</span>
    </span>
  );

  return (
    <Wrap bg={props.bg}>
      <ItemText>
        <Fade bottom>
          <h1>{props.title}</h1>
        </Fade>
        <Fade bottom delay={700}>
          <p>{props.desc === undefined ? description : props.desc}</p>
        </Fade>
      </ItemText>

      <div>
        <Buttons>
          {props.lowerBtn ? (
            <Fade left delay={700}>
              <Button>{props.btnText}</Button>
            </Fade>
          ) : (
            <Fade delay={600}>
              <Button>{props.btnText}</Button>
            </Fade>
          )}
          {props.lowerBtn && (
            <Fade right delay={700}>
              <LowerButton>{props.lowerBtn}</LowerButton>
            </Fade>
          )}
        </Buttons>

        {props.id > 0 || props.id === undefined ? (
          ""
        ) : (
          <Fade delay={700}>
            <ArrowImg src={`images/${props.arrow}`} />
          </Fade>
        )}

        {props.id === 6 && (
          <Fade delay={700}>
            <Author />
          </Fade>
        )}
      </div>
    </Wrap>
  );
};

export default MainSection;
