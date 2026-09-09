import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const addPerson = (person) => {
  return axios.post(baseUrl, person);
};

export default { addPerson, getAll };
