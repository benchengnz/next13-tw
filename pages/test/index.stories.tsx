import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import Test from "./index";

const meta = {
  title: "Page/Test",
  component: Test,
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof Test>;

export const Primary = {};

export const TestClick: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const clickButton = await canvas.getByRole("button", { name: /click me/i });
    await userEvent.click(clickButton);
  },
};
