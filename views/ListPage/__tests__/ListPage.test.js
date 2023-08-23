import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react-native";
import React from "react";
import ListPage from "../ListPage";
import { GET_LOCATIONS } from "../ListPage.dataLayer";

const mocks = [];

describe("ListPage", () => {
  it("renders loading component", async () => {
    const locationsMock = {
      request: {
        query: GET_LOCATIONS,
      },
      result: {
        data: { locations: { id: 1, name: "Test Location" } },
      },
    };
    render(
      <MockedProvider mocks={[locationsMock]} addTypename={false}>
        <ListPage data={undefined} loading={true} error={undefined} />
      </MockedProvider>
    );

    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
  });

  it("renders error component", async () => {
    render(<ListPage data={undefined} loading={false} error={undefined} />);

    const loading = await screen.getByText(/loading/i);
    expect(loading).toBeDefined();
  });
});
