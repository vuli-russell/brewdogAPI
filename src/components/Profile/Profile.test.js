import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("Profile tests", () => {
  it("should render", () => {
    expect(render(<Profile />)).toBeTruthy();
  });
});
