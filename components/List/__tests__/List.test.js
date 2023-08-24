import React from "react";
import { shallow } from "../../../utilities/testing";
import Header from "../../Header/Header";
import Item from "../../Item/Item";
import List from "../List";

describe("", () => {
  it("renders List component", async () => {
    const data = [{ id: "1", name: "Test Item name" }];
    const header = <Header title={"Test Header component."}></Header>;
    const renderItem = ({ item }) => <Item item={item} />;
    const wrapper = shallow(
      <List data={data} headerComponent={header} renderItem={renderItem} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
