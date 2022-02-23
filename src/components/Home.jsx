import HomeContainer from "../styles/HomeContainer";
import Section from "./Section";

const Home = () => {
  return (
    <HomeContainer>
      <Section
        title="Model 3"
        bg="model-3.jpg"
        desc="Order Online for Touchless Delivery"
        btnText="custom order"
        lowerBtn="existing inventory"
        arrow="down-arrow.svg"
      />
      <Section />
      <Section />
      <Section />
    </HomeContainer>
  );
};

export default Home;
