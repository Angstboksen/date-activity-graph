import React from "react";
import DateActivityGraph from "date-activity-graph";
import { nodedata } from "./testdata/data";
import "./main.css";

function App() {
  return (
    <div className="App">
      <DateActivityGraph data={nodedata} onClick={(data: any) => console.log(data)}/>
    </div>
  );
}

export default App;
