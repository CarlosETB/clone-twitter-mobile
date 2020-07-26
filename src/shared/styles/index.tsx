// Native
import styled from "styled-components/native";
import { Platform } from "react-native";

// Shared
import { sizes } from "~/shared/sizes/index";

export const Text = styled.Text`
  font-family: ${Platform.select({
    ios: `Inter_900Black`,
    android: `Roboto_900Black`,
  })};
  letter-spacing: ${sizes.hairline}px;
`;
