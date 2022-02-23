import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/Home";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  const [isBlur, setBlur] = useState(false);

  const sideBarOpen = () => {
    setBlur(true);
  };

  const sideBarClose = () => {
    setBlur(false);
  };

  return (
    <div
      style={{ filter: isBlur ? "blur(10px)" : "", transition: "filter 0.3s" }}
    >
      <GlobalStyle />
      <Header open={sideBarOpen} close={sideBarClose} />
      <HomePage />
    </div>
  );
};

export default App;
