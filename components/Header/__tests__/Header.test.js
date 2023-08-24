import React from "react";
import { shallow } from "../../../utilities/testing";
import Header from "../Header";

describe("", () => {
  it("renders Header component", async () => {
    const headerTitle = "Test Header Title";
    const wrapper = shallow(<Header title={headerTitle} />);

    expect(wrapper).toMatchSnapshot();
  });
});
