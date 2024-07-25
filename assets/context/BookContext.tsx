// src/context/BookContext.tsx
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import {
  Book,
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} from "../../navigation/services/DatabaseService";

interface BookContextType {
  books: Book[];
  addBook: (book: Omit<Book, "id">) => Promise<void>;
  updateBook: (book: Book) => Promise<void>;
  deleteBook: (id: number) => Promise<void>;
  refreshBooks: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

export const BookContext = createContext<BookContextType>({
  books: [],
  addBook: async () => {},
  updateBook: async () => {},
  deleteBook: async () => {},
  refreshBooks: async () => {},
  loading: false,
  error: null,
});

export const BookProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const refreshBooks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedBooks = await getBooks();
      setBooks(fetchedBooks);
    } catch (e) {
      setError("Failed to fetch books.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshBooks();
  }, [refreshBooks]);

  const contextAddBook = useCallback(
    async (book: Omit<Book, "id">) => {
      setLoading(true);
      setError(null);
      try {
        await addBook(book);
        await refreshBooks();
      } catch (e) {
        setError("Failed to add book.");
      } finally {
        setLoading(false);
      }
    },
    [refreshBooks]
  );

  const contextUpdateBook = useCallback(
    async (book: Book) => {
      setLoading(true);
      setError(null);
      try {
        await updateBook(book);
        await refreshBooks();
      } catch (e) {
        setError("Failed to update book.");
      } finally {
        setLoading(false);
      }
    },
    [refreshBooks]
  );

  const contextDeleteBook = useCallback(
    async (id: number) => {
      setLoading(true);
      setError(null);
      try {
        await deleteBook(id);
        await refreshBooks();
      } catch (e) {
        setError("Failed to delete book.");
      } finally {
        setLoading(false);
      }
    },
    [refreshBooks]
  );

  return (
    <BookContext.Provider
      value={{
        books,
        addBook: contextAddBook,
        updateBook: contextUpdateBook,
        deleteBook: contextDeleteBook,
        refreshBooks,
        loading,
        error,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
