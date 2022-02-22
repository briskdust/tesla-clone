import Header from "./components/Header";
import Home from "./components/Home";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
};

export default App;
