import React, { Component } from "react";
import { NodeData } from "../types";
import GraphNodeTable from "./GraphNodeTable";
import "../main.css";

export interface GraphNodeTableProps {
  data: NodeData[];
}

export default class DataActivityGraph extends Component<GraphNodeTableProps> {
  data: NodeData[];

  constructor(props: GraphNodeTableProps) {
    super(props);
    this.data = props.data;
  }

  render = () => (
    <div style={{ display: "flex", justifyContent: "center", width: "1150px" }}>
      <div
        className="date-graph-wrapper"
      >
        <GraphNodeTable data={this.data} />
      </div>
    </div>
  );
}
