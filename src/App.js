import "./App.css";
import Continer1 from "./components/continer1";
import Continer2 from "./components/continer2";

function App() {
  return (
    <div className="App">
      <div className="continer1">
        <Continer1 />
      </div>
      <div className="continer2">
        <Continer2 />
      </div>
    </div>
  );
}

export default App;
