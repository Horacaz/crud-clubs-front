import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ClubAdd from "../ClubAdd";
import useClubAdd from "../../../hooks/useClubAdd";

jest.mock("../../../hooks/useClubAdd");

const useClubAddMock = useClubAdd as jest.Mock;

beforeEach(() => {
  useClubAddMock.mockReturnValue({
    state: {
      data: null,
      loading: false,
    },
  });
});

describe("ClubAdd", () => {
  test("It renders component correctly", () => {
    render(
      <BrowserRouter>
        <ClubAdd />
      </BrowserRouter>,
    );
    screen.getByLabelText("Club Name");
  });
});
