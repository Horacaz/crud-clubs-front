import { render, screen } from "@testing-library/react";
import Home from "../Home";
import useClubs from "../../../hooks/useClubs";
import { MemoryRouter } from "react-router-dom";
jest.mock("../../../hooks/useClubs");

const useClubsMock = useClubs as jest.Mock;

beforeEach(() => {
  useClubsMock.mockReturnValue({
    loading: false,
    data: [
      {
        name: "Aston Villa FC",
        country: "England",
        crestSrc: "",
        id: 1,
      },
    ],
  });
});
describe("Home", () => {
  test("Home component renders correctly", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    screen.getByText("There are currently 1 clubs");
    screen.getByText("Aston Villa FC");
  });
});
