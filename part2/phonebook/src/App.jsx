import "./App.css";
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import axios from "axios";
import personsService from "./services/personsModule";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const handleAddBtn = (event) => {
    event.preventDefault();

    const nameExists = persons.find((person) => person.name === newName);

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    if (nameExists) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with new one?`,
        )
      ) {
      }

      return;
    }

    personsService.addPerson(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  const filterSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDeleteBtn = (id) => {
    const personToDelete = persons.find((p) => p.id === id);

    if (!personToDelete) return;

    if (window.confirm(`deelete ${personToDelete.name}?`)) {
      personsService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          alert(`the person '${personToDelete.name}' was already deleted`);
          setPersons(persons.filter((person) => person.id !== id));
        });
    }
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
      <Persons
        persons={persons}
        searchTerm={searchTerm}
        deleteBtn={handleDeleteBtn}
      />
    </div>
  );
};

export default App;
