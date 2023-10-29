import type { Meta, StoryObj } from "@storybook/react";
import UsernameModal from "./UsernameModal";

const meta = {
  title: "Components/User name modal form",
  component: UsernameModal,
} satisfies Meta<typeof UsernameModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShowForm: Story = {};
