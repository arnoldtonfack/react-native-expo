import React from 'react'
import { Image, View, useColorScheme } from 'react-native'

const DarkLogo = require('../../assets/img/logo_dark.png')
const LightLogo = require('../../assets/img/logo_light.png')

const ThemeLogo = ({...props}) => {
    const colorScheme = useColorScheme()
    const logoSource = colorScheme ==='dark' ? DarkLogo : LightLogo
  return (
    <View>
      <Image source={logoSource} {...props} />
    </View>
  )
}

export default ThemeLogo