import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import confInIndia from "../constants/india";
import confInUsa from "../constants/usa";
import confInUk from "../constants/uk";
import confInCanada from "../constants/canada";
import Layout from "../Components/Layout";

const windowWidth = Dimensions.get("window").width;
const numColumns = 2;
const itemWidth = (windowWidth - 30 * (numColumns + 1)) / numColumns;

const ConferenceCard = ({ item }) => {
  const conference = item;
  return (
    <Pressable style={styles.cardContainer}>
      <View style={styles.headerImage}>
        <Image
          source={{
            uri: conference.backgroundImg,
          }}
          style={styles.conferenceImage}
        />
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: conference.logoImg,
          }}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.conferenceDetails}>
        <Text style={styles.conferenceName}>{conference.name}</Text>
      </View>
    </Pressable>
  );
};

const ConferencesPage = ({ country }) => {
  choice = "";
  switch (country) {
    case "ind":
      choice = confInIndia;
      break;
    case "usa":
      choice = confInUsa;
      break;
    case "uk":
      choice = confInUk;
      break;
    case "canada":
      choice = confInCanada;
      break;
    default:
      choice = confInIndia;
      break;
  }
  return (
    <Layout>
      <FlatList
        data={choice}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ConferenceCard item={item} />}
        numColumns={numColumns}
        contentContainerStyle={styles.flatListContainer}
      />
    </Layout>
  );
};

export default ConferencesPage;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 8,
    padding: "2%",
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    width: itemWidth,
    height: 150,
  },
  headerImage: {},
  conferenceImage: {
    height: 75,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 60,
    left: "42%",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "blue",
  },
  logoImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    objectFit: "contain",
  },
  conferenceDetails: {},
  conferenceName: {
    textAlign: "center",
    marginTop: "15%",
    paddingVertical: 3,
  },
  flatListContainer: {
    padding: 8,
    justifyContent: "space-between",
  },
});
