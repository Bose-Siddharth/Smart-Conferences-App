import React from "react";
import { useConference } from "../context/ConferenceProvider";
import { StyleSheet, Text, View } from "react-native";
import WorldAIIotCongressCommitteeComponent from "../Components/WorldAIIotCongressCommitteeComponent";

const CommitteeScreen = () => {
  const { selectedItem } = useConference();
  console.log(selectedItem);
  if (selectedItem === "worldaiiotcongress") {
    return <WorldAIIotCongressCommitteeComponent />;
  }
  else {
    // Provide a default component or message for other cases
    return <Text>No committee component found for the selected item.</Text>;
  }
};

export default CommitteeScreen;

const styles = StyleSheet.create({});
