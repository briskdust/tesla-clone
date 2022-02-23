import HomeContainer from "../styles/HomeContainer.styled";
import MainSection from "./MainSection";

import { FullPage, Slide } from "react-full-page";
import products from "../data/DUMMY_INFO.json";

const HomePage = () => {
  return (
    <HomeContainer>
      <FullPage>
        {products.map(product => {
          return (
            <Slide>
              <MainSection
                id={product.id}
                key={product.id}
                title={product.title}
                desc={product.description}
                bg={product.image}
                btnText={product.leftBtn}
                lowerBtn={product.rightBtn}
                arrow="down-arrow.svg"
              />
            </Slide>
          );
        })}
      </FullPage>
    </HomeContainer>
  );
};

export default HomePage;
