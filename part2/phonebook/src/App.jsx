import "./App.css";
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const handleAddBtn = (event) => {
    event.preventDefault();
    console.log("Clicked Button");

    console.log(persons);
    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(
      persons.concat({
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }),
    );
    setNewName("");
    setNewNumber("");
  };

  const filterSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <br />
      <h2>Phonebook</h2>

      <Filter value={searchTerm} onChange={filterSearch} />
      <br />
      <h2>Add a new</h2>
      <PersonForm
        nameHandle={handleNameChange}
        numberHandle={handleNumberChange}
        buttonClick={handleAddBtn}
      />

      <h2>Numbers</h2>

      <Persons persons={persons} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
