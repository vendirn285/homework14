import {HStack, VStack, Box, Text} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";
 
export default function Homepage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, []);

  return (
    <VStack w="100vw">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Collection
      </Text>
    <HStack spacing={4} wrap="wrap">      
      {books?.books?.map((book) => (
        <Box key={`#{book.id} ${book.title}`} 
        _hover={{boxShadow:"1px 3px 5px rgba(0, 0, 0, 0.1)",
        transition:"box-shadow 0,3s ease-in-out",
        }}> 
          <Books key={`${book.id} ${book.title}`} {...book} />
        </Box>
      ))}
      </HStack>
    </VStack>
  );
}
