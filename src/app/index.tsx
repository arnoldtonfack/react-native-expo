
import Specer from "@/components/Specer";
import ThemeLogo from "@/components/ThemeLogo";
import ThemeText from "@/components/ThemeText";
import ThemeView from "@/components/ThemeView";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import 'react-native-websocket';


const HomeScreen = () => {
  return (
    <ThemeView style={styles.container} safe={true}>
      <ThemeLogo />
      <Specer height={20} />
      <ThemeText style={styles.titre} title={true}>
        The Number 1
      </ThemeText>
      <Specer height={10} />
      <ThemeText>Reading List App</ThemeText>
      <Specer />
      <Link href="/login" style={styles.link}>
        <ThemeText>Login page</ThemeText>
      </Link>
      <Specer height={10} />

      <Link href="/register" style={styles.link}>
        <ThemeText>Register page</ThemeText>
      </Link>
      <Specer />
       
      <Link href="/profile" style={styles.link}>
        <ThemeText>Profile page</ThemeText>
      </Link>
    </ThemeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titre: {
    fontSize: 18,
    fontWeight: "bold",
  },

  link: {
    borderBottomWidth: 1,
  },
});
