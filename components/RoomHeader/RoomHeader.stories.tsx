import type { Meta, StoryObj } from "@storybook/react";
import RoomHeader from "./RoomHeader";
const meta = {
  title: "Components/RoomHeader",
  component: RoomHeader,
} satisfies Meta<typeof RoomHeader>;

export default meta;
type Story = StoryObj<typeof meta>;
export const ShowHeader: Story = {
  args: {
    currentUrl: "http://localhost:3000/rooms/-Nhk-cn2V49nbtVlCNJz",
    userName: "Joe Frank",
    roomName: "Fancy room",
    avatar: "",
  },
};

export const ShowHeaderWithAvatar: Story = {
  args: {
    currentUrl: "http://localhost:3000/rooms/-Nhk-cn2V49nbtVlCNJz",
    userName: "Joe Frank",
    roomName: "Fancy room",
    avatar: "/images/avatars/dog-avatar-1.png",
  },
};
