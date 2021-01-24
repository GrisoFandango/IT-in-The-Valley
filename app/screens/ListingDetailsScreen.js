import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import Text from "../components/Text";
import Button from "../components/Button"
import routes from "../navigation/routes"


function ListingDetailsScreen({ route, navigation }) {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={{uri:listing.images[0].url}} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
        <Text style={styles.description}>{listing.description}</Text>
        <Text style={styles.status}>Status: {listing.status}</Text>

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
    marginTop:20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  status:{
    fontSize:15,
    fontStyle:"italic",
    marginTop:20
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
