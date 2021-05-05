import React from "react";
import { nodedata } from "../testdata/data";
import GraphNodeTable from "./GraphNodeTable";
import "./main.css";

const DateActivityGraph: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "1150px" }}>
      <div
        style={{
          backgroundColor: "#555",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <GraphNodeTable data={nodedata} />
      </div>
      <p className="red">hejdfskjdhfkjsdhf</p>
    </div>
  );
};

export default DateActivityGraph;
