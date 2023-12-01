import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import useViewClub from "../../../hooks/useViewClub";
import ClubView from "../ClubView";
jest.mock("../../../hooks/useViewClub");

const useViewClubMock = useViewClub as jest.Mock;

beforeEach(() => {
  useViewClubMock.mockReturnValue({
    loading: false,
    data: {
      id: 58,
      country: "England",
      name: "Aston Villa FC",
      shortName: "Aston Villa",
      tla: "AST",
      crestSrc: "crestUrl",
      address: "Villa Park Birmingham B6 6HE",
      phone: "+44 (0121) 3272299",
      website: "http://www.avfc.co.uk",
      email: "45654564",
      founded: 1999,
      clubColors: "Claret / Sky Blue",
      venue: "Villa Park",
      lastUpdated: "2020-05-14T02:41:36Z",
    },
  });
});

describe("ClubView", () => {
  test("ClubView component renders correctly", () => {
    render(
      <BrowserRouter>
        <ClubView />
      </BrowserRouter>,
    );

    screen.getByText("Aston Villa FC");
    screen.getByText("Claret / Sky Blue");
  });
});
