import React from "react";
import { shallow } from "../../../utilities/testing";
import TodoDataLayer from "../Todo.dataLayer";

jest.mock("@apollo/client", () => ({
  gql: jest.fn(),
  useQuery: jest.fn(() => ({})),
}));

describe("TodoDataLayer", () => {
  it("should render", () => {
    const wrapper = shallow(<TodoDataLayer />);
    expect(wrapper).toMatchSnapshot();
  });
});
