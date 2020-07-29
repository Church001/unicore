import React from "react";
import { render } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundaryWrapper";

test("renders learn react link", () => {
  const { getByText } = render(<ErrorBoundary />);
  //   const linkElement = getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
});
