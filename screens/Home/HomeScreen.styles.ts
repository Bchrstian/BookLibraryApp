import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF", // Default background color
  },
  header: {
    backgroundColor: "#1E3D58", // Apply blue color to the header
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    fontSize: 24,
    color: "#FFF", // Text color in header
  },
  title: {
    fontSize: 20,
    color: "#FFF", // Text color in header
  },
  searchInput: {
    backgroundColor: "#FFF",
    borderColor: "#1E3D58",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
  },
  sortButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sortButton: {
    padding: 10,
    borderRadius: 5,
  },
  sortButtonActive: {
    backgroundColor: "#1E3D58",
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  category: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#EEE",
  },
  categoryText: {
    fontSize: 14,
  },
  bookItem: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: "#FFF",
    borderRadius: 8,
    alignItems: "center",
  },
  bookCover: {
    width: 120,
    height: 180,
    marginBottom: 10,
    borderRadius: 8,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    marginBottom: 4,
  },
  rating: {
    flexDirection: "row",
  },
  footer: {
    height: 80,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    alignItems: "center",
  },
  modalBookCover: {
    width: 150,
    height: 220,
    marginBottom: 20,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalAuthor: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 14,
    marginBottom: 20,
  },
  descriptionInput: {
    backgroundColor: "#FFF",
    width: "100%",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  editButton: {
    backgroundColor: "#1E3D58",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#1E3D58",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#CCC",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 14,
  },
});

export default styles;
