import "./index.css";
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import axios from "axios";
import personsService from "./services/personsModule";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const handleAddBtn = (event) => {
    event.preventDefault();

    const existingPerson = persons.find((person) => person.name === newName);

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with new one?`,
        )
      ) {
        const changedPerson = { ...existingPerson, number: newNumber };
        personsService
          .update(existingPerson.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== existingPerson.id ? person : returnedPerson,
              ),
            );
            setNotificationMessage(`updated number for ${returnedPerson.name}`);

            setTimeout(() => {
              setNotificationMessage(null);
            }, 3000);
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            alert(`the person '${existingPerson.name}' was already deleted`);
            setPersons(
              persons.filter((person) => person.id !== existingPerson.id),
            );
          });

        return;
      }
    }

    personsService.addPerson(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));

      setNotificationMessage(`added ${returnedPerson.name}`);

      setTimeout(() => {
        setNotificationMessage(null);
      }, 3000);

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

    if (window.confirm(`delete ${personToDelete.name}?`)) {
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
      <Notification message={notificationMessage} />
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
