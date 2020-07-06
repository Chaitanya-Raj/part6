import anecdoteService from "../services/anecdotes";

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT",
      data: anecdotes,
    });
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch({
      type: "ADD_NEW",
      data: newAnecdote,
    });
  };
};

export const voteOn = (id) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.vote(id);
    dispatch({ type: "VOTE", updatedAnecdote });
  };
};

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "VOTE":
      return state.map((s) =>
        s.id === action.updatedAnecdote.id ? action.updatedAnecdote : s
      );
    case "ADD_NEW":
      return [...state, action.data];
    case "INIT":
      return action.data;
    default:
      return state;
  }
};

export default anecdoteReducer;
