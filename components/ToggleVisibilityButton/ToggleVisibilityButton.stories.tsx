import type { Meta, StoryObj } from "@storybook/react";
import ToggleVisibilityButton from "./ToggleVisibilityButton";

const meta = {
  title: "Components/ToggleButton",
  component: ToggleVisibilityButton,
} satisfies Meta<typeof ToggleVisibilityButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShowCard: Story = {
  args: {
    isVisible: true,
  },
};

export const HideCard: Story = {
  args: {
    isVisible: false,
  },
};
