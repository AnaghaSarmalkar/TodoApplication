import React from "react";
import { shallow } from "../../../utilities/testing";
import List from "../List";

describe("", () => {
  it("renders List component", async () => {
    const data = [{ id: "1", name: "Test Item name" }];
    const wrapper = shallow(<List data={data} />);

    expect(wrapper).toMatchSnapshot();
  });
});
