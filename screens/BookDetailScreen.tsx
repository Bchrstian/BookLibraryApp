// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Modal,
//   Button,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { Book } from "../navigation/services/DatabaseService";

// interface BookDetailScreenProps {
//   book: Book;
//   onEdit: (book: Book) => void;
//   onDelete: (id: number) => void;
//   onClose: () => void;
// }

// const BookDetailScreen: React.FC<BookDetailScreenProps> = ({
//   book,
//   onEdit,
//   onDelete,
//   onClose,
// }) => {
//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={!!book}
//       onRequestClose={onClose}
//     >
//       <View style={styles.container}>
//         <View style={styles.detailContainer}>
//           <Text style={styles.title}>{book.title}</Text>
//           <Text style={styles.author}>By {book.author}</Text>
//           <Text style={styles.description}>{book.description}</Text>
//           <Text style={styles.rating}>Rating: {book.rating}</Text>
//           {book.imageUri ? (
//             <Image source={{ uri: book.imageUri }} style={styles.image} />
//           ) : null}
//           <View style={styles.buttons}>
//             <TouchableOpacity
//               onPress={() => onEdit(book)}
//               style={styles.button}
//             >
//               <Ionicons name="pencil" size={24} color="blue" />
//               <Text>Edit</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => onDelete(book.id)}
//               style={styles.button}
//             >
//               <Ionicons name="trash" size={24} color="red" />
//               <Text>Delete</Text>
//             </TouchableOpacity>
//             <Button title="Close" onPress={onClose} />
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0,0,0,0.5)",
//   },
//   detailContainer: {
//     backgroundColor: "white",
//     padding: 20,
//     borderRadius: 10,
//     width: "80%",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   author: {
//     fontSize: 18,
//     color: "#555",
//   },
//   description: {
//     fontSize: 16,
//     marginVertical: 10,
//   },
//   rating: {
//     fontSize: 16,
//   },
//   image: {
//     width: 100,
//     height: 150,
//     resizeMode: "cover",
//     marginVertical: 10,
//   },
//   buttons: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     width: "100%",
//     marginTop: 10,
//   },
//   button: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginHorizontal: 10,
//   },
// });

// export default BookDetailScreen;
