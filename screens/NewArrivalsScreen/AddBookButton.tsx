import React, { useState, useCallback, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Switch,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import Toast from "react-native-toast-message";
import { BookContext } from "../../assets/context/BookContext"; // Correct import path

const AddBookButton: React.FC = () => {
  const [uploadModalVisible, setUploadModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [cover, setCover] = useState<DocumentPicker.DocumentResult | null>(
    null
  );
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [isRead, setIsRead] = useState(false);
  const { addBook, refreshBooks } = useContext(BookContext); // Use context directly

  const pickDocument = useCallback(async () => {
    try {
      const result: DocumentPicker.DocumentResult =
        await DocumentPicker.getDocumentAsync({});
      if (result.type === "success") {
        setCover(result);
        setUploadModalVisible(false);
        Toast.show({
          type: "success",
          text1: "Document Uploaded",
          text2: "Your document has been uploaded successfully.",
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Document pick canceled",
          text2: "User canceled the document picker.",
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error picking document",
        text2: (error as Error).message,
      });
    }
  }, []);

  const pickImage = useCallback(async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error picking image",
        text2: (error as Error).message,
      });
    }
  }, []);

  const handleAddBook = useCallback(async () => {
    if (title && author && description && rating !== null) {
      try {
        const newBook = {
          title,
          author,
          description,
          rating,
          isRead,
          imageUri: imageUri || "",
        };
        await addBook(newBook); // Add book using context
        await refreshBooks(); // Refresh book list
        Toast.show({
          type: "success",
          text1: "Book added",
          text2: "Book was successfully added to your collection.",
        });
        setAddModalVisible(false);
        setTitle("");
        setAuthor("");
        setDescription("");
        setRating(null);
        setCover(null);
        setImageUri(null);
        setIsRead(false);
      } catch (error) {
        Toast.show({
          type: "error",
          text1: "Error adding book",
          text2: (error as Error).message,
        });
      }
    } else {
      Toast.show({
        type: "error",
        text1: "Missing fields",
        text2: "Please fill all the fields.",
      });
    }
  }, [
    title,
    author,
    description,
    rating,
    isRead,
    imageUri,
    addBook,
    refreshBooks,
  ]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setUploadModalVisible(true)}
      >
        <Ionicons name="cloud-upload" size={30} color="#fff" />
        <Text style={styles.buttonText}>Upload Book</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setAddModalVisible(true)}
      >
        <Ionicons name="add" size={30} color="#fff" />
        <Text style={styles.buttonText}>Add Book</Text>
      </TouchableOpacity>

      {/* Upload Modal */}
      <Modal
        visible={uploadModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Upload Book Document</Text>
            <TouchableOpacity style={styles.modalButton} onPress={pickDocument}>
              <Text style={styles.buttonText}>Select Document</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setUploadModalVisible(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Add Book Modal */}
      <Modal visible={addModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Book Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Author"
              value={author}
              onChangeText={setAuthor}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
            />
            <TextInput
              style={styles.input}
              placeholder="Rating (1-5)"
              value={rating?.toString()}
              onChangeText={(value) => setRating(parseInt(value, 10))}
              keyboardType="numeric"
            />
            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>Read</Text>
              <Switch value={isRead} onValueChange={setIsRead} />
            </View>
            <TouchableOpacity style={styles.modalButton} onPress={pickImage}>
              <Text style={styles.buttonText}>Pick Cover Image</Text>
            </TouchableOpacity>
            {imageUri && (
              <Image source={{ uri: imageUri }} style={styles.imagePreview} />
            )}
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleAddBook}
            >
              <Text style={styles.buttonText}>Save Book</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setAddModalVisible(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#1E3D58",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  switchLabel: {
    marginRight: 10,
  },
  modalButton: {
    backgroundColor: "#1E3D58",
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default AddBookButton;
