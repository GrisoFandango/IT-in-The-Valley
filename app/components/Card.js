import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function Card({ title, subTitle, imageUrl, status, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri:imageUrl}} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text>
          <Text style={styles.status}>
            Status: {status}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    flexDirection:"row"
  },
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  status:{
    fontSize:10,
    fontStyle:"italic",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize:15,
    marginBottom: 20,
  },
  title: {
    // marginBottom: 1,
    fontSize:15,
  },
});

export default Card;
