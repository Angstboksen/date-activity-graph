import React, { Component } from "react";
import { DateActivityGraphProps, DateGraphColor } from "../types";
import GraphNodeTable from "./GraphNodeTable";
import "../main.css";

export const defaultNodeColors: DateGraphColor[] = [
  { amount: 0, color: "#1f7ef5" },
  { amount: 10, color: "#4055d7" },
  { amount: 20, color: "#3d26b3" },
  { amount: 30, color: "#392193" },
  { amount: 40, color: "#291b6e" },
  { amount: 50, color: "#1a0d36" },
  { amount: 1000, color: "gold" },
];

export default class DataActivityGraph extends Component<DateActivityGraphProps> {
  nodeSize: number;
  colors: DateGraphColor[];

  constructor(props: DateActivityGraphProps) {
    super(props);
    const { nodeSize, colors } = props;
    this.nodeSize = nodeSize ? nodeSize : 20;
    this.colors = colors ? colors : defaultNodeColors;
    this.colors.sort(
      (a: DateGraphColor, b: DateGraphColor) => b.amount - a.amount
    );
  }

  render = () => (
    <div className="graph-wrapper">
      <div className="date-graph-wrapper">
        <GraphNodeTable
          data={this.props.data}
          nodeSize={this.nodeSize}
          colors={this.colors}
          onClick={this.props.onClick}
        />
      </div>
    </div>
  );
}
