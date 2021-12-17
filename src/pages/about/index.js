import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

export default function About() {
  return (
    <Flex
      p="8rem"
      bgColor="gray.100"
      width="auto"
      direction="column"
    >
      <SimpleGrid columns={{base:1, md:2}}>
        <Flex direction="column">
          <Heading mb="3rem">About COL ASN</Heading>
          <Text lineHeight="2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus
            odio nibh. Morbi diam orci, facilisis sit amet fringilla id,
            dignissim non nunc. Etiam vel orci eu quam bibendum pulvinar. Nulla
            facilisi. Maecenas ultricies urna non lorem cursus interdum. Nunc
            eget purus auctor, sollicitudin urna quis, dapibus elit. Aliquam
            viverra gravida odio non molestie. Aenean condimentum tempus lacus,
            quis molestie leo pellentesque vel. Donec tellus enim, efficitur
            lobortis mollis ut, tempus vitae arcu. Donec suscipit odio non mi
            hendrerit, et vehicula nisi ultrices. Vestibulum ut sapien maximus,
            consequat orci quis, fringilla tortor. Cras et mollis odio, sit amet
            semper massa. Donec ac nisi non tortor accumsan venenatis. Maecenas
            faucibus tortor sed velit ornare, vel mollis felis elementum. Donec
            rhoncus, orci vitae consequat finibus, erat purus volutpat purus,
            vel aliquam neque massa porttitor felis.
          </Text>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
