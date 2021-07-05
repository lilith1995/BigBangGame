import PropTypes from "prop-types";

import "./GameOption.scss";

const GameOption = ({ Icon, color, onClick }) => {
  return (
    <div
      className="game-option"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <div className="game-option__icon-container">
        <Icon />
      </div>
    </div>
  );
};

GameOption.propTypes = {
  Icon: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default GameOption;
