import { View, Text, Platform, ScrollView } from "react-native";
import React from "react";
import EventDateCard from "../Components/EventDateCard";
import { useConference } from "../context/ConferenceProvider";

const ImportantDatesScreen = () => {
  const { conference } = useConference();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
      <View
        style={{
          // flex: 1,
          height: 100,
          borderRadius: 16,
          marginHorizontal: 10,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#93dad6",
          borderWidth: 1,
          borderColor: "#eee",
          ...Platform.select({
            ios: {
              shadowColor: "#000",
              shadowOffset: { width: -5, height: -5 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            },
            android: {
              elevation: 8,
            },
          }),
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            color: "#444",
            textShadowRadius: 1,
            textShadowOffset: {
              width: 2,
              height: 2,
            },
            textShadowColor: "#fff",
            // marginTop: "auto",
          }}
        >
          IMPORTANT DATES
        </Text>
        {/* <View
          style={{
            flex: 1 / 2,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingHorizontal: 50,
            color: "white",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Date
          </Text>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Event
          </Text>
        </View> */}
      </View>
      {conference.importantDates.map((date) => (
        <View key={date.id}>
          <View style={{ marginVertical: 5 }}></View>
          <View style={{ marginHorizontal: 16 }}>
            <EventDateCard
              date={date.date}
              event={date.dateDescription}
              index={date.id}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default ImportantDatesScreen;
