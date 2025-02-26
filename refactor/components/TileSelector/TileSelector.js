import React from "react";
import "./TileSelector.css";
import useHover from "../../hooks";
import GameContext from "../../GameContext";

const TileSelector = (props) => {
  const [ref, hovered] = useHover();
  const dropdown = hovered ? (
    <GameContext.Consumer>
      {({ handleNumTileChange }) => (
        <div className="tileSelectorContent">
          <div className="number" onClick={() => handleNumTileChange(4)}>
            4
          </div>
          <div className="number" onClick={() => handleNumTileChange(16)}>
            16
          </div>
          <div className="number" onClick={() => handleNumTileChange(36)}>
            36
          </div>
        </div>
      )}
    </GameContext.Consumer>
  ) : null;

  return (
    <GameContext.Consumer>
      {({ numTiles }) => (
        <div className="tileSelector">
          <div>Number of Tiles</div>
          <div className="tileSelectorDropdown" ref={ref}>
            {numTiles}
            {dropdown}
          </div>
        </div>
      )}
    </GameContext.Consumer>
  );
};

export default TileSelector;
