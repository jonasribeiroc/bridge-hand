import React from "react";
import { render, screen } from "@testing-library/react";
import { Game } from "./";

describe("when rendered with props", () => {
  it("should print game component", () => {
    render(<Game />); 
    expect(screen.getByTestId('game')).toBeInTheDocument();
  });
});