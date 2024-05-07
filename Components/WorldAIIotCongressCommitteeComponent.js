import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useConference } from "../context/ConferenceProvider";
import { DataTable } from "react-native-paper";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

const WorldAIIotCongressCommitteeComponent = () => {
  const { conference } = useConference();
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([4]); // Set to only 4 rows per page
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const items = conference.committee.technicalProgramCommittee;

  // Calculate the range of items to display on the current page
  const from = page * itemsPerPage;
  const to = Math.min(from + itemsPerPage, items.length);

  // Slice the items array to get only the items for the current page
  const visibleItems = items.slice(from, to);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage, conference.committee.technicalProgramCommittee]);
  return (
    <View style={{ flex: 1 }}>
      <PaperProvider>
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
          <View>
            <Text style={styles.heading}>General Co-Chair</Text>
          </View>
          <DataTable style={{ backgroundColor: "white" }}>
            <DataTable.Header style={styles.header} theme={{ dark: true }}>
              <DataTable.Title textStyle={styles.title}>Name</DataTable.Title>
              <DataTable.Title textStyle={styles.title}>
                Affiliation
              </DataTable.Title>
            </DataTable.Header>

            {conference.committee.generalCoChair.map((item) => (
              <DataTable.Row
                key={item.id}
                style={[styles.row, item.id % 2 == 0 ? styles.even : null]}
              >
                <DataTable.Cell style={styles.nameCell}>
                  <Text numberOfLines={2}>{item.name}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.affiliationCell}>
                  <Text numberOfLines={2}>{item.affiliation}</Text>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
          <View style={styles.spacer}></View>
          <View>
            <Text style={styles.heading}>Finance Chair</Text>
          </View>
          <DataTable style={{ backgroundColor: "white" }}>
            <DataTable.Header style={styles.header} theme={{ dark: true }}>
              <DataTable.Title textStyle={styles.title}>Name</DataTable.Title>
              <DataTable.Title textStyle={styles.title}>
                Affiliation
              </DataTable.Title>
            </DataTable.Header>

            {conference.committee.financeChair.map((item) => (
              <DataTable.Row
                key={item.id}
                style={[styles.row, item.id % 2 == 0 ? styles.even : null]}
              >
                <DataTable.Cell style={styles.nameCell}>
                  <Text numberOfLines={2}>{item.name}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.affiliationCell}>
                  <Text numberOfLines={2}>{item.affiliation}</Text>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
          <View style={styles.spacer}></View>
          <View>
            <Text style={styles.heading}>Technical Program Co-Chair</Text>
          </View>
          <DataTable style={{ backgroundColor: "white" }}>
            <DataTable.Header style={styles.header} theme={{ dark: true }}>
              <DataTable.Title textStyle={styles.title}>Name</DataTable.Title>
              <DataTable.Title textStyle={styles.title}>
                Affiliation
              </DataTable.Title>
            </DataTable.Header>

            {conference.committee.technicalProgramCoChair.map((item) => (
              <DataTable.Row
                key={item.id}
                style={[styles.row, item.id % 2 == 0 ? styles.even : null]}
              >
                <DataTable.Cell style={styles.nameCell}>
                  <Text numberOfLines={2}>{item.name}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.affiliationCell}>
                  <Text numberOfLines={2}>{item.affiliation}</Text>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
          <View style={styles.spacer}></View>
          <View>
            <Text style={styles.heading}>Technical Program Committee</Text>
          </View>
          <DataTable style={{ backgroundColor: "white" }}>
            <DataTable.Header style={styles.header} theme={{ dark: true }}>
              <DataTable.Title textStyle={styles.title}>Name</DataTable.Title>
              <DataTable.Title textStyle={styles.title}>
                Affiliation
              </DataTable.Title>
            </DataTable.Header>

            {visibleItems.map((item) => (
              <DataTable.Row
                key={item.id}
                style={[styles.row, item.id % 2 == 0 ? styles.even : null]}
              >
                <DataTable.Cell style={styles.nameCell}>
                  <Text numberOfLines={2}>{item.name}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.affiliationCell}>
                  <Text numberOfLines={2}>{item.affiliation}</Text>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
            <DataTable.Pagination
              page={page}
              numberOfPages={Math.ceil(items.length / itemsPerPage)}
              onPageChange={(page) => setPage(page)}
              label={`${from + 1}-${to} of ${items.length}`}
              numberOfItemsPerPageList={numberOfItemsPerPageList}
              numberOfItemsPerPage={itemsPerPage}
              onItemsPerPageChange={onItemsPerPageChange}
              showFastPaginationControls
              selectPageDropdownLabel={"Rows per page"}
            />
          </DataTable>
        </ScrollView>
      </PaperProvider>
    </View>
  );
};

export default WorldAIIotCongressCommitteeComponent;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#bde9e7",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  row: {
    paddingVertical: 10,
    height: 70,
  },
  nameCell: {
    width: "25%", // Adjust as needed
    justifyContent: "left",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#ccc",
    marginRight: 8,
  },
  affiliationCell: {
    width: "75%", // Adjust as needed
    // height: 80,
    justifyContent: "left",
    alignItems: "center",
  },
  even: {
    backgroundColor: "#eee",
  },
  heading: {
    fontSize: 20,
    padding: 10,
    color: "#2cdcd4",
    fontWeight: "bold",
    backgroundColor: "white",
  },
  spacer: {
    marginVertical: 10,
    backgroundColor: "white",
  },
});
