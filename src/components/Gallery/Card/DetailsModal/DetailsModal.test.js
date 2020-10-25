import React from "react";
import { render } from "@testing-library/react";
import DetailsModal from "./DetailsModal";

describe("DetailsModal tests", () => {
  it("should render", () => {
    expect(render(<DetailsModal />)).toBeTruthy();
  });
});
