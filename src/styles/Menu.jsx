import styled from "styled-components";

const Menu = styled.nav`
  width: 100%;

  transform: translateX(90px);

  @media (max-width: 768px) {
    display: none;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;

    li {
      font-weight: 500;
      margin: 0 12px;
      cursor: pointer;
    }
  }
`;

export default Menu;
