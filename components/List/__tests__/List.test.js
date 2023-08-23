import React from "react";
import { shallow } from "../../../utilities/testing";
import Header from "../../Header/Header";
import List from "../List";

describe("", () => {
  it("renders List component", async () => {
    const data = [{ id: "1", name: "Test Item name" }];
    const header = <Header title="Test Header" />;
    const wrapper = shallow(<List data={data} headerComponent={header} />);

    expect(wrapper).toMatchSnapshot();
  });
});
