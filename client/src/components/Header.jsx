import {
  Box,
  Flex,
  useColorMode,
  Button,
  Heading,
  useMediaQuery,
  Stack,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

import LoginButton from "./LoginButton";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box py="1rem" px="2rem" position="sticky" shadow="sm">
      <Flex direction="row" justify="space-between" align="center">
        <Heading size="lg" color="cyan.600">
          BJJ Tracker
        </Heading>
        <Flex direction="row" justify="center">
          {isMobile ? (
            <Stack>
              <LoginButton />
            </Stack>
          ) : (
            <h1>Testing</h1>
          )}
          <Button onClick={toggleColorMode} variant="ghost" mx="1rem">
            {isDark ? <FaMoon /> : <FaSun />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
