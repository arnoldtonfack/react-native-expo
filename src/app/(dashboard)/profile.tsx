import Specer from '@/components/Specer'
import ThemeButton from '@/components/ThemeButton'
import ThemeText from '@/components/ThemeText'
import ThemeView from '@/components/ThemeView'
import { useUser } from '@/hooks/userUser'
import { StyleSheet } from 'react-native'


const Profile = () => {

  const {user, logout } = useUser();
  return (
    <ThemeView style={styles.container} safe={true}>

      <ThemeText title={true} style={styles.heading}>
        Welcome {user?.email}
      </ThemeText>
      <Specer />

      <ThemeText>Time to start reading some books...</ThemeText>
      <Specer />
      <ThemeButton onPress={logout}>
        <ThemeText>Logout</ThemeText>
      </ThemeButton>

    </ThemeView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
})