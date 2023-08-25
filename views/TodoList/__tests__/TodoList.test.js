import React from "react";
import { shallow } from "../../../utilities/testing";
import TodoList from "../TodoList";

describe("TodoList", () => {
  it("renders loading component", async () => {
    const wrapper = shallow(
      <TodoList
        data={undefined}
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
      <TodoList
        data={undefined}
        loading={false}
        error={error}
        insets={undefined}
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
        insets={undefined}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
