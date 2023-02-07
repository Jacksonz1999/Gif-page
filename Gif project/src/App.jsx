import "./App.css";

import Header from "./components/Header/Header";
import Media from "./components/Media/Media";
import Search from "./components/Search/SearchContainer";
function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Search />
        <img
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "15px",
          }}
          src="https://media.giphy.com/headers/2023-01-30-52-1675104768/GRAMMYS_BANNER_2023_HP.gif"
        ></img>
        <Media />
      </div>
    </div>
  );
}

export default App;
