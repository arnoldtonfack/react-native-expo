import React from 'react'
import { StyleProp, useColorScheme, View, ViewProps, ViewStyle } from 'react-native'
import { Colors } from '../constant/colors'

interface ThemeViewProps extends ViewProps {
    style?: StyleProp<ViewStyle>
}

const ThemeView: React.FC<ThemeViewProps> = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme as 'dark' | 'light']
  return (
    <View style={[{backgroundColor: theme.background}, style]}
          {...props}/>
  )
}

export default ThemeView