import styles from "./page.module.css";
import Navbar from '../components/Navbar'
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from '../components/HomePage'

export default function Home() {
  return (
    <main className={styles.main}>
      <ChakraProvider>
        <Navbar />
        <HomePage/>
      </ChakraProvider>
    </main>
  );
}
