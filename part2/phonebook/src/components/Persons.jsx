const Persons = ({ persons, searchTerm, deleteBtn }) => {
  return (
    <>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        .map((person) => (
          <p key={person.id}>
            {person.name} {person.number}
            <button onClick={() => deleteBtn(person.id)}>delete</button>
          </p>
        ))}
    </>
  );
};

export default Persons;
