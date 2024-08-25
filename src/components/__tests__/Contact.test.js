import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  it("Should load contact us component", () => {
    render(<Contact />);
    // const button = screen.getByRole("button");
    // another way to find the button
    // const button = screen.getByText("Submit");
    const heading = screen.getByRole("heading");
    // Assertion
    // expect(button).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
  it("Should load button inside contact  component", () => {
    render(<Contact />);
    // const button = screen.getByRole("button");
    // another way to find the button
    const button = screen.getByText("Submit");
    // Assertion
    expect(button).toBeInTheDocument();
  });
  it("Should load input field inside contact  component", () => {
    render(<Contact />);
    // const button = screen.getByRole("button");
    // another way to find the button
    const inputName = screen.getByPlaceholderText("Name");
    // Assertion
    expect(inputName).toBeInTheDocument();
  });
  it("Should load 2 input boxes on the contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log("inputBoxes", inputBoxes[0]);
    // Quering
    // console.log("inputBoxesLength", inputBoxes.length);

    // Assertion
    // expect(inputBoxes).toBeInTheDocument();
    expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes.length).not.toBe(2);
  });
});

// test("Should load contact us component", () => {
//   render(<Contact />);
//   // const button = screen.getByRole("button");
//   // another way to find the button
//   // const button = screen.getByText("Submit");
//   const heading = screen.getByRole("heading");
//   // Assertion
//   // expect(button).toBeInTheDocument();
//   expect(heading).toBeInTheDocument();
// });
