import { View, Text, Platform } from "react-native";
import React from "react";

const EventDateCard = ({ date, event, index }) => {
  const colorArray = [
    // "#84c4c1",
    "#90ddd9",
    "#93dad6",
    "#9ededa",
    "#a9e1de",
    "#b3e5e2",
    "#bee9e6",
  ];
  function getDayAndDate(dateString) {
    // Check if the input string contains a hyphen
    if (dateString.includes("-")) {
      // If it's a date range, split the string into parts
      const parts = dateString.split(" ");
      const dateRange = parts[0].split("-");

      // Process the start date of the range
      const startDate = dateRange[0].replace(/\D/g, "");
      const month = parts[1];
      const day = getDayOfWeek(startDate, month);

      // Return the day and date for the start date of the range
      return { day, startDate };
    } else {
      // If it's a single date, extract the date parts
      const parts = dateString.split(" ");
      const dateParts = parts[0].match(/\d+/g);
      const startDate = parseInt(dateParts[0]);
      const month = parts[1];

      // Get the day of the week for the single date
      const day = getDayOfWeek(startDate, month);

      // Return the day and date for the single date
      return { day, startDate };
    }
  }

  function getDayOfWeek(date, month) {
    // Convert the month to a number (assuming the month is in English)
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = months.indexOf(month);

    // Get the day of the week for the date
    const options = { weekday: "short" };
    const day = new Date(
      new Date().getFullYear(),
      monthIndex,
      date
    ).toLocaleDateString("en-US", options);

    return day;
  }

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 20,
        height: 100,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flex: 1 / 3,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 20,
            width: 20,
            borderRadius: 10,
            backgroundColor: colorArray[index - 1],
            ...Platform.select({
              ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
              },
              android: {
                elevation: 5,
              },
            }),
            borderWidth: 1,
            borderColor: "#eee",
          }}
        ></View>
        <View style={{ marginRight: 10 }}>
          <Text
            style={{ fontSize: 16, fontWeight: "600", textAlign: "center" }}
          >
            {getDayAndDate(date).startDate}
          </Text>
          <Text
            style={{ fontSize: 16, fontWeight: "400", textAlign: "center" }}
          >
            {getDayAndDate(date).day.toLocaleUpperCase()}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 2 / 3,
          borderRadius: 20,
          height: "70%",
          alignSelf: "center",
          backgroundColor: colorArray[index - 1],
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
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 10,
          gap: 20,
          borderWidth: 0.5,
          borderColor: "#eee",
        }}
      >
        <Text
          style={{
            flex: 2 / 4,
            fontWeight: "500",
            color: "#222",
            textShadowRadius: 1,
            textShadowOffset: {
              width: 2,
              height: 2,
            },
            textShadowColor: "#fff",
          }}
        >
          {event}
        </Text>
        <Text
          style={{
            flex: 1 / 3,
            fontWeight: "500",
            color: "#fff",
            color: "#222",
            textShadowRadius: 1,
            textShadowOffset: {
              width: 2,
              height: 2,
            },
            textShadowColor: "#fff",
          }}
        >
          {date}
        </Text>
      </View>
    </View>
  );
};

export default EventDateCard;
