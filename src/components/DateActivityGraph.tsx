import React, { Component } from "react";
import { DateActivityGraphProps, NodeData, DateGraphColor } from "../types";
import GraphNodeTable from "./GraphNodeTable";
import "../main.css";

export const defaultNodeColors: DateGraphColor[] = [
  { amount: 0, color: "#1f7ef5" },
  { amount: 10, color: "#4055d7" },
  { amount: 20, color: "#3d26b3" },
  { amount: 30, color: "#392193" },
  { amount: 40, color: "#291b6e" },
  { amount: 50, color: "#1a0d36" },
];

export default class DataActivityGraph extends Component<DateActivityGraphProps> {
  data: NodeData[];
  nodeSize: number;
  colors: DateGraphColor[];

  constructor(props: DateActivityGraphProps) {
    super(props);
    const { data, nodeSize, colors } = props;
    this.data = data;
    this.nodeSize = nodeSize ? nodeSize : 20;
    this.colors = colors ? colors : defaultNodeColors;
    this.colors.sort(
      (a: DateGraphColor, b: DateGraphColor) => b.amount - a.amount
    );
  }

  render = () => (
    <div style={{ display: "flex", justifyContent: "center", width: "1150px" }}>
      <div className="date-graph-wrapper">
        <GraphNodeTable
          data={this.data}
          nodeSize={this.nodeSize}
          colors={this.colors}
        />
      </div>
    </div>
  );
}
