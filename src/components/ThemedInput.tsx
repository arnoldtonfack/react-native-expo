import { Colors } from "@/constant/colors";
import { StyleProp, TextInput, TextInputProps, TextStyle, useColorScheme } from "react-native";

interface ThemedInputProps extends TextInputProps {
    style?: StyleProp<TextStyle>;
}

const ThemedInput: React.FC<ThemedInputProps> = ({style, ...props}) => {
const colorSheme = useColorScheme()
const theme = Colors[colorSheme as 'light' | 'dark']


  return (
   <TextInput
   style={[
    {
        backgroundColor: theme.uiBackground,
        color: theme.text,
        padding: 10,
        borderRadius: 6,
    }
    , style]}
    {...props}  
   />
  )
}

export default ThemedInput