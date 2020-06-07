import React from "react";
import { StatusBar } from "react-native";

// import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/ubuntu";
// import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/roboto";

import { AppLoading } from "expo";
import { useFonts, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";

import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </>
    );
  }
}
