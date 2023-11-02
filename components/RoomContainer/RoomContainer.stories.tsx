import type { Meta, StoryObj } from "@storybook/react";

import RoomContainer from "./RoomContainer";
const meta = {
  title: "Components/RoomContainer",
  component: RoomContainer,
} satisfies Meta<typeof RoomContainer>;

export default meta;
type Story = StoryObj<typeof RoomContainer>;

export const Primary: Story = {
  args: {
    roomId: "-Nhk-cn2V49nbtVlCNJz",
    userName: "Ben",
  },
};
