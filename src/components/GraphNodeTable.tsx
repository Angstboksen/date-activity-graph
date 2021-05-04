import React from "react";
import { nodedata } from "../testdata/data";
import { NodeData } from "../types";
import { emptyDay, now, sameDay, yearAgo } from "../utils/helpers";
import GraphNodeColumn from "./GraphNodeColumn";

interface GraphNodeTableProps {
  data: NodeData[];
}

const GraphNodeTable: React.FC<GraphNodeTableProps> = ({ data }) => {
  const splitData = (): NodeData[][] => {
    const year: NodeData[][] = [];
    let week: NodeData[] = [];

    data.sort(
      (a: NodeData, b: NodeData) => b.date.getTime() - a.date.getTime()
    );

    for (let d = yearAgo; d <= now; d.setDate(d.getDate() + 1)) {
      const checkIfData: NodeData | undefined = data.find((it: NodeData) =>
        sameDay(it.date, d)
      );
      const filledData: NodeData = checkIfData ? checkIfData : emptyDay(d);
      week.push(filledData);
      if (week.length % 7 == 0 || year.length === 365) {
        year.push(week);
        week = [];
      }
    }
    return year;
  };

  const dataParts: NodeData[][] = splitData();

  return (
    <div style={{ display: "flex" }} className="hea">
      {dataParts.map((dataList: NodeData[], idx: number) => (
        <GraphNodeColumn data={dataList} key={idx} />
      ))}
    </div>
  );
};

export default GraphNodeTable;
