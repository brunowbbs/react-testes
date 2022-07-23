import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

//INTEGRATION TEST

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

describe("Todo", () => {
  test("should Todo", () => {
    render(<MockTodo />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    fireEvent.change(inputElement, { target: { value: "Go Grocery" } });
    fireEvent.click(buttonElement);

    const divElement = screen.getByText(/Go Grocery/i);
    expect(divElement).toBeInTheDocument();
  });

  test("should render multiple elements", () => {
    render(<MockTodo />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    fireEvent.change(inputElement, { target: { value: "Go Grocery 1" } });
    fireEvent.click(buttonElement);

    fireEvent.change(inputElement, { target: { value: "Go Grocery 2" } });
    fireEvent.click(buttonElement);

    fireEvent.change(inputElement, { target: { value: "Go Grocery 3" } });
    fireEvent.click(buttonElement);

    const divElement = screen.getAllByTestId("task-container");
    expect(divElement.length).toBe(3);
  });

  test("tasks should not have completed class when initally rendered", () => {
    render(<MockTodo />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    fireEvent.change(inputElement, { target: { value: "Go Grocery 1" } });
    fireEvent.click(buttonElement);

    const divElement = screen.getByText("Go Grocery 1");
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  //Adicionando classe CSS ao clicar na tarefa para concluí-la.
  test("tasks should not have completed class when initally rendered2", () => {
    render(<MockTodo />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    fireEvent.change(inputElement, { target: { value: "Go Grocery 1" } });
    fireEvent.click(buttonElement);

    const divElement = screen.getByText("Go Grocery 1");
    fireEvent.click(divElement);

    expect(divElement).toHaveClass("todo-item-active");
  });
});
