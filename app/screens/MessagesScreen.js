import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import routes from "../navigation/routes";


const initialMessages = [
  {
    id: 1,
    title: "Claire Kent",
    description: "Hey! The Silicon Valley picture was fantastic!",
    email:"ClaireKent@gmail.com",
    image: require("../assets/ClaireKent.jpg"),
    imagePicked:require("../assets/SiliconValley.jpg"),
  },
  {
    id: 2,
    title: "Suzanne Keiton",
    description:
      "Sorry, but at the moment we do not need a Bill Gates's picture. I will archive it, just in case we will need in future",
    email:"SuzanneKeiton@gmail.com",
    image: require("../assets/SuzanneKeiton.jpg"),
    imagePicked:require("../assets/billgates.jpg"),
  },
];

function MessagesScreen({navigation}) {
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => navigation.navigate(routes.MESSAGE_DETAIL, item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
