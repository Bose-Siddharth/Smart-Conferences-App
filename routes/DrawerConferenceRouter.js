import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ConferenceHomeScreen from "../Pages/ConferenceHomeScreen";
import CommitteeScreen from "../Pages/CommitteeScreen";
import GalleryScreen from "../Pages/GalleryScreen";
import KeynoteScreen from "../Pages/KeynoteScreen";
import ContactScreen from "../Pages/ContactScreen";

const Drawer = createDrawerNavigator();

const DrawerConferenceRouter = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ConferenceHome" component={ConferenceHomeScreen} />
      <Drawer.Screen name="Committee" component={CommitteeScreen} />
      <Drawer.Screen name="Gallery" component={GalleryScreen} />
      <Drawer.Screen name="Keynote" component={KeynoteScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerConferenceRouter;
