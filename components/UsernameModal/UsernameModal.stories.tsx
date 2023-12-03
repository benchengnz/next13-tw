import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import UsernameModal from "./UsernameModal";
import { UsernameProvider } from "@/contexts/UsernameContext";

const meta: Meta<typeof UsernameModal> = {
  title: "Components/Username Modal Form",
  component: UsernameModal,
  // Decorators can be applied to the meta object to affect all stories
  decorators: [
    (Story) => (
      <UsernameProvider>
        <Story />
      </UsernameProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ShowForm: Story = {
  // You can also apply decorators to individual stories if needed
  // decorators: [
  //   (Story) => (
  //     <UsernameProvider>
  //       <Story />
  //     </UsernameProvider>
  //   )
  // ],
};
