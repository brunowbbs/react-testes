import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks, opacity = 1 }) => (
  <BrowserRouter>
    <TodoFooter
      numberOfIncompleteTasks={numberOfIncompleteTasks}
      opacity={opacity}
    />
  </BrowserRouter>
);

test("should render the correct amount of incomplete tasks", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

test("should render 'task' when the number of incomplete tasks is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeInTheDocument();
});

test("should render 'task' when the number of incomplete tasks is one²", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeTruthy();
});

test("should render 'task' when the number of incomplete tasks is one³", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeVisible();
});

test("should render 'task' when the number of incomplete tasks is one¹²", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toContainHTML("p");
});

test("should render 'task' when the number of incomplete tasks is one¹¹", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toHaveTextContent("1 task left");
});

describe("TodoFooter", () => {
  test("should render 'task' when the number of incomplete tasks is one¹¹¹", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} opacity={0} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).not.toBeFalsy();
  });

  test("should render 'task' when the number of incomplete tasks is one¹¹¹¹", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByTestId("para");

    expect(paragraphElement.textContent).toBe("1 task left");
  });
});
