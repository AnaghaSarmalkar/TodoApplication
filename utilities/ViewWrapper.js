import React from "react";
import { View } from "react-native";

export default function ViewWrapper(props) {
  return (
    <View
      {...props}
      // style={{
      //   flex: 1,
      //   alignItems: "center",
      //   justifyContent: "center",
      //   // paddingTop: insets.top,
      // }}
    >
      {props.children}
    </View>
  );
}
