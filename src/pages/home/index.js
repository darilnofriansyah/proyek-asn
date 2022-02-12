import {
  Text,
  Stack,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Heading,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import notebook from "../../assets/images/home/notebook.jpg";
import hero from "../../assets/images/home/hero.jpg";
import workplace from "../../assets/images/home/workplace.jpg";
import employee from "../../assets/images/home/employee.jpg";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Flex bgColor="gray.100" direction="column" spacing={5}>
      {/* Hero Section */}
      <SimpleGrid
        py={{base:"5rem", lg:"8rem", xl:"10rem", '2xl':"15rem"}}
        px={{ base: "2rem", lg: "8rem", xl: "10rem" }}
        bgSize="cover"
        bgImage={hero}
        columns={{base:1, md:2}}
      >
        <Flex
          py={10}
          direction="column"
          px={10}
          bgColor="rgba(255, 255, 255, 0.6)"
        >
          <Heading fontSize={{ base: "xl", lg: "3xl", xl: "5xl", "2xl":"7xl" }}>
            {t("title")}
          </Heading>
        </Flex>
      </SimpleGrid>
      {/* Definisi Section */}
      <SimpleGrid
        py={{base:"4rem", lg:"6rem", xl:"8rem", '2xl':"10rem"}}
        px={{ base: "2rem", lg: "8rem", xl: "10rem" }}
        columns={{base:1, md:2}}
        bgSize="cover"
        bgImage={notebook}
        bgPos="right"
      >
        <Flex
          py={10}
          direction="column"
          px={10}
          bgColor={{ base: "rgba(255, 255, 255, 0.6)", xl: "none" }}
        >
          <Stack>
            <Heading fontSize={{ base: "xl", xl: "3xl", "2xl": "5xl" }}>
              {t("title_definition")}
            </Heading>
            <Text lineHeight="2" fontSize={{ base: "md", xl: "lg", "2xl":"2xl" }}>
              {t("description_definition")}
            </Text>
            <Link to="/about">
              <Text
                as="u"
                fontWeight="500"
                fontSize={{ base: "lg", xl: "2xl" }}
              >
                {t("more")}
              </Text>
            </Link>
          </Stack>
        </Flex>
      </SimpleGrid>
      {/* Grey Section */}
      <Grid
        py={{base:"4rem", lg:"6rem", xl:"8rem", '2xl':"10rem"}}
        px={{ base: "2rem", lg: "8rem", xl: "10rem" }}
        bgSize="cover"
        bgImage={workplace}
        bgPos="left"
        templateColumns="repeat(2, 1fr)"
      >
        <GridItem colSpan={{base: "none", md:1}}></GridItem>
        <GridItem colSpan={{base: 2, md:1}}>
          <Flex bgColor={{ base: "rgba(255, 255, 255, 0.6)", xl: "none" }} p={{ base: 3, md: 10 }} direction="column">
            <Stack>
              <Heading fontSize={{ base: "xl", xl: "3xl", "2xl": "5xl" }}>
                {t("title_methodology")}
              </Heading>
              <Text lineHeight="2" fontSize={{ base: "md", xl: "lg", "2xl":"2xl" }}>
                {t("description_methodology")}
              </Text>
              <Link to="/about">
                <Text
                  as="u"
                  fontWeight="500"
                  fontSize={{ base: "lg", xl: "2xl" }}
                >
                  {t("more")}
                </Text>
              </Link>
            </Stack>
          </Flex>
        </GridItem>
      </Grid>
      <SimpleGrid
        py={{base:"4rem", lg:"6rem", xl:"8rem", '2xl':"10rem"}}
        px={{ base: "2rem", lg: "8rem", xl: "10rem" }}
        columns={{base:1, md:2}}
        bgSize="cover"
        bgImage={employee}
        bgPos="right"
      >
        <Flex
          py={10}
          direction="column"
          px={10}
          bgColor={{ base: "rgba(255, 255, 255, 0.6)", xl: "none" }}
        >
          <Stack>
            <Heading fontSize={{ base: "xl", xl: "3xl", "2xl": "5xl" }}>
              {t("title_benefit")}
            </Heading>
            <Text lineHeight="2" fontSize={{ base: "md", xl: "lg", "2xl":"2xl" }}>
              {t("description_benefit")}
            </Text>
          </Stack>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
