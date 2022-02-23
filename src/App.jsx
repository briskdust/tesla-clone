import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
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
      style={{ filter: isBlur ? "blur(10px)" : "", transition: "filter 0.2s" }}
    >
      <GlobalStyle />
      <Header open={sideBarOpen} close={sideBarClose} />
      <Home />
    </div>
  );
};

export default App;
