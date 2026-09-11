import "./App.css";
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import axios from "axios";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    personsService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const handleAddBtn = (event) => {
    event.preventDefault();

    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    personsService.addPerson(newPerson).then((response) => {
      setPersons(persons.concat(response.data));
    });

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
