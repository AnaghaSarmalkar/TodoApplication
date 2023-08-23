import { render, screen } from "@testing-library/react-native";
import React from "react";
import ListPage from "../ListPage";

// const mocks = [];

describe("ListPage", () => {
  it("renders loading component", async () => {
    render(<ListPage data={undefined} loading={true} error={undefined} />);

    const loading = await screen.queryByText(/loading/i);

    expect(loading).toBeOnTheScreen();
  });

  it("renders error component", async () => {
    const error = new Error("An error occured.");

    render(<ListPage data={undefined} loading={false} error={error} />);

    const errorScreen = await screen.getByText(/an error occured/i);
    expect(errorScreen).toBeOnTheScreen();
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

    render(<ListPage data={data} loading={false} error={undefined} />);

    const dataScreen = await screen.getByText(/Todo List/i);
    expect(dataScreen).toBeOnTheScreen();
  });
});
