import React from "react";
import { shallow } from "../../../utilities/testing";
import ListPage from "../ListPage";

describe("ListPage", () => {
  it("renders loading component", async () => {
    const wrapper = shallow(
      <ListPage data={undefined} loading={true} error={undefined} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders error component", async () => {
    const error = new Error("An error occured.");
    const wrapper = shallow(
      <ListPage data={undefined} loading={false} error={error} />
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
      <ListPage data={data} loading={false} error={undefined} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
