import {
  Box,
  Image,
  Text,
  Button,
  Stack,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Flex bgColor="gray.100" direction="column" spacing={5}>
      {/* Hero Section */}
      <Flex py={10} alignItems="center" direction="column">
        <Heading textAlign="center" mb={5}>
          Home
        </Heading>
        <Text
          textStyle="h3"
          maxW={{ base: "40ch", md: "50ch" }}
          textAlign="center"
          mb={5}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus
          odio nibh. Morbi diam orci, facilisis sit amet fringilla id, dignissim
          non nunc.
        </Text>
        <Text
          textStyle="h3"
          maxW={{ base: "40ch", md: "50ch" }}
          textAlign="center"
        >
          Etiam vel orci eu quam bibendum pulvinar. Nulla facilisi. Maecenas
          ultricies urna non lorem cursus interdum. Nunc eget purus auctor,
          sollicitudin urna quis, dapibus elit. Aliquam viverra gravida odio non
          molestie.
        </Text>
      </Flex>
      {/* About Section */}
      <SimpleGrid pt="3rem" px="3rem" columns={{ base: 1, md: 2 }}>
        <Flex py={10} direction="column" px={10}>
          <Stack spacing={5} mb={5}>
            <Heading textStyle="h1">About</Heading>
            <Text lineHeight="2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              cursus odio nibh. Morbi diam orci, facilisis sit amet fringilla
              id, dignissim non nunc.
            </Text>
          </Stack>
          <Stack
            ml={{ base: "none", md: "auto" }}
            textAlign={{ base: "left", md: "right" }}
            spacing={5}
          >
            <Heading textStyle="h1">About</Heading>
            <Text maxW="50ch" lineHeight="2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              cursus odio nibh. Morbi diam orci, facilisis sit amet fringilla
              id, dignissim non nunc.
            </Text>
          </Stack>
        </Flex>
      </SimpleGrid>
      {/* Grey Section */}
      <Grid
        py={10}
        bgSize="cover"
        bgColor="gray.300"
        templateColumns="repeat(2, 1fr)"
      >
        <GridItem colSpan={{ base: 0, lg: 1 }}></GridItem>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <Flex p={{ base: 3, md: 10 }} direction="column">
            <Flex direction="column" m={10}>
              <Heading textStyle="h1">About</Heading>
              <Text maxW="40ch" lineHeight="2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                cursus odio nibh. Morbi diam orci, facilisis sit amet fringilla
                id, dignissim non nunc.
              </Text>
            </Flex>
            <Flex
              textAlign={{ base: "left", md: "right" }}
              direction="column"
              m={10}
            >
              <Heading
                mb={5}
                maxW="20ch"
                textStyle="h1"
                lineHeight="1.5"
                ml={{ base: "none", md: "auto" }}
              >
                About
              </Heading>
              <Text maxW="40ch" lineHeight="2" ml="auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                cursus odio nibh. Morbi diam orci, facilisis sit amet fringilla
                id, dignissim non nunc.
              </Text>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}
