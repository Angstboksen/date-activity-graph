import React from "react";
import { NodeData } from "../types";
import GraphNode from "./GraphNode";

interface GraphNodeRowProps {
  data: NodeData[];
}

const GraphNodeColumn: React.FC<GraphNodeRowProps> = ({ data }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data.map((it: NodeData, idx: number) => (
        <GraphNode data={it} key={idx} />
      ))}
    </div>
  );
};

export default GraphNodeColumn;
