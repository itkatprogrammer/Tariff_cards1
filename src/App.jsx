import "./App.scss";
import Tarif from "./components/Tarif";
import tariffs from "./data";

function App() {
  return (
    <div className="tarif-cards">
      {tariffs.map((tarif) => (
        <Tarif
          name={tarif.name}
          price={tarif.price}
          speed={tarif.speed}
          color_name={tarif.color_name}
          color_price={tarif.color_price}
        />
      ))}
    </div>
  );
}

export default App;
