import { createContext, useContext, useState } from "react";

const ConferenceContext = createContext();

const ConferenceProvider = ({ children }) => {
  const [isItemSelected, setIsItemSelected] = useState(true);
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <ConferenceContext.Provider
      value={{
        isItemSelected,
        setIsItemSelected,
        selectedItem,
        setSelectedItem,
      }}
    >
      {children}
    </ConferenceContext.Provider>
  );
};

export const useConference = () => useContext(ConferenceContext);
export default ConferenceProvider;
