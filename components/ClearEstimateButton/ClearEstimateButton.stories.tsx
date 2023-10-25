import type { Meta, StoryObj } from "@storybook/react";

import ClearEstimateButton from "./ClearEstimateButton";

const meta = {
  title: "Components/Clear Button",
  component: ClearEstimateButton,
} satisfies Meta<typeof ClearEstimateButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClearButton: Story = {};
