import React, { Component } from "react";
import {
  GraphNodeTableProps,
  MonthLabelData,
  NodeData,
  WeekdayNodeRowProps,
} from "../types";
import { emptyDay, now, sameDay, WEEKDAYS, yearAgo } from "../utils/helpers";
import GraphNodeRow from "./GraphNodeRow";

export default class GraphNodeTable extends Component<GraphNodeTableProps> {
  data: NodeData[];
  dataParts: NodeData[][];
  months: MonthLabelData[] = [];

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
    let count = 0;

    for (
      let runningDate = new Date(yearAgo);
      runningDate <= now;
      runningDate.setDate(runningDate.getDate() + 1)
    ) {
      const currentMonth: number = runningDate.getMonth();
      if (
        !this.months.find((curr: MonthLabelData) => curr.month === currentMonth)
      ) {
        const created: MonthLabelData = {
          month: currentMonth,
          index: year.length,
        };
        if (currentMonth !== now.getMonth() || this.months.length > 0)
          this.months.push(created);
      }
      const checkIfData: NodeData | undefined = this.data.find((it: NodeData) =>
        sameDay(new Date(it.date), runningDate)
      );

      const filledData: NodeData = checkIfData ? checkIfData : emptyDay(count);
      week.push(filledData);

      if (runningDate.getDay() === 0 || count === 365) {
        year.push(week);
        week = [];
      }
      count++;
    }
    this.setState({ dataParts: year });
  };

  render = () => (
    <div className="graph-node-wrapper">
      <WeekdayNodeRow nodeSize={this.props.nodeSize} />
      <div className="graph-node-table">
        {this.state.dataParts.map((dataList: NodeData[], idx: number) => (
          <GraphNodeRow
            data={dataList}
            nodeSize={this.props.nodeSize}
            colors={this.props.colors}
            index={idx}
            months={this.months}
            onClick={this.props.onClick}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}

const WeekdayNodeRow: React.FC<WeekdayNodeRowProps> = ({ nodeSize }) => {
  return (
    <div className="weekday-row">
      {WEEKDAYS.map((day: string) => (
        <div
          className="weekday-node not-selectable"
          style={{
            width: `${nodeSize}px`,
            height: `${nodeSize}px`,
          }}
        >
          {day}
        </div>
      ))}
    </div>
  );
};