import {
  Box,
  Button,
  Heading,
  Img,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import NextLink from "next/link";
import React from "react";

interface TTextBoxSectionProps {
  testID: string;
  title: string;
  description: string;
  right?: boolean;
}

export const TextBoxSection = (props: TTextBoxSectionProps) => {
  return (
    <Box
      data-testid={props.testID}
      flex={1}
      style={
        props.right
          ? {
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
              width: "100%",
            }
          : {}
      }
    >
      <Heading
        as="h1"
        size="xl"
        color={mode("blue.600", "blue.300")}
        mt="8"
        fontWeight="extrabold"
        letterSpacing="tight"
      >
        {props.title}
      </Heading>
      <Text
        w={{ lg: "50%" }}
        color={mode("gray.600", "gray.400")}
        mt="4"
        fontSize="lg"
        fontWeight="medium"
        textAlign={props.right ? "end" : "start"}
      >
        {props.description}
      </Text>
    </Box>
  );
};
export const ButtonSection = () => {
  return (
    <Box
      data-testid="buttonSection"
      mt={20}
      style={{ display: "flex", justifyContent: "center", width: "100%" }}
    >
      <NextLink href="/profile" passHref>
        <Button
          data-testid="button"
          variant="ghost"
          as="a"
          rightIcon={<BsArrowRightCircleFill fontWeight={"bold"} />}
          size="lg"
          minW="210px"
          colorScheme="blue"
          height="14"
          px="8"
          fontSize={32}
        >
          Try it!
        </Button>
      </NextLink>
    </Box>
  );
};

const PresentationBox = () => {
  const sections = {
    1: {
      title: "Get proud!",
      description:
        "Now you can share your achievements with others via Instagram stories, Whatsapp status or Twitter. Don't do it manualy.",
    },
    2: {
      title: "Why should you use it?",
      description:
        "You can easily share your PR's and show them to the world just in few steps.",
    },
    3: {
      title: "How it works?",
      description:
        "So EASY! Sign in via your GitHub and see overview or share your PR's.",
    },
  };

  return (
    <Box>
      {/* IMG section */}
      <Box
        data-testid="imgBox1"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Img
          textAlign={"center"}
          w={{ lg: "30%", md: "60%", sm: "50%" }}
          pos="relative"
          zIndex="1"
          h={{ lg: "100%" }}
          objectFit="cover"
          src="hcktbrd.png"
          alt="Hacktobered hero image"
        />
      </Box>
      <TextBoxSection
        description={sections[1].description}
        title={sections[1].title}
        testID="textBox1"
        right
      />
      <TextBoxSection
        description={sections[2].description}
        title={sections[2].title}
        testID="textBox2"
      />
      <TextBoxSection
        description={sections[3].description}
        title={sections[3].title}
        testID="textBox3"
        right
      />
      <ButtonSection />
    </Box>
  );
};

export default PresentationBox;
