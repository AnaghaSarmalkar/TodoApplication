import { StatusBar, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
