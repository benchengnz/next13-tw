// Toast.stories.tsx
import React, { useState, useEffect } from "react";
import { StoryObj, Meta } from "@storybook/react";
import Toast from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    message: {
      control: "text",
      defaultValue: "This is a toast message!",
    },
    duration: {
      control: "number",
      defaultValue: 5000,
    },
  },
};

export default meta;

const ToastWithState: React.FC<{ message: string; duration: number }> = ({
  message,
  duration = 3000,
}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!show) return null;

  return (
    <Toast
      message={message}
      duration={duration}
      onClose={() => setShow(false)}
    />
  );
};

export const Default: StoryObj<typeof meta> = {
  render: (args) => (
    <ToastWithState message={args.message} duration={args.duration || 3000} />
  ),
};
