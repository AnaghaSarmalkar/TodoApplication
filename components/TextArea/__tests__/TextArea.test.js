import React from "react";
import { shallow } from "../../../utilities/testing";
import TextArea from "../TextArea";

describe("", () => {
  it("renders Loading component", async () => {
    const description = "Test Description";
    const wrapper = shallow(<TextArea description={description} />);

    expect(wrapper).toMatchSnapshot();
  });
});
