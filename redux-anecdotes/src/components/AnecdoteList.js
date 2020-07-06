import React from "react";
import { connect } from "react-redux";
import { voteOn } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = (props) => {
  const vote = (id) => {
    props.voteOn(id);
    const voted = () => props.anecdotes.find((s) => s.id === id);
    props.setNotification(`you voted for '${voted().content}'`, 10);
  };

  return (
    <div>
      {props.anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  if (state.filter === "") {
    return {
      anecdotes: state.anecdotes,
      filter: state.filter,
    };
  }
  return {
    anecdotes: state.anecdotes.filter((anecdote) =>
      anecdote.content.includes(state.filter)
    ),
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  voteOn,
  setNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
