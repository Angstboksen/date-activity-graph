# ⌛ date-activity-graph

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/AngstBoksen/JuanitaMusic/graphs/commit-activity)
[![GitHub contributors](https://img.shields.io/github/contributors/Angstboksen/date-activity-graph.svg)](https://GitHub.com/Angstboksen/date-activity-graph/graphs/contributors/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/Angstboksen/date-activity-graph/pulls)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

This component will make it possible to create a low-key activity graph based on your own data. You can customize colors and more so fit your needs. The only thing needed is a dataset with dates and amounts. This component is made because no nice alternatives existed. It is currently under development - so some of the planned functionality is yet to be included

## 📰 Install

```bash
npm i date-activity-graph
```

## 💎Usage

![image](https://user-images.githubusercontent.com/41127847/118047027-74175400-b37a-11eb-848d-65a0e954b90c.png)


### ✨Basic

The only thing you need is to provide an array with objects having a date and the amount of hits (this will determine the color).

The NodeData interface has this structure:

```ts
interface NodeData {
  date: Date | string;
  amount: number;
}
```

This is an example dataset:

```ts
const nodedata: NodeData[] = {
    date: "2020/7/1",
    amount: 0,
  },
  {
    date: "2020/7/2",
    amount: 1,
  },
  {
    date: "2020/7/3",
    amount: 10,
  },
```

This shows the usage of a basic DateActivityGraph

```tsx
import DateActivityGraph from "date-activity-graph";

const Root: React.FC = () => {
  return <DateActivityGraph data={nodedata} />;
};
```

### 🎐Props

You can also customize the table with props. It is possible to change the colors for every part of the table. This means the default color for the nodes, the background for the table and everything else. See the possible props below:

```ts
interface DateActivityGraphProps {
  data: NodeData[]; // The data to display
  colors?: DateGraphColor[]; // Array of color steps to change color. See below for example
  background?: string; // Background of table
  defaultColor?: string; // Defaultcolor of nodes
  tooltipLabelNames?: string[]; // An array with a length of 2 explaining what to call the hits (default: ["play", "plays"]).
  labelColor?: string; // Color of the labels (weekdays, months and tooltip)
  onClick?: (data: NodeData) => void; // Callback function
}
```

The DateGraphColor type has this structure:
```ts
type DateGraphColor = {
  amount: number;
  color: string;
};
```

## 🎈Examples

### Red background and blue labels

```tsx
import DateActivityGraph from "date-activity-graph";

const Root: React.FC = () => {
  return (
    <DateActivityGraph background="red" labelColor="blue" data={nodedata} />
  );
};
```

### All days with more than 5 hits blue and over 10 hits red, default yellow

```tsx
import DateActivityGraph from "date-activity-graph";

const Root: React.FC = () => {

const colors: DateGraphColor[] = [
  { amount: 5, color: "blue" },
  { amount: 10, color: "red" },
];

  return (
    <DateActivityGraph defaultColor="yellow" colors={colors} data={nodedata} />
  );
};
```

### All default, but the label-names should be "hits" instead of "plays"

```tsx
import DateActivityGraph from "date-activity-graph";

const Root: React.FC = () => {

const labels: string[] = ["hit", "hits"] // The first one will occur when the day only has one hit

  return (
    <DateActivityGraph tooltipLabelNames={labels} data={nodedata} />
  );
};
```

## 💡 Misc

[MIT License](./LICENSE)
