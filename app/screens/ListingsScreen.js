import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Silicon Valley",
    price: 100,
    image: require("../assets/SiliconValley.jpg"),
    status: "Submitted",
    description:"Bird view of the Silicon Valley Ring"
  },
  {
    id: 2,
    title: "Bill Gates",
    price: 200,
    image: require("../assets/billgates.jpg"),
    status: "Archived",
    description:"Picture of Bill Gates"

  },
  {
    id: 3,
    title: "Qualcomm HQ",
    price: 50,
    image: require("../assets/qualcomm.jpg"),
    status: "Published",
    description:"Qualcomm HQ during the presentation of the new chipset"

  },
  {
    id: 4,
    title: "Google Party",
    price: 100,
    image: require("../assets/googleparty.jpg"),
    status: "Published and Paid",
    description:"Party at google office to welcome the new interns"

  },
  {
    id: 5,
    title: "Facebook quarterly meeting",
    price: 500,
    image: require("../assets/facebookmeeting.jpg"),
    status: "Submitted",
    description:"Shareholders meeting for the quarterly financial report"

  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            status={item.status}
            description={item.description}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
