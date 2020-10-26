import React from "react";
import { render } from "@testing-library/react";
import BeerDetails from "./BeerDetails";

describe("BeerDetails tests", () => {
  it("should render", () => {
    expect(render(<BeerDetails />)).toBeTruthy();
  });
});
