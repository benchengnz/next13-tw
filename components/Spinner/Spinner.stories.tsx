// components/Spinner.stories.tsx
import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import Spinner, { SpinnerProps } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Spinner
export const Default: Story = {
  args: {
    // Default args
  },
};

// Large Blue Spinner
export const LargeBlue: Story = {
  args: {
    size: 100,
    color: "blue",
    caption: "Loading...",
  },
};

// Small Emerald Spinner
export const SmallEmerald: Story = {
  args: {
    size: 20,
    color: "emerald",
    caption: "Please wait...",
  },
};

// Medium Red Spinner
export const MediumRed: Story = {
  args: {
    size: 50,
    color: "red",
    caption: "Processing...",
  },
};
