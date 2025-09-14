import { Colors } from '@/constant/colors'
import React from 'react'
import { Pressable, PressableProps, StyleProp, StyleSheet, ViewStyle } from 'react-native'


interface ThemeButtonProps extends PressableProps {
    style?: StyleProp<ViewStyle>
}

const ThemeButton: React.FC<ThemeButtonProps> = ({style, ...props}) => {
  return (
    <Pressable
    style={({pressed}) => [styles.btn, pressed && styles.pressed, style]}
    {...props}
    />
    
  )
}

export default ThemeButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 5,
        marginVertical: 9,
    },
    pressed: {
        opacity: 0.75,
    },
})