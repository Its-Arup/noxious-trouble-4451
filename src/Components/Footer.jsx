import React from "react";
import Project_Logo from "../assets/Project_Logo.png";
import {
  Container,
  Heading,
  Box,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
function Footer() {
  return (
    <>
    
    <Container
      maxW={"80%"}
      display={"Flex"}
      justifyContent={"space-between"}
      p={"1rem"}
    >
      <Box width={"30%"}>
        <ChakraLink as={ReactRouterLink} to="/">
          <img src={Project_Logo} alt="logo" width={"130px"} />
        </ChakraLink>
        <Text color="blackAlpha.500" mt={"0.5rem"}>
          Lorem ipsum dolor, sit <br /> amet consectetur adipisicing elit.
          <br /> Ea, tenetur.
        </Text>
      </Box>
      <Box display={"Flex"} justifyContent={"space-around"} width={"50%"}>
        <Box display={"Flex"} flexDirection={"column"} gap={"20px"}>
          <Heading as="h2" size="md">
            About
          </Heading>
          <ChakraLink
            as={ReactRouterLink}
            to="/about"
            color="blackAlpha.500"
            mt={"0.5rem"}
          >
            <Text> About Us</Text>
          </ChakraLink>
          <Text color="blackAlpha.500">Features</Text>
          <Text color="blackAlpha.500">News & Blog</Text>
        </Box>
        <Box display={"Flex"} flexDirection={"column"} gap={"20px"}>
          <Heading as="h2" size="md">
            Movement
          </Heading>
          <Text color="blackAlpha.500" mt={"0.5rem"}>
            Why Masking?
          </Text>
          <Text color="blackAlpha.500">Security</Text>
        </Box>
        <Box display={"Flex"} flexDirection={"column"} gap={"20px"}>
          <Heading as="h2" size="md">
            Support
          </Heading>
          <Text color="blackAlpha.500" mt={"0.5rem"}>
            FAQs
          </Text>
          <Text color="blackAlpha.500">Support Center</Text>
          <Text color="blackAlpha.500">Contact Us</Text>
        </Box>
        <Box display={"Flex"} flexDirection={"column"} gap={"20px"}>
          <Heading as="h2" size="md">
            Partner
          </Heading>
          <Text color="blackAlpha.500" mt={"0.5rem"}>
            Our Partner
          </Text>
          <Text color="blackAlpha.500">Become a Partner</Text>
        </Box>
      </Box>
    </Container>
    <Container maxW={"80%"}
      display={"Flex"}
      justifyContent={"space-between"} 
      mt={"2rem"}
      p={"1rem"}>
        <Box width={"30%"}>
        <Text color="blackAlpha.500">@2023 Masking. All rights reserved</Text>
        </Box>
        <Box width={"30%"} display={"flex"} justifyContent={"space-around"}>
        <Text color="blackAlpha.500">Terms & Agreements</Text>
        <Text color="blackAlpha.500">Privacy Policy</Text>
        </Box>
    </Container>
    </>
  );
}

export default Footer;
