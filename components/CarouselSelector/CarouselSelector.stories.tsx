// components/CarouselSelector.stories.tsx
import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import CarouselSelector from "./CarouselSelector";

const meta: Meta<typeof CarouselSelector> = {
  title: "Components/CarouselSelector",
  component: CarouselSelector,
};

export default meta;

type Story = StoryObj<typeof meta>;

// Hardcoded list of images for the story
const imagePaths = [
  "/images/avatars/dog-avatar-1.png",
  "/images/avatars/dog-avatar-4.png",
  "/images/avatars/dog-avatar-6.png",
  "/images/avatars/dog-avatar-15.png",
  "/images/avatars/dog-avatar-16.png",
];

export const Default: Story = {
  args: {
    imagePaths: imagePaths,
  },
};
