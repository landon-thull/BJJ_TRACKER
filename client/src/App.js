import './App.css';
import { Flex, Container, Image, Heading, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import { TypeAnimation } from "react-type-animation"

import axios from 'axios';

const typeSequence = [
  "Win More Matches",
  3000,
  "Find Your Weaknesses",
  3000,
  "Master Your Game",
  3000,
]



function App() {
  return (
    <Flex direction="column">
      <Header />
      <Container py={4}>
        <Flex direction="column" align="center">
          <Flex direction="column" align="center" py={16} justify="center">
            <Heading as="h1" size="2xl" fontWeight="bold" p={2} color="cyan.600">Track Your Rolls</Heading>
            <Heading as="h2" size="lg" fontWeight="bold" p={2}>
              <TypeAnimation sequence={typeSequence} repeat={Infinity} speed={5} />
            </Heading>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}

export default App;
