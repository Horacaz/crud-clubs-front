import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Error from "../Error";

describe("Error", () => {
  test("It renders component correctly", () => {
    render(
      <BrowserRouter>
        <Error
          error={{ message: "Couldn't get Clubs from API", name: "Error" }}
        />
        ,
      </BrowserRouter>,
    );
    screen.getByRole("heading", {
      name: "Couldn't get Clubs from API",
      level: 3,
    });
  });
});
