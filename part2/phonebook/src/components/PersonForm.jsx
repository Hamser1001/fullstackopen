const PersonForm = ({ nameHandle, numberHandle, buttonClick }) => {
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
    </form>
  );
};

export default PersonForm;
