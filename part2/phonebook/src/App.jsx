import "./App.css";
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleInputChange = (event) => setNewName(event.target.value);

  const handleAddBtn = (event) => {
    event.preventDefault();
    console.log("Clicked Button");

    console.log(persons);
    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
  };

  return (
    <div>
      <br />
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit" onClick={handleAddBtn}>
            add
          </button>
        </div>
        <div>debug: {newName}</div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  );
};

export default App;
