import { render } from "@testing-library/react-native";
import React from "react";
import List from "../List";

describe("", () => {
  it("renders List component", async () => {
    const data = [{ id: "1", name: "Test Item name" }];
    const { toJSON } = render(<List data={data} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
