import React from "react";
import { shallow } from "../../../utilities/testing";
import Loading from "../Loading";

describe("", () => {
  it("renders Loading component", async () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper).toMatchSnapshot();
  });
});
