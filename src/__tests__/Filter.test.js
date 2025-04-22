import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "/home/dean/Moringa/Phase2/react-hooks-forms-lab/src/components/Filter.js";

test("the input field acts as a controlled input", () => {
  const mockSearchChange = jest.fn();
  render(<Filter onSearchChange={mockSearchChange} search="" />);

  const input = screen.getByPlaceholderText(/Search/);
  fireEvent.change(input, { target: { value: "testing 123" } });

  expect(mockSearchChange).toHaveBeenCalledWith("testing 123");
});

test("the shopping filters based on the search term to include full matches", () => {
  const mockSearchChange = jest.fn();
  render(<Filter onSearchChange={mockSearchChange} search="" />);

  const input = screen.getByPlaceholderText(/Search/);
  fireEvent.change(input, { target: { value: "Yogurt" } });

  expect(mockSearchChange).toHaveBeenCalledWith("Yogurt");
});

test("the shopping filters based on the search term to include partial matches", () => {
  const mockSearchChange = jest.fn();
  render(<Filter onSearchChange={mockSearchChange} search="" />);

  const input = screen.getByPlaceholderText(/Search/);
  fireEvent.change(input, { target: { value: "Cheese" } });

  expect(mockSearchChange).toHaveBeenCalledWith("Cheese");
});
