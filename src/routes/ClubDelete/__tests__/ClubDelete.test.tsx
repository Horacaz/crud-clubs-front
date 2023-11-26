import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import useViewClub from "../../../hooks/useViewClub";
import ClubDelete from "../ClubDelete";

jest.mock("../../../hooks/useViewClub");

const useViewClubMock = useViewClub as jest.Mock;

beforeEach(() => {
  useViewClubMock.mockReturnValue({
    loading: false,
    data: {
      name: "Aston Villa FC",
      crestSrc:
        "https://upload.wikimedia.org/wikipedia/de/9/9f/Aston_Villa_logo.svg",
    },
  });
});
describe("ClubDelete", () => {
  test("It renders component correctly", () => {
    render(
      <BrowserRouter>
        <ClubDelete />
      </BrowserRouter>,
    );
    screen.getByText("Are you sure you want to delete?");
    screen.getByText("Aston Villa FC");
  });
});
