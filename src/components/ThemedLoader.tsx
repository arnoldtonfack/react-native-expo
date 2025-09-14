import { Colors } from "@/constant/colors";
import React from "react";
import { ActivityIndicator, useColorScheme } from "react-native";
import ThemeView from "./ThemeView";

const ThemedLoader = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme as "dark" | "light"];
  return (
    <ThemeView style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }}>
      <ActivityIndicator size="large" color={theme.text} />
    </ThemeView>
  );
};

export default ThemedLoader;
