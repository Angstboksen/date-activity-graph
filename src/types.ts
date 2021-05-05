import { NodeColors } from "./components/GraphNode";

export interface NodeData {
  date: Date | string;
  amount: number;
  color?: NodeColors;
  nodeWidth?: number;
  nodeHeight?: number;
}
