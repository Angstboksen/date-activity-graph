import { NodeColors } from "./components/GraphNode";

export interface NodeData {
  date: Date;
  amount: number;
  color?: NodeColors;
  nodeWidth?: number;
  nodeHeight?: number;
}
