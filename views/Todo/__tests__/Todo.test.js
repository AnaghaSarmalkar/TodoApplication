import React from "react";
import { shallow } from "../../../utilities/testing";
import Todo from "../Todo";

describe("Todo", () => {
  const mockData = {
    location: {
      id: "1",
      name: "Test Location 1",
      description: "Test Description 1",
    },
  };

  const mockInsets = {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1,
  };

  it("renders loading component", async () => {
    const wrapper = shallow(
      <Todo
        data={mockData}
        isLoading={true}
        hasError={undefined}
        insets={mockInsets}
        onNavButtonPress={undefined}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders error component", async () => {
    const error = new Error("An error occured.");
    const wrapper = shallow(
      <Todo
        data={undefined}
        isLoading={false}
        hasError={error}
        insets={mockInsets}
        onNavButtonPress={undefined}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Todo component", async () => {
    const wrapper = shallow(
      <Todo
        data={mockData}
        isLoading={false}
        hasError={undefined}
        insets={mockInsets}
        onNavButtonPress={undefined}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
