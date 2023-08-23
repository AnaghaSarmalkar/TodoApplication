import React from "react";
import { View } from "react-native";
import { shallow } from "../../../utilities/testing";
import Item from "../../Item/Item";
import List from "../List";

describe("", () => {
  it("renders List component", async () => {
    const data = [{ id: "1", name: "Test Item name" }];
    const header = <View>Header Component</View>;
    const renderItem = ({ item }) => <Item item={item} />;
    const wrapper = shallow(
      <List data={data} headerComponent={header} renderItem={renderItem} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
