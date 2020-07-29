import React from "react";
import { render } from "@testing-library/react";
import NetworkError from "./NetworkErrorWrapper";

test("renders learn react link", () => {
  const { getByText } = render(<NetworkError />);
  //   const linkElement = getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
});
