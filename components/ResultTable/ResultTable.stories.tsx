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
    estimates: [
      { name: "ben", score: "2" },
      { name: "Edward", score: "3" },
      { name: "Elsie", score: "3" },
    ],
  },
};
