import { View, Text, Button, Image, StyleSheet } from "react-native";
import React from "react";
import { useConference } from "../context/ConferenceProvider";
import conferences from "../constants/conferences.json";

const ConferenceHomeScreen = () => {
  const { selectedItem } = useConference();
  let conference = conferences.conferences.filter((conference) => {
    return conference.key === "worldaiiotcongress";
    // return conference.key === selectedItem;
  });
  conference = conference[0];
  console.log("====================================");
  console.log(conference);
  console.log("====================================");
  return (
    <View>
      <View>
        <Image source={{ uri: conference.imageLink }} style={{ height: 175 }} />
      </View>
      <View style={styles.aboutContainer}>
        <Text>World AI IoT Conference</Text>
        <Text> About the Conference</Text>
        <Text>When is the event?</Text>
        <View>
          <Text>Icon</Text>
          <Text>Date</Text>
        </View>
      </View>
      <Button title="See Keynote Speakers" />
    </View>
  );
};

export default ConferenceHomeScreen;

const styles = StyleSheet.create({
  aboutContainer: {
    // flex: 1,
    height: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#fff",
    marginTop: -20,
  },
});
