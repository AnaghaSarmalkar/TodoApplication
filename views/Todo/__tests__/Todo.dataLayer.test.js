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

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
    setOptions: jest.fn(),
  })),
}));

describe("TodoDataLayer", () => {
  it("should render", () => {
    const wrapper = shallow(<TodoDataLayer route={{ params: { id: 1 } }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
