import React, { Component } from "react";
import { NodeData } from "../types";
import GraphNode from "./GraphNode";

interface GraphNodeRowProps {
  data: NodeData[];
}

export default class GraphNodeRow extends Component<GraphNodeRowProps> {
  data: NodeData[];

  constructor(props: GraphNodeRowProps) {
    super(props);
    this.data = props.data;
  }

  render = () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {this.data.map((it: NodeData, idx: number) => (
        <GraphNode data={it} key={idx} />
      ))}
    </div>
  );
}
