import React, { Component } from "react";
import { NodeData } from "../types";
import { emptyDay, now, sameDay, yearAgo } from "../utils/helpers";
import { GraphNodeTableProps } from "./DateActivityGraph";
import GraphNodeRow from "./GraphNodeRow";

export default class GraphNodeTable extends Component<GraphNodeTableProps> {
  data: NodeData[];
  dataParts: NodeData[][];

  state = {
    dataParts: [],
  };

  constructor(props: GraphNodeTableProps) {
    super(props);
    this.data = props.data;
  }

  componentDidMount() {
    this.splitData();
  }

  splitData = (): void => {
    const year: NodeData[][] = [];
    let week: NodeData[] = [];

    for (let d = yearAgo; d <= now; d.setDate(d.getDate() + 1)) {
      const checkIfData: NodeData | undefined = this.data.find((it: NodeData) =>
        sameDay(new Date(it.date), d)
      );
      const filledData: NodeData = checkIfData ? checkIfData : emptyDay(d);
      week.push(filledData);
      if (week.length % 7 == 0 || year.length === 52) {
        year.push(week);
        week = [];
      }
    }
    this.setState({ dataParts: year });
  };

  render = () => (
    <div style={{ display: "flex" }}>
      {this.state.dataParts.map((dataList: NodeData[], idx: number) => (
        <GraphNodeRow data={dataList} key={idx} />
      ))}
    </div>
  );
}
