import React from "react";
import { screen, render } from "@testing-library/react";
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
  it("onSubmit is called when all the fields pass validation", () => {
    render(<Confess />)
      user.type(getSubject(),'confess');
      const dropdown =screen.getByRole('combobox', { name: /reason for contact :/i });
      expect(screen.getByRole('option', { name: 'Mild Public Rudeness = 🤪' }).selected).toBe(true);
      user.selectOptions(dropdown,within(dropdown).getByRole('option',{name:"Not Eating Your Vegetables = 🥗/i"}))
  })

  function getSubject() {
    return screen.getByRole("textbox", { name: /subject/i });
  }
});

