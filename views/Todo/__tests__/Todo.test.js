import React from "react";
import { shallow } from "../../../utilities/testing";
import Todo from "../Todo";

describe("Todo", () => {
  it("renders loading component", async () => {
    const wrapper = shallow(
      <Todo data={undefined} loading={true} error={undefined} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders error component", async () => {
    const error = new Error("An error occured.");
    const wrapper = shallow(
      <Todo data={undefined} loading={false} error={error} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders List component", async () => {
    const data = {
      data: {
        locations: [
          {
            id: "1",
            name: "Test Location 1",
            description: "Test Description 1",
          },
          {
            id: "2",
            name: "Test Location 2",
            description: "Test Description 2",
          },
          {
            id: "3",
            name: "Test Location 3",
            description: "Test Description 3",
          },
        ],
      },
    };

    const wrapper = shallow(
      <Todo data={data} loading={false} error={undefined} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
