import { render } from "@testing-library/react-native";
import React from "react";
import Item from "../Item";

describe("", () => {
  it("renders Item component", async () => {
    const item = { id: "1", name: "Test Item name" };
    const { toJSON } = render(<Item item={item} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
