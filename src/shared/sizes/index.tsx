// Native
import { Dimensions, StatusBar, StyleSheet } from "react-native";

export const sizes = {
  statusBar: Number(StatusBar.currentHeight),
  hairline: Number(StyleSheet.hairlineWidth),
  width: Number(Math.round(Dimensions.get("screen").width)),
  height: Number(Math.round(Dimensions.get("screen").height)),
};
