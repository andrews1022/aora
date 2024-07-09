import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from "react";
import type { FontSource } from "expo-font";

// prevent the splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

const fonts: Record<string, FontSource> = {
  "Poppins-Black": require("@/assets/fonts/Poppins-Black.ttf"),
  "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
  "Poppins-ExtraBold": require("@/assets/fonts/Poppins-ExtraBold.ttf"),
  "Poppins-ExtraLight": require("@/assets/fonts/Poppins-ExtraLight.ttf"),
  "Poppins-Light": require("@/assets/fonts/Poppins-Light.ttf"),
  "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
  "Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
  "Poppins-Thin": require("@/assets/fonts/Poppins-Thin.ttf")
};

const RootLayout = () => {
  const [loaded, error] = useFonts(fonts);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
