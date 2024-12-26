import data from "../data/caracters_data.json";
import "/src/styles/Memento.css";
import "/src/styles/App.css";
import { useState } from "react";

export default function Memento() {
  const [items, setItems] = useState(data.memento);

  const removeItem = (index: number | string) => {
    setItems(items.filter((task) => task.index !== index));
  };
  return (
    <>
      <div className="memento-container">
        {items.map((task) => (
          <div className="memento" key={task.index}>
            <p className="check">{task.check}</p>
            <p className="details">{task.details}</p>
            <button className="task-button" type="button" onClick={() => removeItem(task.index)}>Fait</button>
          </div>
        ))}
      </div>
    </>
  );
}
