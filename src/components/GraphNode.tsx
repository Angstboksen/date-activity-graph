import React, { Component } from "react";
import { DateGraphColor, GraphNodeProps, NodeData } from "../types";

export default class GraphNode extends Component<GraphNodeProps> {
  date: string;
  amount: number;
  color: string;
  colors: DateGraphColor[];
  nodeSize: number;
  onClick: Function | undefined;

  constructor(props: GraphNodeProps) {
    super(props);
    const { date, amount } = props.data;
    this.date = new Date(date).toDateString();
    this.amount = amount;
    this.colors = this.props.colors;
    this.nodeSize = props.nodeSize;
    this.color = this.setColor(amount);
    this.onClick = this.props.onClick;
  }

  setColor = (amount: number): string => {
    for (let i = 0; i < this.colors.length; i++) {
      if (amount > this.colors[i].amount) {
        return this.colors[i].color;
      }
    }
    return "#aaa";
  };

  handleClick = () => {
    if (this.onClick) {
      const callbackData: NodeData = {
        date: this.date,
        amount: this.amount,
      };
      this.onClick(callbackData);
    }
  };

  render = () => (
    <div
      className="graph-node tooltip"
      style={{
        width: `${this.nodeSize}px`,
        height: `${this.nodeSize}px`,
        backgroundColor: this.color,
      }}
      onClick={this.handleClick}
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
