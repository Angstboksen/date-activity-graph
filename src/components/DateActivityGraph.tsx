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
  background: string;
  defaultColor: string;
  tooltipLabelNames: string[];
  labelColor: string;

  constructor(props: DateActivityGraphProps) {
    super(props);
    const {
      /*nodeSize,*/ colors,
      background,
      defaultColor,
      tooltipLabelNames,
      labelColor,
    } = props;
    this.nodeSize = /*nodeSize ? nodeSize :*/ 20;
    this.colors = colors ? colors : defaultNodeColors;
    this.colors.sort(
      (a: DateGraphColor, b: DateGraphColor) => b.amount - a.amount
    );
    this.defaultColor = defaultColor ? defaultColor : "#bbb";
    this.background = background ? background : "#555";
    this.tooltipLabelNames = tooltipLabelNames ? tooltipLabelNames : ["play", "plays"];
    if(this.tooltipLabelNames.length !== 2) 
    throw new Error("labelNames has to be an array of two strings")
    this.labelColor = labelColor ? labelColor : "#ddd";
  }

  render = () => (
    <div className="graph-wrapper">
      <div
        className="date-graph-wrapper"
        style={{ background: this.background }}
      >
        <GraphNodeTable
          data={this.props.data}
          nodeSize={this.nodeSize}
          colors={this.colors}
          defaultColor={this.defaultColor}
          onClick={this.props.onClick}
          tooltipLabelNames={this.tooltipLabelNames}
          labelColor={this.labelColor}
        />
      </div>
    </div>
  );
}
