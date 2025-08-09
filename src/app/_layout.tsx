import { Colors } from "@/constant/colors";
import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

const RootStack = () => {
  const colorScheme = useColorScheme();

  const theme = Colors[colorScheme as "dark" | "light"];
  console.log("====================================");
  console.log(colorScheme);
  console.log("====================================");
  return (
    <>
      {/* <StatusBar style="auto" /> */}
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.navBackground,
            },
            headerTintColor: theme.title,
          }}
        >
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="(auth)" options={{headerShown: false}} />
        </Stack>
    </>
  );
};

export default RootStack;
