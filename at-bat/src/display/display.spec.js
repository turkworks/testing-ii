import React from "react";
import { render } from "react-testing-library";

import Display from "./Display";

describe("<Display />", () => {
  it("renders the count of balls and strikes passed in", () => {
    const { getByText } = render(<Display balls="3" strikes="2" />);

    getByText(/3 balls/i);

    getByText(/2 strikes/i);
  });
});
