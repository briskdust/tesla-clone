import HomeContainer from "../styles/HomeContainer";
import MainSection from "./MainSection";

const HomePage = () => {
  return (
    <HomeContainer>
      <MainSection
        title="Model 3"
        bg="model-3.jpg"
        desc="Order Online for Touchless Delivery"
        btnText="custom order"
        lowerBtn="existing inventory"
        arrow="down-arrow.svg"
      />
      <MainSection />
      <MainSection />
      <MainSection />
    </HomeContainer>
  );
};

export default HomePage;
