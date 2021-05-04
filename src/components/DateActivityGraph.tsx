import React from "react";
import { nodedata } from "../testdata/data";
import GraphNodeTable from "./GraphNodeTable";

const DateActivityGraph: React.FC = () => {
  return (
    <div>
      <GraphNodeTable data={nodedata} />
    </div>
  );
};

export default DateActivityGraph;
