import React from "react";

// Native
import Ionicons from "react-native-vector-icons/Ionicons";
import { Platform } from "react-native";

// Shared
import { color as iconColor } from "~/shared/color";

interface Props {
  name: string;
  color?: string;
  size?: number;
}

const Icon: React.FC<Props> = ({ name, color, size }) => {
  return (
    <Ionicons
      size={size || 30}
      color={color || iconColor.white}
      name={`${Platform.select({
        ios: `ios-${name}`,
        android: `md-${name}`,
      })}`}
    />
  );
};

export default Icon;
