import { NodeColors } from "./components/GraphNode";

export interface NodeData {
  date: Date | string;
  amount: number;
  color?: NodeColors;
  nodeWidth?: number;
  nodeHeight?: number;
}

export interface MonthLabelData {
  month: number;
  index: number;
}

export type NodeDataWithMonth = { data: NodeData[]; month: string };
