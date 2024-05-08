import {
  View,
  Text,
  ImageBackground,
  Image,
  Platform,
  Animated,
} from "react-native";
import React, { useEffect } from "react";

const KeynoteSpeakerCard = ({ name, affiliation, imageLink, index }) => {
  const slideInAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(slideInAnimation, {
      toValue: 1,
      duration: 1000, // Adjust animation duration as needed
      delay: index * 100, // Apply a delay based on the index
      useNativeDriver: true,
    }).start();
  }, []);

  const animatedStyles = {
    transform: [
      {
        translateX: slideInAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: index % 2 === 0 ? [100, 0] : [-100, 0], // Slide from left for even indices, and from right for odd indices
        }),
      },
    ],
  };

  return (
    <Animated.View
      style={[
        {
          flex: 1 / 5,
          margin: "3%",
          borderRadius: 16,
          borderColor: "#ccc",
          overflow: Platform.OS === "android" ? "hidden" : "none",
          elevation: 4,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 3, // Adjust shadow radius for iOS
        },
        animatedStyles,
      ]}
    >
      <View style={{ borderRadius: 16, overflow: "hidden" }}>
        <ImageBackground
          source={
            index % 2 === 0
              ? require("../assets/keynote_speaker_even.png")
              : require("../assets/keynote_speaker_odd.png")
          }
          style={{ height: 150 }}
        >
          <View
            style={{
              paddingHorizontal: 10,
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              flex: 1,
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderWidth: 5,
                height: 100,
                width: 100,
                borderColor: "rgba(189, 233, 231, 0.5)",
                borderRadius: 50,
                overflow: "hidden",
                marginTop: 20,
                marginLeft: 10,
              }}
            >
              <Image
                source={{
                  uri: imageLink,
                }}
                height={100}
                style={{
                  objectFit: "cover",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </View>
            <View
              style={{
                flex: 4 / 6,
                height: 100,
                flexDirection: "column",
                paddingLeft: 10,
                justifyContent: "space-evenly",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                {name}
              </Text>
              <Text>{affiliation}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Animated.View>
  );
};

export default KeynoteSpeakerCard;
