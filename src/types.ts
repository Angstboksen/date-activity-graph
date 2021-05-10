export interface DateActivityGraphProps {
  data: NodeData[];
  nodeSize?: number;
  colors?: DateGraphColor[];
  width?: number;
  height?: number;
  onClick?: (data: NodeData) => void;
}

export interface GraphNodeProps {
  data: NodeData;
  nodeSize: number;
  colors: DateGraphColor[];
  onClick?: (data: NodeData) => void;
}

export interface GraphNodeRowProps {
  data: NodeData[];
  months: MonthLabelData[];
  index: number;
  nodeSize: number;
  colors: DateGraphColor[];
  onClick?: (data: NodeData) => void;
}

export interface GraphNodeTableProps {
  data: NodeData[];
  nodeSize: number;
  colors: DateGraphColor[];
  onClick?: (data: NodeData) => void;
}

export interface MonthNodeProps {
  month: string;
  nodeSize: number;
}

export interface WeekdayNodeRowProps {
  nodeSize: number;
}

export interface NodeData {
  date: Date | string;
  amount: number;
  color?: string;
  nodeWidth?: number;
  nodeHeight?: number;
}

export type DateGraphColor = {
  amount: number;
  color: string;
};

export interface MonthLabelData {
  month: number;
  index: number;
}

export type NodeDataWithMonth = { data: NodeData[]; month: string };
