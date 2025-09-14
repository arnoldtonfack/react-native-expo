import Spacer from '@/components/Specer'
import ThemeCard from '@/components/ThemeCard'
import ThemeText from '@/components/ThemeText'
import ThemeView from '@/components/ThemeView'
import { Colors } from '@/constant/colors'
import { useBooks } from '@/hooks/useBook'
import { useRouter } from 'expo-router'
import { FlatList, Pressable, StyleSheet } from 'react-native'

const Books = () => {
  const { books } = useBooks()
  const router = useRouter()

 const goToBook = (id: string) => {
  router.push({
    pathname: '/books/[id]',
    params: { id }
  });
};



  return (
    <ThemeView style={styles.container} safe={true}>

      <Spacer />
      <ThemeText title={true} style={styles.heading}>
        Your Reading List
      </ThemeText>

      <Spacer />
      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable onPress={() => goToBook(item.$id)}>
            <ThemeCard style={styles.card}>
              <ThemeText style={styles.title}>{item.title}</ThemeText>
              <ThemeText>Written by {item.author}</ThemeText>
            </ThemeCard>
          </Pressable>
        )}
      />

    </ThemeView>
  )
}

export default Books

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  list: {
    marginTop: 40
  },
  card: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
})