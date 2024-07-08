import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Aora!</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});
