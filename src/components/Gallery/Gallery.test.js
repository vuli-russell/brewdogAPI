import React from "react";
import { render } from "@testing-library/react";
import Gallery from "./Gallery";

describe("Gallery tests", () => {
  it("should render", () => {
    expect(render(<Gallery />)).toBeTruthy();
  });
});
