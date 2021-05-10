export interface DateActivityGraphProps {
  data: NodeData[];
  nodeSize?: number;
  colors?: DateGraphColor[];
}

export interface GraphNodeProps {
  data: NodeData;
  nodeSize: number;
  colors: DateGraphColor[];
}

export type DateGraphColor = {
  amount: number;
  color: string;
};

export interface GraphNodeRowProps {
  data: NodeData[];
  months: MonthLabelData[];
  index: number;
  nodeSize: number;
  colors: DateGraphColor[];
}

export interface GraphNodeTableProps {
  data: NodeData[];
  nodeSize: number;
  colors: DateGraphColor[];
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
