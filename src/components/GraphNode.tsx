import React, { Component } from "react";
import { NodeData } from "../types";

interface GraphNodeProps {
  data: NodeData;
}

export enum NodeColors {
  WHITE = "#ddd",
  GRAY = "#aaa",
  YELLOW = "yellow",
  LIGHTGREEN = "lightgreen",
  GREEN = "green",
  DARKGREEN = "darkgreen",
  ORANGE = "orange",
  PURPLE = "purple",
  DARKRED = "darkred",
}

export default class GraphNode extends Component<GraphNodeProps> {
  date: string;
  amount: number;
  color: NodeColors;
  nodeWidth: number | undefined;
  nodeHeight: number | undefined;

  constructor(props: GraphNodeProps) {
    super(props);
    const { date, amount, color, nodeWidth, nodeHeight } = props.data;
    this.date = new Date(date).toDateString();
    this.amount = amount;
    this.color = color ? color : this.setColor(amount);
    this.nodeWidth = nodeWidth;
    this.nodeHeight = nodeHeight;
  }

  setColor = (amount: number): NodeColors => {
    let color: NodeColors = NodeColors.WHITE;
    if (amount > 100) color = NodeColors.DARKRED;
    else if (amount > 40) color = NodeColors.PURPLE;
    else if (amount > 35) color = NodeColors.ORANGE;
    else if (amount > 30) color = NodeColors.DARKGREEN;
    else if (amount > 20) color = NodeColors.GREEN;
    else if (amount > 15) color = NodeColors.LIGHTGREEN;
    else if (amount > 10) color = NodeColors.YELLOW;
    else if (amount > 0) color = NodeColors.GRAY;
    return color;
  };

  render = () => (
    <div
      className="graph-node tooltip"
      style={{
        width: this.nodeWidth ? this.nodeWidth : "20px",
        height: this.nodeHeight ? this.nodeHeight : "20px",
        backgroundColor: this.color,
      }}
    >
      <span className="tooltiptext">
        <strong>
          {this.amount} {this.amount > 0 ? "plays" : "play"}
        </strong>{" "}
        on {this.date}
      </span>
    </div>
  );
}
