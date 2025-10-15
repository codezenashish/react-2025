import "./App.css";
import { useState } from "react";

function App() {
  let [counter, value] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      value(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 1) {
      value(counter - 1);
    }
  };

  return (
    <>
      <div className="justify-center items-center h-screen flex flex-col">
        <h1 className="text-2xl mb-2">Number of click {counter} </h1>
        <div className="flex justify-center">
          <button
            onClick={addValue}
            className="bg-gray-200 px-4 py-2 rounded mr-2 hover:cursor-pointer" 
          >
            Add Value +{" "}
          </button>
          <button
            onClick={removeValue}
            className="bg-blue-400 text-white px-4 py-2 rounded hover:cursor-pointer"
          >
            Remove Value -
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
