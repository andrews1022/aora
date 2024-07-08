import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text>RootLayout</Text>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});
