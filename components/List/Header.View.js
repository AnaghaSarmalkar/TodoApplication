import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
});

export default function Header({ title }) {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
}
