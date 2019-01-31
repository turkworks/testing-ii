import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("renders dashboard name, yo", () => {
    const { getByTestId } = render(<Dashboard />);

    const title = getByTestId("title");

    expect(title).toHaveTextContent("1");
  });

  describe("Select Button", () => {
    it("should select the dashboard", () => {
      const { getByText, getByTestId } = render(<Dashboard />);

      const selected = getByTestId("selected-dashboard");
      const button = getByText(/select/i);

      fireEvent.click(button);

      expect(selected).toHaveTextContent(/pedro/i);
    });
  });
});
