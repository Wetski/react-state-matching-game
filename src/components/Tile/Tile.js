import React from "react";

import "./Tile.css";

const Tile = (props) => {
  const colourState =
    props.selected || props.matched ? { backgroundColour: props.color } : null;

  return (
    <div className="Tile" style={colourState}>
      {props.selected || props.matched ? <props.svg /> : null}
    </div>
  );
};

export default Tile;
