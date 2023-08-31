import React from "react";
import { shallow } from "../../../utilities/testing";
import TodoDataLayer from "../Todo.dataLayer";

jest.mock("@apollo/client", () => ({
  gql: jest.fn(),
  useQuery: jest.fn(() => ({})),
}));

jest.mock("react-native-safe-area-context", () => ({
  useSafeAreaInsets: jest.fn(() => ({})),
}));

describe("TodoDataLayer", () => {
  it("should render", () => {
    const testId = 1;
    const wrapper = shallow(<TodoDataLayer id={testId} />);
    expect(wrapper).toMatchSnapshot();
  });
});
