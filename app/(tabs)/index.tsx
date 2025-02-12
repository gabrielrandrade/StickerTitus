import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/imageViewer";

const PlacehoderImage = require("@/assets/images/background-image.jpg");


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlacehoderImage}/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292E",
  },
  imageContainer:{
    flex:1,
  },
});
