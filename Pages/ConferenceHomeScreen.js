import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { useConference } from "../context/ConferenceProvider";

import Icon from "react-native-vector-icons/FontAwesome";
import EvilIcon from "react-native-vector-icons/FontAwesome6";

const ConferenceHomeScreen = ({ navigation }) => {
  const { conference } = useConference();

  return (
    <View>
      <View>
        <Image source={require("../assets/world.jpg")} style={styles.image} />
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.conferenceName}>{conference.conferenceName}</Text>
        <View style={styles.dateContainer}>
          <Icon name="calendar" size={18} color="#2cdcd4" />
          <Text style={styles.date}>29 – 31 May 2024</Text>
        </View>
        <View style={styles.dateContainer}>
          <EvilIcon name="location-dot" size={18} color="#2cdcd4" />
          <Text style={styles.date}> Seattle Convention Center, USA</Text>
        </View>
        <Text style={styles.about}>About the Conference</Text>
        <ScrollView
        // contentContainerStyle={styles.aboutContainer}
        // scrollEnabled={true}
        >
          {conference.about.split("<br/>").map((line, index) => (
            <Text key={index}>
              {line}
              {"\n"}
            </Text>
          ))}
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Keynote");
          }}
        >
          <Text style={styles.buttonText}>See Keynote Speakers</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ConferenceHomeScreen;

const styles = StyleSheet.create({
  aboutContainer: {
    // flex: 1,

    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "#fff",
    marginTop: -20,
    // paddingHorizontal: 20,
    padding: 16,
    gap: 10,
  },
  image: {
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
  conferenceName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  about: {
    color: "#2cdcd4",
    fontSize: 20,
    fontWeight: "bold",
  },
  dateContainer: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  date: { fontSize: 16, fontWeight: "bold" },
  buttonContainer: {
    padding: 10,
    backgroundColor: "#fff",
    marginTop: "auto",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 8,
    backgroundColor: "#2cdcd4",
    padding: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
