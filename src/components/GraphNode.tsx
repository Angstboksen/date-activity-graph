import React from "react";
import { NodeData } from "../types";

interface GraphNodeProps {
  data: NodeData;
}

export enum NodeColors {
  WHITE = "white",
  GRAY = "#aaa",
  YELLOW = "yellow",
  LIGHTGREEN = "lightgreen",
  GREEN = "green",
  DARKGREEN = "darkgreen",
  ORANGE = "orange",
  PURPLE = "purple",
  DARKRED = "darkred",
}

const GraphNode: React.FC<GraphNodeProps> = ({ data }) => {
  const { date, amount, color, nodeWidth, nodeHeight } = data;

  const setColor = (amount: number): NodeColors => {
    let color: NodeColors = NodeColors.WHITE;
    if (amount > 50) color = NodeColors.DARKRED;
    else if (amount > 40) color = NodeColors.PURPLE;
    else if (amount > 35) color = NodeColors.ORANGE;
    else if (amount > 30) color = NodeColors.DARKGREEN;
    else if (amount > 20) color = NodeColors.GREEN;
    else if (amount > 15) color = NodeColors.LIGHTGREEN;
    else if (amount > 10) color = NodeColors.YELLOW;
    else if (amount > 0) color = NodeColors.GRAY;
    return color;
  };

  const useColor: NodeColors = color ? color : setColor(amount);

  return (
    <div
      style={{
        width: nodeWidth ? nodeWidth : "20px",
        height: nodeHeight ? nodeHeight : "20px",
        border: "0.3px black solid",
        margin: "0.5px",
        backgroundColor: useColor,
      }}
    ></div>
  );
};

export default GraphNode;
