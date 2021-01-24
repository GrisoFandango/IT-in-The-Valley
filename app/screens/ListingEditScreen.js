import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";
import listingsApi from "../api/listings"
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select at least one image."),
});



function ListingEditScreen() {

  const [uploadVisible, setUploadVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleSubmit = async (listing, {resetForm}) => {
    setProgress(0)
    setUploadVisible(true)
    const result = await listingsApi.addListings(
      listing, 
      (progress) => setProgress(progress)
      );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing")
    }

    resetForm();
  }

  return (
    <Screen style={styles.container}>
      <UploadScreen onDone={()=> setUploadVisible(false)} progress={progress} visible={uploadVisible}/>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          images: [],
          staus:"Submitted"
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
