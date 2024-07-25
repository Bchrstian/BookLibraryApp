import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Book, updateBook } from "../../navigation/services/DatabaseService";

interface EditBookScreenProps {
  route: {
    params: {
      book: Book; // Use Book interface here
    };
  };
  navigation: any;
}

const EditBookScreen: React.FC<EditBookScreenProps> = ({
  route,
  navigation,
}) => {
  const { book } = route.params;
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [rating, setRating] = useState(book.rating.toString());
  const [description, setDescription] = useState(book.description);

  const handleSave = async () => {
    try {
      await updateBook({
        ...book,
        title,
        author,
        rating: parseInt(rating, 10),
        description,
      });
      navigation.goBack(); // Navigate back after saving
    } catch (error) {
      console.error("Error updating book:", error);
      Alert.alert("Error", "Could not update book details.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Book</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        value={author}
        onChangeText={setAuthor}
        placeholder="Author"
      />
      <TextInput
        style={styles.input}
        value={rating}
        onChangeText={setRating}
        placeholder="Rating"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 16,
    padding: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1E3D58",
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default EditBookScreen;
