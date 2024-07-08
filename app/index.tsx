import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Aora!</Text>

      <Link href="/profile" style={styles.profileLink}>
        <Text>Go to Profile</Text>
      </Link>
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
  },
  profileLink: {
    color: "white",
    backgroundColor: "blue",
    padding: 10,
    marginTop: 10
  }
});
