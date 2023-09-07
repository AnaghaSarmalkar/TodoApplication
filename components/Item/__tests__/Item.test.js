import React from "react";
import { shallow } from "../../../utilities/testing";
import Item from "../Item";

describe("", () => {
  it("renders Item component", async () => {
    const item = { id: "1", name: "Test Item name" };
    const wrapper = shallow(<Item item={item} onItemPress={undefined} />);

    expect(wrapper).toMatchSnapshot();
  });
});
