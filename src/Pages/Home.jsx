import {
  Center,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Box,
  Button,
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  ButtonGroup,
  transform,
} from "@chakra-ui/react";
import star from "../assets/star_image.png";
import profile1 from "../assets/profile_pic_1.png";
import profile2 from "../assets/profile_pic_2.png";
import profile3 from "../assets/profile_pic_3.png";
import profile4 from "../assets/profile_pic_4.png";
import profile5 from "../assets/profile_pic_5.png";
import profile6 from "../assets/profile_pic_6.png";
import profile7 from "../assets/profile_pic_7.png";
import profile8 from "../assets/profile_pic_8.png";
import profile9 from "../assets/profile_pic_9.png";
import profile10 from "../assets/profile_pic_10.png";
import card1 from "../assets/card_1.png";
import card2 from "../assets/card_2.png";
import card3 from "../assets/card_3.png";

const Home = () => {
  return (
    <div
    // border: "1px solid red",
      style={{  margin: "50px auto 0", width: "80%" }}
    >
      <Center
        flexDirection={"column"}
        position={"relative"}
        p={"15px"}
        m={"30px"}
      >
        <Box display={"flex"} width={"25%"} justifyContent={"space-evenly"}>
          <Image src={star} width={"55px"} />
          <Image src={star} width={"55px"} />
          <Image src={star} width={"55px"} />
          <Image src={star} width={"55px"} />
          <Image src={star} width={"55px"} />
        </Box>
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
          m={"20px"}
          textAlign={"center"}
          fontWeight={"500"}
        >
          join us against the virus with the movement of <br />
          using making in all your social activities on earth
        </Text>
        <Button
          colorScheme="pink"
          w={"200px"}
          h={"80px"}
          borderRadius={"25px"}
          fontSize={"2xl"}
          mt={"2rem"}
        >
          Join Now
        </Button>
        <Image
          src={profile1}
          width={"100px"}
          position={"absolute"}
          top={"5%"}
          left={"5%"}
        />
        <Image
          src={profile2}
          width={"70px"}
          position={"absolute"}
          top={"70%"}
          left={"15%"}
        />
        <Image
          src={profile3}
          width={"60px"}
          position={"absolute"}
          top={"23%"}
          right={"12%"}
        />
        <Image
          src={profile4}
          width={"80px"}
          position={"absolute"}
          top={"70%"}
          right={"15%"}
        />
      </Center>
      <Center justifyContent={"space-between"} position={"relative"}>
        <Box>
          <Image src={profile5} />
        </Box>
        <Box position={"absolute"} top={"30%"} left={"43.8%"}>
          <Text
            color="blackAlpha.300"
            fontSize={"3xl"}
            fontFamily={"Poppins, sans-serif"}
            fontWeight={"600"}
          >
            Scroll Down
          </Text>
        </Box>
        <Image src={profile7} position={"absolute"} top={"40%"} left={"48%"} />
        <Image src={profile9} position={"absolute"} top={"61%"} left={"37%"} />
        <Image src={profile8} position={"absolute"} top={"18%"} right={"35%"} />
        <Box>
          <Image src={profile6} />
        </Box>
      </Center>
      <Center mt={"50px"} flexDirection={"column"}>
        <Image src={profile10} />
        <Heading
          fontSize={"5xl"}
          fontFamily="Noto Sans, sans-serif"
          fontWeight="700"
          textAlign={"center"}
          p={"10px"}
        >
          Why does the world need <br />
          you to were a mask?
        </Heading>
        <Box display={"flex"} justifyContent={"space-around"} w={"100%"} m={"50px"}>
        <Card h={"400px"}>
            <CardBody>
              <Image
                src={card1}
              />
              <Stack mt="6" spacing="3">
                <Heading size="lg">Reduce viral <br/>transmission</Heading>
                <Text color="blackAlpha.600" lineHeight={"30px"}>
                Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit.<br/> 
                cdolor adipisicing elit
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card  h={"400px"}>
            <CardBody>
              <Image
                src={card2}
              />
              <Stack mt="6" spacing="3">
                <Heading size="lg">Protecting others<br/> from illness</Heading>
                <Text color="blackAlpha.600" lineHeight={"30px"}>
                Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit.<br/> 
                cdolor adipisicing elit
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card h={"400px"}>
            <CardBody>
              <Image
                src={card3}
              />
              <Stack mt="6" spacing="3">
                <Heading size="lg">Mandated by law<br/> in some states</Heading>
                <Text color="blackAlpha.600" lineHeight={"30px"}>
                Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit.<br/> 
                cdolor adipisicing elit
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card  h={"400px"}>
            <CardBody>
              <Image
                src={card1}
              />
              <Stack mt="6" spacing="3">
                <Heading size="lg">Good hygiene in<br/> general</Heading>
                <Text color="blackAlpha.600" lineHeight={"30px"}>
                Lorem ipsum dolor sit amet <br/>consectetur adipisicing elit.<br/> 
                cdolor adipisicing elit
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </Center>
    </div>
  );
};

export default Home;
