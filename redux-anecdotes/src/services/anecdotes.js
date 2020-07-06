import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getOne = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const createNew = async (content) => {
  const object = { content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const vote = async (id) => {
  const anecdotes = await getAll();
  const updatedObject = anecdotes.find((anecdote) => anecdote.id === id);
  updatedObject.votes += 1;
  await axios.put(`${baseUrl}/${id}`, updatedObject);
  return await getOne(id);
};

export default { getAll, createNew, vote };
