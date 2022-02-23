import styled from "styled-components";

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

  h1 {
    font-size: 38px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  #touchless {
    box-shadow: 0 1px 0 0 currentColor;
    cursor: pointer;

    &:hover {
      box-shadow: 0 2px 0 0 currentColor;
    }

    transition: box-shadow 0.33s cubic-bezier(0.5, 0, 0, 0.75), color 0.33s ease;
  }
`;

export default ItemText;
