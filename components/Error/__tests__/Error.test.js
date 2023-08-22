import { render } from "@testing-library/react-native";
import React from "react";
import Error from "../Error";

describe("", () => {
  it("renders Error component", async () => {
    const errorMessage = "Test Error Message";
    const { toJSON } = render(<Error message={errorMessage} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
