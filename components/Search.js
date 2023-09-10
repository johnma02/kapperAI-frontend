import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Button, Input } from "@rneui/themed";
import AnimatedGallery from "@akumzy/react-native-animated-gallery";

export default function Search({ inSearch, setInSearch, setNewHairstyle }) {
  const [items, setItems] = useState([]);
  const [userInput, setUserInput] = useState("");

  // does not work yet
  const handleSubmit = () => {
    return fetch(`http://10.250.132.52:8000/search?query=${userInput}`)
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        console.log("success");
        return;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Loader = () => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Loading..</Text>
      </View>
    );
  };

  return (
    <View style={styles.body}>
      <AnimatedGallery
        imageUrls={items}
        renderLoader={<Loader />}
        disablefullScreen={false}
        thumbBorderWidth={2}
        thumbBorderColor={"white"}
        spacing={8}
        imageSize={40}
        backgroundColor={"#0000"}
        invertThumbDirection={false}
        invertGalleryDirection={false}
      />
      <Text>Search</Text>
      {items != null}
      <Input
        placeholder="Search Hairstyles..."
        onChangeText={(text) => setUserInput(text)}
        onSubmitEditing={handleSubmit}
      />
      <Button style={{ margin: "10px" }} onPress={() => setInSearch(false)}>
        Back
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    height: "90%",
    padding: 35,
  },
});
