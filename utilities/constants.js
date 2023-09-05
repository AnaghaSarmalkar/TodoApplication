import { Platform } from "react-native";

export const isIos = Platform.OS === "ios";
export const isWeb = Platform.OS === "web";
export const isAndroid = Platform.OS === "android";
