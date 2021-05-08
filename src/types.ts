
export interface NodeData {
  date: Date | string;
  amount: number;
  color?: string;
  nodeWidth?: number;
  nodeHeight?: number;
}

export interface MonthLabelData {
  month: number;
  index: number;
}

export type NodeDataWithMonth = { data: NodeData[]; month: string };
