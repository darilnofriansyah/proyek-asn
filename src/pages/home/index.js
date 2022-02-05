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
import employee from "../../assets/images/home/employee.jpg";
import worker from "../../assets/images/home/hero.jpg";
import methodology from "../../assets/images/home/methodology.jpg";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Flex bgColor="gray.100" direction="column" spacing={5}>
      {/* Hero Section */}
      <SimpleGrid
        py="15rem"
        px={{ base: "4rem", lg: "8rem", xl: "10rem" }}
        bgSize="cover"
        bgImage={worker}
        columns={2}
      >
        <Flex
          py={10}
          direction="column"
          px={10}
          bgColor="rgba(255, 255, 255, 0.6)"
        >
          <Heading fontSize={{ base: "3xl", lg: "5xl", xl: "7xl" }}>
            {t("title")}
          </Heading>
        </Flex>
      </SimpleGrid>
      {/* Definisi Section */}
      <SimpleGrid
        py="10rem"
        px={{ base: "4rem", lg: "8rem", xl: "10rem" }}
        columns={2}
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
            <Heading fontSize={{ base: "3xl", xl: "5xl" }}>
              {t("title_definition")}
            </Heading>
            <Text lineHeight="2" fontSize={{ base: "lg", xl: "2xl" }}>
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
        py="10rem"
        px={{ base: "4rem", lg: "8rem", xl: "10rem" }}
        bgSize="cover"
        bgImage={methodology}
        bgPos="left"
        templateColumns="repeat(2, 1fr)"
      >
        <GridItem colSpan={1}></GridItem>
        <GridItem colSpan={1}>
          <Flex p={{ base: 3, md: 10 }} direction="column">
            <Stack>
              <Heading fontSize={{ base: "3xl", xl: "5xl" }}>
                {t("title_methodology")}
              </Heading>
              <Text lineHeight="2" fontSize={{ base: "lg", xl: "2xl" }}>
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
    </Flex>
  );
}
