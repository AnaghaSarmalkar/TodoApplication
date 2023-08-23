import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react-native";
import React from "react";
// import renderer from "react-test-renderer";
import ListPageDataLayer, { GET_LOCATIONS } from "../ListPage.dataLayer";

describe("<ListPageDataLayer />", () => {
  it("renders correctly for loading", async () => {
    const dataMock = {
      request: {
        query: GET_LOCATIONS,
      },
      delay: 1000,
      result: {},
    };
    const { toJSON } = render(
      <MockedProvider mocks={[dataMock]} addTypename={false}>
        <ListPageDataLayer />
      </MockedProvider>
    );
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly for error", async () => {
    const dataMock = {
      request: {
        query: GET_LOCATIONS,
      },
      error: new Error("An error occured."),
    };
    const { toJSON } = render(
      <MockedProvider mocks={[dataMock]} addTypename={false}>
        <ListPageDataLayer />
      </MockedProvider>
    );
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly for data", async () => {
    const dataMock = {
      request: {
        query: GET_LOCATIONS,
      },
      result: {
        data: {
          locations: [
            { id: "1", name: "Test Location 1" },
            { id: "2", name: "Test Location 2" },
            { id: "3", name: "Test Location 3" },
          ],
        },
      },
    };
    const { toJSON } = render(
      <MockedProvider mocks={[dataMock]} addTypename={false}>
        <ListPageDataLayer />
      </MockedProvider>
    );
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(toJSON()).toMatchSnapshot();
  });
});
