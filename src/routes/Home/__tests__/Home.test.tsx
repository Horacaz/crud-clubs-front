import { render, screen } from "@testing-library/react";
import Home from "../Home";
import useClubsList from "../../../hooks/useClubsList";
import { MemoryRouter } from "react-router-dom";
jest.mock("../../../hooks/useClubsList");

const useClubsListMock = useClubsList as jest.Mock;

beforeEach(() => {
  useClubsListMock.mockReturnValue({
    loading: false,
    data: [
      {
        name: "Aston Villa FC",
        country: "England",
        crestSrc: "",
        id: 1,
      },
    ],
    error: null,
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
