import React from "react";
import { shallow } from "../../../utilities/testing";
import TodoList from "../TodoList";

describe("TodoList", () => {
  // Is there an alternative than passing mockInsets like this?
  const mockInsets = {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1,
  };
  it("renders loading component", async () => {
    const wrapper = shallow(
      <TodoList
        data={undefined}
        loading={true}
        error={undefined}
        insets={mockInsets}
        onItemPress={undefined}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders error component", async () => {
    const error = new Error("An error occured.");
    const wrapper = shallow(
      <TodoList
        data={undefined}
        loading={false}
        error={error}
        insets={mockInsets}
        onItemPress={undefined}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders List component", async () => {
    const data = {
      data: {
        locations: [
          { id: "1", name: "Test Location 1" },
          { id: "2", name: "Test Location 2" },
          { id: "3", name: "Test Location 3" },
        ],
      },
    };

    const wrapper = shallow(
      <TodoList
        data={data}
        loading={false}
        error={undefined}
        insets={mockInsets}
        onItemPress={undefined}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
