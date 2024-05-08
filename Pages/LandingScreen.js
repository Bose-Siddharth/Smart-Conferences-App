import { View, Text, StatusBar, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const LandingScreen = () => {
  // #02c8db
  //#5965ed
  const AnimatedLinearGradient =
    Animated.createAnimatedComponent(LinearGradient);
  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <AnimatedLinearGradient
        colors={["rgba(255,255,255, 0)", "rgba(255,255,255, 1)"]}
        style={{}}
      />
    </View>
  );
};

export default LandingScreen;
