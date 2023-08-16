import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default function Item({ item }) {
  return (
    <TouchableOpacity style={[styles.item]}>
      <Text style={[styles.title]}>{item.title}</Text>
    </TouchableOpacity>
  );
}
