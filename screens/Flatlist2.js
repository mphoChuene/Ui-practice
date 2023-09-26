import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import ImgLogo from "../assets/dishes/dish1.jpeg";
import ImgLogo1 from "../assets/dishes/dish2.jpeg";
import ImgLogo2 from "../assets/dishes/dish3.jpeg";
import ImgLogo3 from "../assets/dishes/dish4.jpeg";
import React from "react";

const Flatlist2 = () => {
  return (
    <View>
      <Text>Flatlist2</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={[styles.card, styles.dish]}>
            <Image source={ImgLogo} style={{ height: 100, width: 100 }} />
          </View>
          <View style={[styles.card, styles.dish]}>
            <Image source={ImgLogo1} style={{ height: 100, width: 100 }} />
          </View>
          <View style={[styles.card, styles.dish]}>
            <Image source={ImgLogo2} style={{ height: 100, width: 100 }} />
          </View>
          <View style={[styles.card, styles.dish]}>
            <Image source={ImgLogo3} style={{ height: 100, width: 100 }} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Flatlist2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    flexDirection: "row",
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  dish: {
    margin: 8,
    elevation: 8,
  },
});
