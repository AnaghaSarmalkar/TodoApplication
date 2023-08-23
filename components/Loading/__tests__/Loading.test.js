import { render } from "@testing-library/react-native";
import React from "react";
import Loading from "../Loading";

describe("", () => {
  it("renders Loading component", async () => {
    const { toJSON } = render(<Loading />);

    expect(toJSON()).toMatchSnapshot();
  });
});
