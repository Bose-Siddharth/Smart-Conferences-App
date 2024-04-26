import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";

const ConferenceCard = (item) => {
  const conference = item.item;
  return (
    <Pressable
      style={(pressed) => {
        [pressed && { opacity: 0.5 }, styles.cardContainer];
      }}
      android_ripple={"#ccc"}
    >
      <View style={styles.headerImage}>
        <Image
          source={{
            uri: "https://fastly.picsum.photos/id/79/200/300.jpg?hmac=uqOMZrx9qlolrYp0xS5t84xjCiD_BIjfxIugTa1xjho",
          }}
          style={styles.conferenceImage}
        />
      </View>
      <View style={styles.conferenceDetails}>
        <Text style={styles.conferenceName}>{conference.name}</Text>
      </View>
    </Pressable>
  );
};

export default ConferenceCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 16,
    padding: "2%",
    borderWidth: 1,
    backgroundColor: "#000",
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  headerImage: {},
  conferenceImage: {},
  conferenceDetails: {},
  conferenceName: {},
});
