import React from "react";
import DateActivityGraph from "date-activity-graph";
import { nodedata } from "./testdata/data";

function App() {
  return (
    <div className="App">
      <DateActivityGraph data={nodedata} />
    </div>
  );
}

export default App;
