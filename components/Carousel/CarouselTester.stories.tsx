// components/CarouselTester.stories.tsx
import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import CarouselTester from "./CarouselTester";

const meta = {
  title: "Components/CarouselTester",
  component: CarouselTester,
} as Meta<typeof CarouselTester>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // Since CarouselTester does not have props, we don't need to set args here.
};
