import Specer from '@/components/Specer'
import ThemeText from '@/components/ThemeText'
import ThemeView from '@/components/ThemeView'
import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'
const Register = () => {
  return (
     <ThemeView style={styles.container}>
        <Specer/>
        <ThemeText title={true} style={styles.titre}>Register to your account</ThemeText>

        <Specer height={10}/>
        <Link href='/register'>
          <ThemeText style={{textAlign: 'center'}}>login instead</ThemeText>
        </Link>
     </ThemeView>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    titre: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 4
    }
})