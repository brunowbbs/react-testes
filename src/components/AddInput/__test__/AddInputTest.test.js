import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  //Testando renderização do input
  test("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  //Testando onChange do input
  test("should be able to type in input", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

    //simulando evento de evento de onChange
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });

    expect(inputElement.value).toBe("Go Grocery Shopping");
  });

  //Testando limpeza do input apos adição da tarefa
  test("should have empty input when add button is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    //simulando evento de evento de onChange
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });

    //simulando click no botão
    fireEvent.click(buttonElement);

    expect(inputElement.value).toBe("");
  });
});
