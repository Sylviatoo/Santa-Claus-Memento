import { useState } from "react";
import data from "../data/caracters_data.json";
import "/src/styles/Caracters.css";
import "/src/styles/App.css";

export default function Caracters(){
const caracters = data.caracters
const [state, setState] = useState(caracters);   

const handleButton = (filter: string) => {
    if (filter === "all"){
        setState(caracters);
    } else {
        const filtered = caracters.filter ((caracter) => 
            caracter.filter.includes(filter))
        setState(filtered);
    }
  }


return (
  <div>
    <button
      className="button"
      type="button"
      onClick={() => handleButton("all")}
    >
      Tous
    </button>
    <button
      className="button"
      type="button"
      onClick={() => handleButton("lutin")}
    >
      Lutins
    </button>
    <button
      className="button"
      type="button"
      onClick={() => handleButton("renne")}
    >
      Rennes
    </button>

    <div className="caracter-container">
      {state.map((caracter) => (
        <div className="caracter" key={caracter.index}>
          <img alt={caracter.name} src={caracter.img} />
          <p className="name">{caracter.name}</p>
          <p className="job">{caracter.job}</p>
          <p className="description">{caracter.description}</p>
        </div>
      ))}
    </div>
  </div>
);
}