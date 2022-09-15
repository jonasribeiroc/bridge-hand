import React from "react";
import { render, screen } from "@testing-library/react";
import { Card, Numbers, Suits } from "./";

describe("when rendered with props", () => {
  it("should print card component", () => {
    render(<Card suit={Suits.Club} number={Numbers.A} width={120}/>); 
    expect(screen.getByTestId('card-CLUB-A')).toBeInTheDocument();
  });
});