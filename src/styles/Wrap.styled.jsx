import styled from "styled-components";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => `images/${props.bg}`});

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;
`;

export default Wrap;
