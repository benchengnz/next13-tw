import type { Meta, StoryObj } from "@storybook/react";
import CardDisplay from "./CardDisplay";

const meta = {
  title: "Components/CardDisplay",
  component: CardDisplay,
  tags: ["autodocs"],
} satisfies Meta<typeof CardDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {};
