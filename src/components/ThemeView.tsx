import React from 'react';
import { SafeAreaView, StyleProp, useColorScheme, View, ViewProps, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../constant/colors';

interface ThemeViewProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  safe?: boolean;
}

const ThemeView: React.FC<ThemeViewProps> = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme as 'dark' | 'light'];
  const insets = useSafeAreaInsets();

  if (!safe) {
    return (
      <View
        style={[{ backgroundColor: theme.background }, style]}
        {...props}
      />
    );
  }

  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemeView;
