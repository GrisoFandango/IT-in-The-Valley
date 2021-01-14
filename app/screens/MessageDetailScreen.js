import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import Text from "../components/Text";
import ListItem from "../components/lists/ListItem"

function ListingDetailsScreen({ route }) {
  const message = route.params;
  
  return (
    <View>
      <Image style={styles.image} source={message.imagePicked} />
      <ListItem
            title={message.title}
            subTitle={message.email}
            image={message.image}
          />
      <View style={styles.detailsContainer}>
        <Text style={styles.description}>{message.description}</Text>
        <View style={styles.userContainer}>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  description:{
    fontSize:18,
  },
  image: {
    width: "100%",
    height: 300,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;