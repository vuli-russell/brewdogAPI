import React from "react";
import { render } from "@testing-library/react";
import Stat from "./Stat";

describe("Stat tests", () => {
  it("should render", () => {
    expect(render(<Stat />)).toBeTruthy();
  });
});
