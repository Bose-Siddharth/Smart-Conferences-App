import { createContext, useContext, useState } from "react";
import conferences from "../constants/conferences.json";

const ConferenceContext = createContext();

const ConferenceProvider = ({ children }) => {
  const [isItemSelected, setIsItemSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  let conference = conferences.conferences.filter((conference) => {
    // return conference.key === "worldaiiotcongress";
    return conference.key === selectedItem;
  });
  conference = conference[0];

  return (
    <ConferenceContext.Provider
      value={{
        isItemSelected,
        setIsItemSelected,
        selectedItem,
        setSelectedItem,
        conference,
      }}
    >
      {children}
    </ConferenceContext.Provider>
  );
};

export const useConference = () => useContext(ConferenceContext);
export default ConferenceProvider;
