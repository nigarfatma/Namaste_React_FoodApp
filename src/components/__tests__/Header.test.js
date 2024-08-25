import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // const loginButton = screen.getByRole("button");
  // another way to define loginbutton
  // const loginButton = screen.getByText("Login");
  // if you have multiple button but we test specific button then we use in this way
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

// cart button with 0n items
it("Should render Header Component with a Cart items 0 button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartButton = screen.getByText("Cart-(0 items)");
  expect(cartButton).toBeInTheDocument();
});

// cart button
it("Should render Header Component with a Cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // const cartButton = screen.getByText("Cart-(0 items)");
  const cartButton = screen.getByText(/Cart/);
  expect(cartButton).toBeInTheDocument();
});

// check button login to logout and viceversa
it("should change Login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // const loginButton = screen.getByRole("button");
  // another way to define loginbutton
  // const loginButton = screen.getByText("Login");
  // if you have multiple button but we test specific button then we use in this way
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const loginoutButton = screen.getByRole("button", { name: "LogOut" });
  expect(loginoutButton).toBeInTheDocument();
});
