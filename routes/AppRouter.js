import { View, Text } from "react-native";
import React from "react";
import { useConference } from "../context/ConferenceProvider";
import DrawerConferenceRouter from "./DrawerConferenceRouter";
import StackConferenceRouter from "./StackConferenceRouter";

const AppRouter = () => {
  const { isItemSelected } = useConference();
  return (
    <>
      {isItemSelected ? <DrawerConferenceRouter /> : <StackConferenceRouter />}
    </>
  );
};

export default AppRouter;
