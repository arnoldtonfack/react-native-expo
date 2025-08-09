import Specer from '@/components/Specer'
import ThemeText from '@/components/ThemeText'
import ThemeView from '@/components/ThemeView'
import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'
const Login = () => {
  return (
     <ThemeView style={styles.container}>
        <Specer/>
        <ThemeText title={true} style={styles.titre}>Login to your account</ThemeText>

        <Specer height={10}/>
        <Link href='/register'>
          <ThemeText style={{textAlign: 'center'}}>Register instead</ThemeText>
        </Link>
     </ThemeView>
  )
}

export default Login

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