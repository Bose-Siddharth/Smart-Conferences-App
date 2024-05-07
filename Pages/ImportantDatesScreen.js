import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ImportantDatesScreen = () => {
  // Define the event details
  const events = [
    { name: "Full Paper Submission", date: "3rd April 2024" },
    { name: "Acceptance Notification", date: "19th April 2024" },
    { name: "Final Paper Submission", date: "12th May 2024" },
    { name: "Early Bird Registration", date: "3rd May 2024" },
    { name: "Presentation Submission", date: "12th May 2024" },
    { name: "Conference", date: "29 – 31 May 2024" },
  ];

  // Calculate the step for each event
  const calculateStep = (index) => {
    return `${index * (100 / events.length)}%`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}></View>
      {events.map((event, index) => (
        <View key={index} style={[styles.event, { top: calculateStep(index) }]}>
          <View style={styles.step}>
            <Text style={styles.stepText}>{event.date}</Text>
          </View>
          <Text style={styles.eventName}>{event.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 20,
    position: "relative",
  },
  progressBar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50%",
    width: 2,
    backgroundColor: "#2cdcd4",
  },
  event: {
    position: "absolute",
    left: 10,
    width: "90%",
  },
  step: {
    width: 100,
    alignItems: "flex-end",
    paddingRight: 10,
    marginBottom: 10,
  },
  stepText: {
    fontWeight: "bold",
    textAlign: "right",
  },
  eventName: {
    marginLeft: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ImportantDatesScreen;
