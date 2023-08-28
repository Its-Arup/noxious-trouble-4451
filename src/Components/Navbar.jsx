import { Link as ReactRouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Link as ChakraLink,
  Container,
  Flex,
} from "@chakra-ui/react";

import Project_Logo from "../assets/Project_Logo.png";
const Navbar = () => {
  return (
    // //border="1px solid red"
    <Container maxW={"80%"} mt={"1rem"}>
      <Flex justifyContent="space-between">
        <ChakraLink as={ReactRouterLink} to="/">
          <Box>
            <img src={Project_Logo} alt="LOGO" />
          </Box>
        </ChakraLink>

        <Container
          maxW="550px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          // border="1px solid red"
          fontFamily= "Poppins, sans-serif" fontWeight="500"
        >
          <Box>
            <ChakraLink as={ReactRouterLink} to="/ourstory">
              Our Story
            </ChakraLink>
          </Box>
          <Box>
            <ChakraLink as={ReactRouterLink} to="/community">
              Community
            </ChakraLink>
          </Box>
          <Box>
            <ChakraLink as={ReactRouterLink} to="/ourmission">
              Our Mission
            </ChakraLink>
          </Box>
          <Box>
            <ChakraLink as={ReactRouterLink} to="/about">
              About
            </ChakraLink>
          </Box>
        </Container>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <ChakraLink as={ReactRouterLink} to="/signup">
            <Button colorScheme="pink">Sign In</Button>
          </ChakraLink>
        </Box>
      </Flex>
    </Container>
  );
};

export default Navbar;
