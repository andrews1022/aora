import { Link } from "expo-router";
import { Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="mb-4">HomeScreen</Text>

      <Link href="/profile">
        <Text className="bg-blue-300 text-white text-2xl">Go to Profile</Text>
      </Link>
    </View>
  );
};

export default HomeScreen;
