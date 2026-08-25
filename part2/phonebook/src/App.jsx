import "./App.css";
import { useState } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

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
