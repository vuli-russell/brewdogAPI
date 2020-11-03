import React from "react";
import { render } from "@testing-library/react";
import PrivateRoutes from "./PrivateRoutes";

describe("PrivateRoutes tests", () => {
  it("should render", () => {
    expect(render(<PrivateRoutes />)).toBeTruthy();
  });
});
