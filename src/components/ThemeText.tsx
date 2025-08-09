import React from "react";
import { StyleProp, Text, TextStyle, useColorScheme } from "react-native";
import { Colors } from "../constant/colors";
interface ThemeTextProps {
  title?: boolean;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

const ThemeText: React.FC<ThemeTextProps> = ({
  style,
  children,
  title = false,
  ...props
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme as "dark" | "light"];
  const textColor = title ? theme.title : theme.text;
  return (
    <Text style={[{ color: textColor }, style]} {...props}>
      {children}
    </Text>
  );
};

export default ThemeText;
