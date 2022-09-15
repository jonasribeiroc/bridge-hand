import React from "react";
import { render, screen } from "@testing-library/react";
import { Deck } from "./";

describe("when rendered with props", () => {
  it("should print deck component", () => {
    render(<Deck type='N' data={[]} total={0}/>); 
    expect(screen.getByTestId('deck-N')).toBeInTheDocument();
  });
});