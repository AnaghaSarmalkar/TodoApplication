import React from "react";
import { shallow } from "../../../utilities/testing";
import ListPageDataLayer from "../ListPage.dataLayer";

jest.mock("@apollo/client", () => ({
  gql: jest.fn(),
  useQuery: jest.fn(() => ({})),
}));

describe("ListPageDataLayer", () => {
  it("should render", () => {
    const wrapper = shallow(<ListPageDataLayer />);
    expect(wrapper).toMatchSnapshot();
  });
});
