import React from "react";
import { shallow } from "../../../utilities/testing";
import Todo from "../Todo";

const mockData = {
  location: {
    id: "1",
    name: "Test Location 1",
    description: "Test Description 1",
  },
};

describe("Todo", () => {
  it("renders loading component", async () => {
    const wrapper = shallow(
      <Todo
        data={mockData}
        loading={true}
        error={undefined}
        insets={undefined}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders error component", async () => {
    const error = new Error("An error occured.");
    const wrapper = shallow(
      <Todo data={undefined} loading={false} error={error} insets={undefined} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders Todo component", async () => {
    const wrapper = shallow(
      <Todo
        data={mockData}
        loading={false}
        error={undefined}
        insets={undefined}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
