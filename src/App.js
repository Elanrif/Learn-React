import { Component } from "react";
// import Mycars from "./components/Mycars";
import Maman from "./components/Maman";
import "./App.css";

class App extends Component {
  state = {
    titre: "Mon Catalogue Voitures",
  };

  render() {
    return (
      <div className="App">
        {/* <Mycars title={this.state.titre} /> */}
        <Maman />
        </div>
    );
  }
}

export default App;
