import React from "react";
import { ProgressPlugin } from "webpack";

import Button from "../Button";
import TileSelector from "../TileSelector";

const OptionsPanel = (props) => (
  <div>
    <TileSelector
      numTiles={props.numTiles}
      handleNumTileChange={props.handleNumTileChange}
    />
    <Button startGame={props.startGame} playing={props.playing} />
  </div>
);

export default OptionsPanel;
