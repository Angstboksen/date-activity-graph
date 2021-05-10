import React, { Component } from "react";
import { DateActivityGraphProps, NodeData } from "../types";
import GraphNodeTable from "./GraphNodeTable";
import "../main.css";

export const defaultNodeColors: string[] = [
  "#1f7ef5",
  "#8c6de4",
  "#8ac702",
  "#0bbe1f",
  "#ef7fa9",
  "#be2d6a",
];

export const defaultNodeColorSteps: number[] = [0, 15, 30, 45, 60, 75];

export default class DataActivityGraph extends Component<DateActivityGraphProps> {
  data: NodeData[];
  nodeSize: number;
  colors: string[];
  colorSteps: number[];

  constructor(props: DateActivityGraphProps) {
    super(props);
    const { data, nodeSize, colors, colorSteps } = props;
    this.data = data;
    this.nodeSize = nodeSize ? nodeSize : 20;
    this.colors = colors ? colors : defaultNodeColors;
    this.colorSteps = colorSteps ? colorSteps : defaultNodeColorSteps;
    this.colorSteps.sort((a, b) => b - a);
  }

  render = () => (
    <div style={{ display: "flex", justifyContent: "center", width: "1150px" }}>
      <div className="date-graph-wrapper">
        <GraphNodeTable
          data={this.data}
          nodeSize={this.nodeSize}
          colors={this.colors}
          colorSteps={this.colorSteps}
        />
      </div>
    </div>
  );
}
