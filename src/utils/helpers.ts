import { NodeData } from "../types";

export const sameDay = (first: Date, second: Date): boolean => {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
};

export const emptyDay = (date: Date): NodeData => {
  return { date, amount: 0 };
};

export const now = new Date();
export const yearAgo: Date = new Date(
  new Date().setFullYear(new Date().getFullYear() - 1)
);