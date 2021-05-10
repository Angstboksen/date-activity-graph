export interface DateActivityGraphProps {
  data: NodeData[];
  nodeSize?: number;
  colors?: string[];
  colorSteps?: number[];
}

export interface GraphNodeProps {
  data: NodeData;
  nodeSize: number;
  colors: string[];
  colorSteps: number[];
}

export interface GraphNodeRowProps {
  data: NodeData[];
  months: MonthLabelData[];
  index: number;
  nodeSize: number;
  colors: string[];
  colorSteps: number[];
}

export interface GraphNodeTableProps {
  data: NodeData[];
  nodeSize: number;
  colors: string[];
  colorSteps: number[];
}

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
