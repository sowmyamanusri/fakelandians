import React from "react";
import { screen, render,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import Confess from "./confess";
import pkg from 'jest-watcher';
import user from '@testing-library/user-event';




describe("Confess Form", () => {
  it("should render the basic fields", () => {
    render(<Confess />);
    expect(
      screen.getByRole("heading", { name: "Confess Form" })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /subject/i })).toBeInTheDocument();
    expect(
      screen.getByRole('combobox', { name: /reason for contact :/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /submit/i })
    ).toBeInTheDocument();
  });
  it('should display the correct number of options', () => {
    render(<Confess/>)
    expect(screen.getAllByRole('option').length).toBe(6)
  })
 
  it('selcted option should display',() =>{
      render(<Confess/>)
    const selectOne = screen.getByRole("combobox", { name: /reason for contact :/i });
    fireEvent.change(selectOne, {
      target: { value: "Not Eating Your Vegetables = 🥗" }
    });
      expect(screen.getByText("Not Eating Your Vegetables = 🥗")).toBeInTheDocument();
    });

});
  