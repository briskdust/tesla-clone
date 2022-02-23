import Header from "./components/Header";
import Home from "./components/Home";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <div style={{ filter: "blur(10px)" }}>
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
};

export default App;
