// components/PokerCard.stories.tsx
import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import PokerCard, { PokerCardProps } from "./PokerCard";

const meta = {
  title: "Components/PokerCard",
  component: PokerCard,
} satisfies Meta<typeof PokerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberCard: Story = {
  args: {
    value: "8",
  },
};

export const IconCard: Story = {
  args: {
    value: "mug-hot-solid",
  },
};

export const NoValueCard: Story = {
  args: {
    value: "",
  },
};
