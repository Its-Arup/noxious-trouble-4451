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
    <Container maxW={"80%"} border="1px solid red">
      <Flex justifyContent="space-around">
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
        <Button>Sign In</Button>
      </Flex>
    </Container>
  );
};

export default Navbar;
