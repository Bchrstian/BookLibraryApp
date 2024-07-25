import React, { useState, useContext } from "react";
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BookContext } from "../../assets/context/BookContext";
import { Book } from "../../navigation/services/DatabaseService";
import { Text, TextInput } from "react-native-paper";
import { useTheme } from "../../navigation/ThemeProvider";
import styles from "./HomeScreen.styles";

// Define the types for the navigators
type BottomTabParamList = {
  Home: undefined;
  NewArrivals: undefined;
  Settings: undefined;
};

type DrawerParamList = {
  Home: undefined;
  Settings: undefined;
};

// Define the navigation prop type
type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, "Home">,
  DrawerNavigationProp<DrawerParamList>
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const {
    books,
    addBook,
    updateBook,
    deleteBook,
    refreshBooks,
    loading,
    error,
  } = useContext(BookContext);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortBy, setSortBy] = useState<"title" | "author" | "rating">("title");
  const [localLoading, setLocalLoading] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editableDescription, setEditableDescription] = useState<string>("");

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const handleSort = (criteria: "title" | "author" | "rating") => {
    if (sortBy === criteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(criteria);
      setSortOrder("asc");
    }
  };

  const filteredBooks = books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      let comparison = 0;
      if (sortBy === "title") {
        comparison = a.title.localeCompare(b.title);
      } else if (sortBy === "author") {
        comparison = a.author.localeCompare(b.author);
      } else if (sortBy === "rating") {
        comparison = a.rating - b.rating;
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });

  const handleEdit = () => {
    if (selectedBook) {
      setEditableDescription(selectedBook.description || "");
      setIsEditing(true);
    }
  };

  const handleDelete = async () => {
    if (selectedBook) {
      setLocalLoading(true);
      try {
        await deleteBook(selectedBook.id!); // Ensure id is present
        await refreshBooks();
        setSelectedBook(null); // Close modal
      } catch (error) {
        console.error("Error deleting book:", error);
      } finally {
        setLocalLoading(false);
      }
    }
  };

  const handleSave = async () => {
    if (selectedBook) {
      const updatedBook: Book = {
        ...selectedBook,
        description: editableDescription,
      };
      setLocalLoading(true);
      try {
        await updateBook(updatedBook);
        await refreshBooks();
        setIsEditing(false);
        setSelectedBook(null);
      } catch (error) {
        console.error("Error updating book:", error);
      } finally {
        setLocalLoading(false);
      }
    }
  };

  if (loading || localLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#1E3D58" />
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#121212" : "#FFFFFF" },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text
            style={[styles.greeting, { color: isDarkMode ? "#FFF" : "#000" }]}
          >
            Hello, Christian
          </Text>
        </View>
        <Text style={[styles.title, { color: isDarkMode ? "#FFF" : "#000" }]}>
          The best books for you!
        </Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for your favourite books"
          placeholderTextColor={isDarkMode ? "#888" : "#AAA"}
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <View style={styles.sortButtonsContainer}>
          <TouchableOpacity
            style={[
              styles.sortButton,
              sortBy === "title" && styles.sortButtonActive,
              { backgroundColor: isDarkMode ? "#333" : "#DDD" },
            ]}
            onPress={() => handleSort("title")}
          >
            <FontAwesome
              name={sortBy === "title" ? "sort-amount-asc" : "sort"}
              size={24}
              color={
                sortBy === "title" ? "#fff" : isDarkMode ? "#FFF" : "#1E3D58"
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sortButton,
              sortBy === "author" && styles.sortButtonActive,
              { backgroundColor: isDarkMode ? "#333" : "#DDD" },
            ]}
            onPress={() => handleSort("author")}
          >
            <FontAwesome
              name={sortBy === "author" ? "sort-amount-asc" : "sort"}
              size={24}
              color={
                sortBy === "author" ? "#fff" : isDarkMode ? "#FFF" : "#1E3D58"
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sortButton,
              sortBy === "rating" && styles.sortButtonActive,
              { backgroundColor: isDarkMode ? "#333" : "#DDD" },
            ]}
            onPress={() => handleSort("rating")}
          >
            <FontAwesome
              name={sortBy === "rating" ? "sort-amount-asc" : "sort"}
              size={24}
              color={
                sortBy === "rating" ? "#fff" : isDarkMode ? "#FFF" : "#1E3D58"
              }
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.categories}>
        {["New", "Novel", "Kids", "Adventure", "Design"].map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.category,
              { backgroundColor: isDarkMode ? "#333" : "#EEE" },
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                { color: isDarkMode ? "#FFF" : "#000" },
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.bookItem}
            onPress={() => setSelectedBook(item)}
          >
            <Image source={{ uri: item.imageUri }} style={styles.bookCover} />
            <Text
              style={[
                styles.bookTitle,
                { color: isDarkMode ? "#FFF" : "#000" },
              ]}
            >
              {item.title}
            </Text>
            <Text
              style={[
                styles.bookAuthor,
                { color: isDarkMode ? "#FFF" : "#000" },
              ]}
            >
              {item.author}
            </Text>
            <View style={styles.rating}>
              {[...Array(5)].map((_, index) => (
                <FontAwesome
                  key={index}
                  name={index < item.rating ? "star" : "star-o"}
                  size={16}
                  color="#FFD700"
                />
              ))}
            </View>
          </TouchableOpacity>
        )}
        ListFooterComponent={<View style={styles.footer} />}
      />

      {selectedBook && (
        <Modal
          transparent={true}
          visible={true}
          onRequestClose={() => setSelectedBook(null)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Image
                source={{ uri: selectedBook.imageUri }}
                style={styles.modalBookCover}
              />
              <Text
                style={[
                  styles.modalTitle,
                  { color: isDarkMode ? "#FFF" : "#000" },
                ]}
              >
                {selectedBook.title}
              </Text>
              <Text
                style={[
                  styles.modalAuthor,
                  { color: isDarkMode ? "#FFF" : "#000" },
                ]}
              >
                by {selectedBook.author}
              </Text>
              {isEditing ? (
                <>
                  <TextInput
                    style={styles.descriptionInput}
                    multiline
                    value={editableDescription}
                    onChangeText={setEditableDescription}
                  />
                  <View style={styles.modalButtons}>
                    <TouchableOpacity
                      style={[
                        styles.saveButton,
                        { backgroundColor: isDarkMode ? "#444" : "#1E3D58" },
                      ]}
                      onPress={handleSave}
                    >
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.cancelButton,
                        { backgroundColor: isDarkMode ? "#444" : "#CCC" },
                      ]}
                      onPress={() => setIsEditing(false)}
                    >
                      <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </>
              ) : (
                <>
                  <Text
                    style={[
                      styles.modalDescription,
                      { color: isDarkMode ? "#FFF" : "#000" },
                    ]}
                  >
                    {selectedBook.description}
                  </Text>
                  <View style={styles.modalButtons}>
                    <TouchableOpacity
                      style={[
                        styles.editButton,
                        { backgroundColor: isDarkMode ? "#444" : "#1E3D58" },
                      ]}
                      onPress={handleEdit}
                    >
                      <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.deleteButton,
                        { backgroundColor: isDarkMode ? "#444" : "#1E3D58" },
                      ]}
                      onPress={handleDelete}
                    >
                      <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.cancelButton,
                        { backgroundColor: isDarkMode ? "#444" : "#CCC" },
                      ]}
                      onPress={() => setSelectedBook(null)}
                    >
                      <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default HomeScreen;
