import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar.js";
import "./style/landingpage.css";
import Intro from "./components/intro";
import Trending from "./components/trending";
import SuperHero from "./components/superHero";

function App() {
  return (
    <div>
      {/*intro*/}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/*end of intro*/}

      <div className="trending">
        <Trending />
      </div>
      <div className="superHero">
        <SuperHero />
      </div>
    </div>
  );
}

export default App;
