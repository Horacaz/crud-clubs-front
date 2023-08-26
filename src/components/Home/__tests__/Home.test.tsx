import { render, screen } from "@testing-library/react";
import Home from "../Home";
import useClubs from "../../../hooks/useClubs";
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
      },
    ],
  });
});
describe("Home", () => {
  test("Home component renders correctly", () => {
    render(<Home />);
    screen.getByText("There are currently 1 clubs");
    screen.getByText("Aston Villa FC");
  });
});
