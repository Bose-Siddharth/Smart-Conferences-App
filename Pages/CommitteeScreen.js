import { View, Text } from "react-native";
import React from "react";
import { useConference } from "../context/ConferenceProvider";

const CommitteeScreen = () => {
  const { selectedItem } = useConference();
  return (
    <View>
      <Text>{selectedItem}</Text>
    </View>
  );
};

export default CommitteeScreen;
