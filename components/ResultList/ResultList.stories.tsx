import type { Meta, StoryObj } from "@storybook/react";
import ResultList from "./ResultList";

const meta = {
  title: "Components/ResultList",
  component: ResultList,
} satisfies Meta<typeof ResultList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
