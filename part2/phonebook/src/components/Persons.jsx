const Persons = ({ persons, searchTerm }) => {
  return (
    <>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        .map((person) => (
          <p key={person.id}>
            {person.name} {person.number}
          </p>
        ))}
    </>
  );
};

export default Persons;
