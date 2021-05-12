export interface DateActivityGraphProps {
  data: NodeData[];
  //nodeSize?: number;
  colors?: DateGraphColor[];
  background?: string;
  defaultColor?: string;
  tooltipLabelNames?: string[];
  labelColor?: string;
  onClick?: (data: NodeData) => void;
}

export interface GraphNodeProps {
  data: NodeData;
  nodeSize: number;
  colors: DateGraphColor[];
  defaultColor: string;
  tooltipLabelNames: string[];
  labelColor: string;
  onClick?: (data: NodeData) => void;
}

export interface GraphNodeRowProps {
  data: NodeData[];
  months: MonthLabelData[];
  index: number;
  nodeSize: number;
  colors: DateGraphColor[];
  defaultColor: string;
  tooltipLabelNames: string[];
  labelColor: string;
  onClick?: (data: NodeData) => void;
}

export interface GraphNodeTableProps {
  data: NodeData[];
  nodeSize: number;
  colors: DateGraphColor[];
  defaultColor: string;
  tooltipLabelNames: string[];
  labelColor: string;
  onClick?: (data: NodeData) => void;
}

export interface MonthNodeProps {
  month: string;
  nodeSize: number;
  labelColor: string;
}

export interface WeekdayNodeRowProps {
  nodeSize: number;
  labelColor: string;
}

export interface NodeData {
  date: Date | string;
  amount: number;
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
