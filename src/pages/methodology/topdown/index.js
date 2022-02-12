import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import chart_down from "../../../assets/images/icon/chart_down.png";

export default function Topdown() {
  const { t } = useTranslation();

  return (
    <Flex pt="4rem" px="4rem">
      {/* Metodologi Top Down */}
      <Stack spacing="2rem" mb="2rem">
        <Heading
          textColor="red.600"
          fontSize={{ base: "xl", xl: "4xl", "2xl": "6xl" }}
        >
          {t("title_topdown")}
        </Heading>
        <Text fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>
          {t("description_topdown")}
        </Text>
        <Text
          fontWeight="400"
          fontSize={{ base: "lg", xl: "2xl", "2xl": "4xl" }}
        >
          {t("diagram_topdown")}
        </Text>
        <SimpleGrid
          px={{ base: "2rem", "2xl": "5rem" }}
          spacing={{ base: "2rem", "2xl": "5rem" }}
          columns={{ base: 1, lg: 3 }}
        >
          {t("indikator_topdown", { returnObjects: true }).map(
            ({ title, content }) => (
              <Stack
                bgColor="yellowPrimary"
                borderRadius={{
                  base: "10px 10px 10px 10px",
                  xl: "10px 10px 10px 10px",
                }}
                pb="2rem"
              >
                <Flex
                  borderRadius="10px 10px 0px 0px"
                  pt="2rem"
                  px="4rem"
                  bgColor="yellowSecondary"
                >
                  <Stack mb="2rem" direction="row">
                    {/* <Image src={chart_down} width="3rem" height="auto"/> */}
                    <Heading fontSize={{ base: "lg", xl: "2xl", "2xl": "4xl" }}>
                      {title}
                    </Heading>
                  </Stack>
                </Flex>
                <Flex direction="column" px="4rem">
                  {content.map((list) => (
                    <>
                      <Text fontSize="lg" py="1rem">
                        {list}
                      </Text>
                      <Divider />
                    </>
                  ))}
                </Flex>
              </Stack>
            )
          )}
        </SimpleGrid>
      </Stack>
    </Flex>
  );
}
