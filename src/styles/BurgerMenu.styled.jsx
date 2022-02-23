import styled from "styled-components";

const BurgerMenu = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 310px;
  background: white;
  z-index: 50;

  padding: 0 50px;

  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;

  ul {
    list-style: none;
  }

  li {
    cursor: pointer;
    font-weight: 500;
    margin-top: 30px;
    transform: translateY(-20px);
  }
`;

export default BurgerMenu;
