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
  });

  async function handleScroll() {
    Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: true,
    });
  }

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
        }}
      ></Animated.View>

      <ScrollView
        style={{ flex: 1 }}
        onScroll={handleScroll}
        contentContainerStyle={{ height: Dimensions.get("screen").height * 2 }}
        scrollEventThrottle={16}
      >
        <View
          style={{
            width: PROFILE_IMAGE_MAX_HEIGT,
            height: PROFILE_IMAGE_MAX_HEIGT,
            borderRadius: PROFILE_IMAGE_MAX_HEIGT,
            borderColor: "white",
            borderWidth: 3,
            overflow: "hidden",
            marginTop: HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGT / 2,
            marginLeft: 10,
          }}
        >
          <Image
            source={require("../../assets/person.jpg")}
            style={{ flex: 1, width: null, height: null }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 26, paddingLeft: 10 }}>
            Carlos Tonholi
          </Text>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Profile;
