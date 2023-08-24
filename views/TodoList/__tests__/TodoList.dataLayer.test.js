import React from "react";
import { shallow } from "../../../utilities/testing";
import TodoListDataLayer from "../TodoList.dataLayer";

jest.mock("@apollo/client", () => ({
  gql: jest.fn(),
  useQuery: jest.fn(() => ({})),
}));

describe("TodoListDataLayer", () => {
  it("should render", () => {
    const wrapper = shallow(<TodoListDataLayer />);
    expect(wrapper).toMatchSnapshot();
  });
});
