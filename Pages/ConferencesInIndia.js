import { View, Text, FlatList } from "react-native";
import React from "react";
import confInIndia from "../constants/india";
import Layout from "../Components/Layout";
import ConferenceCard from "../Components/ConferenceCard";

const ConferencesInIndia = () => {
  return (
    <Layout>
      <FlatList
        data={confInIndia}
        keyExtractor={(item) => item.id}
        renderItem={ConferenceCard}
        numColumns={2}
        style={{ flex: 1 }}
      />
    </Layout>
  );
};

export default ConferencesInIndia;
