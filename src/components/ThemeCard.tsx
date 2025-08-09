import React from 'react'
import { StyleProp, StyleSheet, useColorScheme, View, ViewProps, ViewStyle } from 'react-native'
import { Colors } from '../constant/colors'

interface ThemeCardProps extends ViewProps {
    style?: StyleProp<ViewStyle>
}

const ThemeCard: React.FC<ThemeCardProps> = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme as 'dark' | 'light']
  return (
    <View style={[{backgroundColor: theme.uiBackground}, style, styles.card]} {...props}/>
  )
}

export default ThemeCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20,
    }
})