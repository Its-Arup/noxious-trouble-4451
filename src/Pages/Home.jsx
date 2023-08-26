import { Center, Container, Flex, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <div
      style={{ border: "1px solid red", margin: "50px auto 0", width: "80%" }}
    >
      <Center flexDirection={"column"}>
        <Heading
          fontSize={"8xl"}
          fontFamily="Noto Sans, sans-serif"
          fontWeight="800"
        >
          Use your maks,
          <br />
          save the world
        </Heading>
        <Text
          color="blackAlpha.500"
          fontFamily={"Poppins, sans-serif"}
          fontSize={"2xl"}
          mt={"20px"}
          textAlign={"center"}
          fontWeight={"500"}
        >
          join us against the virus with the movement of <br />
          using making in all your social activities on earth
        </Text>
      </Center>
    </div>
  );
};

export default Home;
