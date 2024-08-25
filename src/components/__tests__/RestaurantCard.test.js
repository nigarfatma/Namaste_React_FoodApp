import { render, screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MENU_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render restaurantCard component with props data", () => {
  render(<ResturantCard MENU_DATA={MENU_DATA} />);
  const name = screen.getByText("Chinese Wok");
  expect(name).toBeInTheDocument();
});

// it("should render restaurantCard component with Promoted Label ",()=>{
// test HOC : with Promoted Label
// })
