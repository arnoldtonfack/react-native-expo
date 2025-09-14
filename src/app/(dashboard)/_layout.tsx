import UserOnly from "@/components/Auth/UserOnly";
import { Colors } from "@/constant/colors";
import { BooksProvider } from "@/context/BooksContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme as "dark" | "light"];
  return (
    <>
      <UserOnly>
        <BooksProvider>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: theme.navBackground,
            },
            tabBarActiveTintColor: theme.iconColorFocused,
            tabBarInactiveTintColor: theme.iconColor,
          }}
        >
          <Tabs.Screen
            name="profile"
            options={{
              title: "Profile",
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? "person" : "person-outline"}
                  size={24}
                  color={focused ? theme.iconColorFocused : theme.iconColor}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="books"
            options={{
              title: "Books",

              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? "book" : "book-outline"}
                  size={24}
                  color={focused ? theme.iconColorFocused : theme.iconColor}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="create"
            options={{
              title: "Create",
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? "create" : "create-outline"}
                  size={24}
                  color={focused ? theme.iconColorFocused : theme.iconColor}
                />
              ),
            }}
          />
          <Tabs.Screen
          name="books/[id]"
          options={{
            href: null,
          }}
          />
        </Tabs>
        </BooksProvider>
      </UserOnly>
    </>
  );
};

export default DashboardLayout;
