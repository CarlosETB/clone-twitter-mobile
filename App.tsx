import React from "react";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";
import { Roboto_900Black } from "@expo-google-fonts/roboto";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";

import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_900Black,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes />
    </>
  );
}
