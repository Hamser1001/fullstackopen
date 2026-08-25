const PersonForm = ({ nameHandle, numberHandle, buttonClick, newName }) => {
  return (
    <form>
      <div>
        name: <input onChange={nameHandle} />
      </div>
      <div>
        number: <input onChange={numberHandle} />
      </div>
      <div>
        <button type="submit" onClick={buttonClick}>
          add
        </button>
      </div>
      <div>debug: {newName}</div>
    </form>
  );
};

export default PersonForm;
