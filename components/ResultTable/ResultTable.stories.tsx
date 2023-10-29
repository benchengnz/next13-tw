import type { Meta, StoryObj } from "@storybook/react";
import ResultTable from "./ResultTable";

const meta = {
  title: "Components/Result Table",
  component: ResultTable,
} satisfies Meta<typeof ResultTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Result: Story = {
  args: {
    isvisible: false,
    estimates: [
      { name: "ben", estimate: "2" },
      { name: "Edward", estimate: "3" },
      { name: "Elsie", estimate: "3" },
    ],
  },
};
