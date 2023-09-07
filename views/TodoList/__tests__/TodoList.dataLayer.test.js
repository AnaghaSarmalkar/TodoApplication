import React from "react";
import { shallow } from "../../../utilities/testing";
import TodoListDataLayer from "../TodoList.dataLayer";

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

describe("TodoListDataLayer", () => {
  it("should render", () => {
    const wrapper = shallow(<TodoListDataLayer />);
    expect(wrapper).toMatchSnapshot();
  });
});
