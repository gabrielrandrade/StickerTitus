import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/imageViewer";
import Button from "@/components/Button";

const PlacehoderImage = require("@/assets/images/background-image.jpg");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlacehoderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" />
        <Button label="Use this photo" />
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
  imageContainer: {
    flex: 1,
    paddingTop: 8,
  },
  footerContainer: {
    flex: 1 / 3,// é um terço da pagina
    alignItems: "center",
  },
});
