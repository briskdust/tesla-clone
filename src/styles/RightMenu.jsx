import styled from "styled-components";

const RightMenu = styled.nav`
  min-width: 300px;
  display: flex;
  justify-content: flex-end;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
  }

  li {
    font-weight: 500;
    margin-right: 12px;
    cursor: pointer;
  }
`;

export default RightMenu;
