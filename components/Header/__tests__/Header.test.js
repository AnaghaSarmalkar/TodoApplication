import { render } from "@testing-library/react-native";
import React from "react";
import Header from "../Header";

describe("", () => {
  it("renders Header component", async () => {
    const headerTitle = "Test Header Title";
    const { toJSON } = render(<Header title={headerTitle} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
