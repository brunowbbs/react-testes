import { render, screen } from "@testing-library/react";
import Header from "../Header";

/////// QUERIES

describe("Header", () => {
  //Pegando elemento pelo texto
  test("should render same text passed into title prop", () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
});

//Pegando elemento pela role (Se tiver mais de um elemento para a mesma role, o teste não passa)
/*test("should render same text passed into title prop 2", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getAllByRole("heading");
  expect(headingElement.length).toBe(2);
});*/

//Pegando elemento pela role (com mais de uma igual)
/*test("should render same text passed into title prop 3", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading", { name: "My Header" });
  expect(headingElement).toBeInTheDocument();
});*/

/*test("should render same text passed into title prop 3", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});*/

/*test("should render same text passed into title", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId("header-2");
  expect(headingElement).toBeInTheDocument();
});*/

//Find By
/*test("should render same text passed into title prop | findby", async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});*/

//Query by
//Procurando um elemento qualquer dentro do app
/*test("should render same text passed into title prop | queryby", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.queryByText(/cachorro/i);
  expect(headingElement).not.toBeInTheDocument();
});*/
