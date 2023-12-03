// Toast.tsx
import React, { useEffect } from "react";

type ToastProps = {
  message: string;
  duration?: number;
  onClose?: () => void | null;
};

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded shadow-lg">
      {message}
    </div>
  );
};

export default Toast;
