import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import colors from "../config/colors";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Welcome Back!</Text>
      </View>
      <View style={styles.user}>
      <Image style={styles.userPic} source={require("../assets/JohnDoe.jpg")} />
      <Text style={styles.userName}>John Doe</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          title="Continue"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    marginTop:20,
  },
  user:{
    flexDirection:"row",
    marginBottom:280,
  },
  userName:{
    fontSize:30,
    color: colors.primary,
    fontWeight:"bold",
    padding:15,
  },
  userPic:{
    width:70,
    height:70,
    borderRadius: 35,
  }
});

export default WelcomeScreen;
