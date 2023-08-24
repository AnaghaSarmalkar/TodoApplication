import React from "react";
import { shallow } from "../../../utilities/testing";
import Error from "../Error";

describe("", () => {
  it("renders Error component", async () => {
    const errorMessage = "Test Error Message";
    const wrapper = shallow(<Error message={errorMessage} />);

    expect(wrapper).toMatchSnapshot();
  });
});
