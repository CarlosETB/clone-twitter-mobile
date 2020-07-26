// Native
import styled from "styled-components/native";
import { Animated } from "react-native";

// Shared
import { sizes } from "~/shared/sizes";
import { Text } from "~/shared/styles";
import { color } from "~/shared/color";

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Header = styled(Animated.View)`
  top: 0;
  left: 0;
  right: 0;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  padding-top: ${sizes.statusBar}px;
  background-color: ${color.primary};
`;

export const HeaderContent = styled.View`
  width: 100%;
  padding: 0 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: ${sizes.width * 0.15}px;
`;

export const ScrollView = styled(Animated.ScrollView).attrs({
  scrollEventThrottle: 16,
})`
  flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  border-radius: 100px;
  justify-content: center;
  width: ${sizes.width * 0.1}px;
  height: ${sizes.width * 0.1}px;
  background-color: ${color.primaryLight};
`;

export const CoverImage = styled(Animated.Image).attrs({
  resizeMode: "stretch",
})`
  z-index: 0;
  position: absolute;
`;

export const ProfileImageContainer = styled(Animated.View)`
  overflow: hidden;
  border-width: 3px;
  margin-left: 10px;
  border-radius: 100px;
  border-color: ${color.white};
`;

export const ProfileImage = styled.Image`
  flex: 1;
  width: null;
  height: null;
`;

export const UserNameContainer = styled(Animated.View)`
  flex: 1;
  margin: 0 15px;
  justify-content: center;
`;

export const UserName = styled(Text)`
  font-size: 26px;
  font-weight: bold;
  padding-left: 10px;
`;

export const UserNameHeader = styled(Text)`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const Content = styled.View`
  flex: 1;
  height: ${sizes.height}px;
`;
