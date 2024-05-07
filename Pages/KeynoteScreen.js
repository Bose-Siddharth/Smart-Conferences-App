import { useConference } from "../context/ConferenceProvider";
import KeynoteSpeakerCard from "../Components/KeynoteSpeakerCard";
import { Text, View } from "react-native";
import { ScrollView } from "react-native";

const KeynoteScreen = () => {
  const { conference } = useConference();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View style={{ marginBottom: 16 }}>
          <Text
            style={{
              margin: 16,
              fontSize: 20,
              fontWeight: "bold",
              color: "#2cdcd4",
            }}
          >
            Current Keynote Speakers
          </Text>
          {conference.currentKeynoteSpeakers.map((speaker, index) => (
            <KeynoteSpeakerCard
              name={speaker.name}
              affiliation={speaker.affiliation}
              imageLink={speaker.imageLink}
              index={index}
              key={index}
            />
          ))}
        </View>
        <View style={{ marginTop: 16 }}>
          <Text
            style={{
              margin: 16,
              fontSize: 20,
              fontWeight: "bold",
              color: "#2cdcd4",
            }}
          >
            Previous Keynote Speakers
          </Text>
          {conference.previousKeynoteSpeakers.map((speaker, index) => (
            <KeynoteSpeakerCard
              name={speaker.name}
              affiliation={speaker.affiliation}
              imageLink={speaker.imageLink}
              index={index}
              key={index}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default KeynoteScreen;
