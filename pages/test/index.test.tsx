import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Test from "./index";

describe("Test page", () => {
  it("render successfully", () => {
    render(<Test />);
    expect(screen.getByText("Test page")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Counter: 0")).toBeInTheDocument();
  });

  it("increments counter", () => {
    render(<Test />);
    // Here we're using getByRole to select the button
    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);
    expect(screen.getByText("Counter: 1")).toBeInTheDocument();
  });
});
