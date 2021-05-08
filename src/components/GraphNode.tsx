import React, { Component } from "react";
import { NodeData } from "../types";

interface GraphNodeProps {
  data: NodeData;
  nodeSize: number;
  colors: string[];
  colorSteps: number[];
}

export default class GraphNode extends Component<GraphNodeProps> {
  date: string;
  amount: number;
  color: string;
  colors: string[];
  colorSteps: number[];
  nodeSize: number;

  constructor(props: GraphNodeProps) {
    super(props);
    const { date, amount } = props.data;
    this.date = new Date(date).toDateString();
    this.amount = amount;
    this.colors = this.props.colors;
    this.colorSteps = this.props.colorSteps;
    this.nodeSize = props.nodeSize;
    this.color = this.setColor(amount);
  }

  setColor = (amount: number): string => {
    for (let i = 0; i < this.colorSteps.length; i++) {
      if (amount > this.colorSteps[i]) {
        return this.colors[i];
      }
    }
    return "#aaa";
  };

  render = () => (
    <div
      className="graph-node tooltip"
      style={{
        width: `${this.nodeSize}px`,
        height: `${this.nodeSize}px`,
        backgroundColor: this.color,
      }}
    >
      <span className="tooltiptext">
        <strong>
          {this.amount} {this.amount === 1 ? "play" : "plays"}
        </strong>{" "}
        on {this.date}
      </span>
    </div>
  );
}
