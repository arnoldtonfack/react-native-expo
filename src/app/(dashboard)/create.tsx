import Specer from '@/components/Specer'
import ThemeButton from '@/components/ThemeButton'
import ThemeText from '@/components/ThemeText'
import ThemeView from '@/components/ThemeView'
import ThemedInput from '@/components/ThemedInput'
import { useBooks } from '@/hooks/useBook'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'

// themed components

const Create = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)

  const { createBook } = useBooks()
  const router = useRouter()

  async function handleSubmit() {
    if (!title.trim() || !author.trim() || !description.trim()) return

    setLoading(true)
    
    // create the book
    await createBook({ title, author, description })

    // reset fields
    setTitle("")
    setAuthor("")
    setDescription("")

    // redirect
    router.replace("/books")

    // reset loading state
    setLoading(false) 
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <ThemeView style={styles.container}>

        <ThemeText title={true} style={styles.heading}>
          Add a New Book
        </ThemeText>
        <Specer />

        <ThemedInput
          style={styles.input}
          placeholder="Book Title"
          value={title}
          onChangeText={setTitle}
        />
        <Specer />

        <ThemedInput
          style={styles.input}
          placeholder="Author"
          value={author}
          onChangeText={setAuthor}
        />
        <Specer />

        <ThemedInput
          style={styles.multiline}
          placeholder="Book Description"
          value={description}
          onChangeText={setDescription}
          multiline={true}
        />
        <Specer />

        <ThemeButton onPress={handleSubmit} disabled={loading}>
          <Text style={{ color: '#fff' }}>
            {loading ? "Saving..." : "Create Book"}
          </Text>
        </ThemeButton>

      </ThemeView>
    </TouchableWithoutFeedback>
  )
}

export default Create

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
  input: {
    padding: 20,
    borderRadius: 6,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
  multiline: {
    padding: 20,
    borderRadius: 6,
    minHeight: 100,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
})