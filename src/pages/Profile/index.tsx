import React, { useState } from "react";

// Native
import {
  View,
  Text,
  ScrollView,
  Image,
  Animated,
  Dimensions,
} from "react-native";

// Private
import { Container } from "./styles";

let HEADER_MAX_HEIGHT = 120;
let HEADER_MIN_HEIGHT = 70;
let PROFILE_IMAGE_MAX_HEIGT = 80;
let PROFILE_IMAGE_MIN_HEIGT = 40;

const Profile = () => {
  const scrollY = new Animated.Value(0);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  const profileImageHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [PROFILE_IMAGE_MAX_HEIGT, PROFILE_IMAGE_MIN_HEIGT],
    extrapolate: "clamp",
  });

  const profileImageMarginTop = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [
      HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGT / 2,
      HEADER_MAX_HEIGHT + 5,
    ],
    extrapolate: "clamp",
  });

  const headerZindex = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const headerTitleBottom = scrollY.interpolate({
    inputRange: [
      0,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGT + 26,
    ],
    outputRange: [-20, -20, -20, 0],
    extrapolate: "clamp",
  });

  return (
    <Container>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: "#1da1f3",
          height: headerHeight,
          zIndex: headerZindex,
          alignItems: "center",
        }}
      >
        <Animated.View
          style={{ position: "absolute", bottom: headerTitleBottom }}
        >
          <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>
            Carlos Tonholi
          </Text>
        </Animated.View>
      </Animated.View>

      <ScrollView
        style={{ flex: 1 }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } },
        ])}
        scrollEventThrottle={16}
      >
        <Animated.View
          style={{
            width: profileImageHeight,
            height: profileImageHeight,
            borderRadius: PROFILE_IMAGE_MAX_HEIGT,
            borderColor: "white",
            borderWidth: 3,
            overflow: "hidden",
            marginTop: profileImageMarginTop,
            marginLeft: 10,
          }}
        >
          <Image
            source={require("../../assets/person.jpg")}
            style={{ flex: 1, width: null, height: null }}
          />
        </Animated.View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 26, paddingLeft: 10 }}>
            Carlos Tonholi
          </Text>
        </View>

        <View style={{ height: Dimensions.get("screen").height }}></View>
      </ScrollView>
    </Container>
  );
};

export default Profile;
