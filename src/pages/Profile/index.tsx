import React, { useEffect } from "react";

// Native
import { View, Animated, StatusBar, YellowBox } from "react-native";

// Shared
import { CoverPhoto } from "~/shared/images";
import { color } from "~/shared/color";
import { sizes } from "~/shared/sizes";
import Icon from "~/shared/icons";

// Utils 
import { randomColor } from '~/utils/randomColor'

// Private
import {
  Header,
  Button,
  Content,
  UserName,
  Container,
  CoverImage,
  ScrollView,
  ProfileImage,
  HeaderContent,
  UserNameHeader,
  UserNameContainer,
  ProfileImageContainer,
} from "./styles";

const HEADER_MAX_HEIGHT = 120 + sizes.statusBar;
const HEADER_MIN_HEIGHT = sizes.width * 0.15 + sizes.statusBar;
const PROFILE_IMAGE_MAX_HEIGHT = 80;
const PROFILE_IMAGE_MIN_HEIGHT = 40;

const Profile = () => {
  const scrollY = new Animated.Value(0);

  const bgColor = randomColor()

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  const profileImageHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  const profileImageMarginTop = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [
      HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
      HEADER_MAX_HEIGHT + 5,
    ],
    extrapolate: "clamp",
  });

  const headerZIndex = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [
      0,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT + 26,
    ],
    outputRange: [0, 0.5, 0.75, 1],
    extrapolate: "clamp",
  });

  const coverPhotoOpacity = scrollY.interpolate({
    inputRange: [
      0,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT + 26,
    ],
    outputRange: [1, 0.75, 0.5, 0],
    extrapolate: "clamp",
  });

  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor(color.transparent);
  }, []);

  useEffect(() => {
    YellowBox.ignoreWarnings(["Animated: `useNativeDriver`"]);
    YellowBox.ignoreWarnings([
      "Animated.event now requires a second argument for options",
    ]);
  }, []);

  const User = {
    ProfilePhoto: 'https://github.com/CarlosETB.png',
    CoverPhoto,
    UserName: "Carlos Tonholi",
  };

  return (
    <Container>
      <Header style={{ height: headerHeight, zIndex: headerZIndex }}>
        <CoverImage
          source={User.CoverPhoto}
          style={{ height: headerHeight, opacity: coverPhotoOpacity }}
        />

        <HeaderContent>
          <Button>
            <Icon name="arrow-back" />
          </Button>

          <UserNameContainer style={{ opacity: headerOpacity }}>
            <UserNameHeader>{User.UserName}</UserNameHeader>
          </UserNameContainer>

          <Button>
            <Icon name="more" />
          </Button>
        </HeaderContent>
      </Header>

      <ScrollView
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } },
        ])}
      >
        <ProfileImageContainer
          style={{
            width: profileImageHeight,
            height: profileImageHeight,
            marginTop: profileImageMarginTop,
          }}
        >
          <ProfileImage source={{ uri: User.ProfilePhoto }} />
        </ProfileImageContainer>

        <View>
          <UserName>{User.UserName}</UserName>
        </View>

        <Content></Content>
      </ScrollView>
    </Container>
  );
};

export default Profile;
