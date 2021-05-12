import React, { Component } from "react";
import {
  GraphNodeRowProps,
  MonthLabelData,
  MonthNodeProps,
  NodeData,
} from "../types";
import { MONTHS } from "../utils/helpers";
import GraphNode from "./GraphNode";

export default class GraphNodeRow extends Component<GraphNodeRowProps> {
  data: NodeData[];
  months: MonthLabelData[];
  month: string;
  index: number;

  constructor(props: GraphNodeRowProps) {
    super(props);
    this.data = props.data;
    this.months = props.months;
    this.index = props.index;
    this.month = this.findMonth();
  }

  findMonth = (): string => {
    const found: MonthLabelData | undefined = this.months.find(
      (f: MonthLabelData) => this.index === f.index
    );
    return found ? MONTHS[found.month] : "";
  };

  render = () => (
    <div className="graph-node-row not-selectable">
      <MonthNode month={this.month} nodeSize={this.props.nodeSize} />
      {this.data.map((it: NodeData, idx: number) => (
        <GraphNode
          data={it}
          nodeSize={this.props.nodeSize}
          colors={this.props.colors}
          onClick={this.props.onClick}
          key={idx}
        />
      ))}
    </div>
  );
}

const MonthNode: React.FC<MonthNodeProps> = ({ month, nodeSize }) => {
  return (
    <div
      style={{
        width: `${nodeSize}px`,
        height: `${nodeSize}px`,
        color: "#ddd",
        margin: "5px 0",
        paddingLeft: "3px",
        transform: "rotate(-90deg)",
      }}
    >
      {month}
    </div>
  );
};
