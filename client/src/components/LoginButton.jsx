import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Center,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";

import axios from "axios";

export default function LoginButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

    console.log(state);
  };

  const login = async (e) => {
    axios({
      method: "POST",
      url: "http://localhost:4000/login",
      data: {
        username: state.username,
        password: state.password,
      },
    }).then((res) => {
      localStorage.setItem("token", res.data.token);
    });
  };

  return (
    <>
      <Button onClick={onOpen} variant="ghost">
        Login
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <FormControl width="sm">
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  name="username"
                  marginBottom="2rem"
                  p={2}
                  placeholder="Username"
                  onChange={handleChange}
                />
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  name="password"
                  marginBottom="2rem"
                  p={2}
                  placeholder="Password"
                  onChange={handleChange}
                />
              </FormControl>
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              variant="ghost"
              bgColor="cyan.600"
              type="submit"
              onClick={() => login()}
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
