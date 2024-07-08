import { Slot, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          // this hides the default header
          headerShown: false
        }}
      />
    </Stack>
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
