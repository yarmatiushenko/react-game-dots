import React from "react";
import Spinner from "../Spinner/Spinner";
import './style.css';
import PropTypes from 'prop-types';

const GameWinners = ({winners, loading}) => {

  return (
    <div className="winner-wrapper">
      <h2>Leader Board</h2>
      {loading ? <Spinner/> :
        winners.map((item) => {
          return (
            <div key={item.id} className="winners">
              <div className="winners-item">{item.winner}</div>
              <div className="winners-item">{item.date}</div>
            </div>
          );
        })
      }
    </div>
  );
};

export default GameWinners;

GameWinners.propTypes = {
  winners: PropTypes.array,
  loading: PropTypes.bool,
};



