import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import tiga_jabatan_kritikal from "../../assets/images/chart/tiga-kriteria.png";

export default function About() {
  const { t } = useTranslation();

  return (
    <Flex pt="4rem" px={{base:"2rem", "2xl":"4rem"}} mb="3rem">
      <SimpleGrid spacing={{base: "2rem", "2xl":"5rem"}} columns={{ base: 1, md: 2 }}>
        <Flex direction="column">
          <Heading
            px="4rem"
            fontSize={{ base: "xl", xl: "4xl", "2xl": "6xl" }}
            mb="2rem"
          >
            {t("title_about")}
          </Heading>
          <Heading
            padding="1rem"
            px="4rem"
            borderRadius="50px"
            bgColor="yellowPrimary"
            fontSize={{ base: "lg", xl: "2xl", "2xl": "4xl" }}
            mb="2rem"
          >
            {t("subtitle1_about")}
          </Heading>
          <Text mb="3rem" mx="4rem" fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>
            {t("description1_about")}
          </Text>
          <Heading
            padding="1rem"
            px="4rem"
            borderRadius="50px"
            bgColor="yellowPrimary"
            fontSize={{ base: "lg", xl: "2xl", "2xl": "4xl" }}
            mb="2rem"
          >
            {t("subtitle2_about")}
          </Heading>
          <Text
            mb="3rem"
            mx="4rem"
            fontSize={{ base: "md", xl: "xl", "2xl": "3xl" }}
            color="red.600"
            fontWeight="500"
          >
            <a href="https://www.sdm.kemenkeu.go.id/peraturan/doc/PERMENPAN%20NO%203%20TAHUN%202020.pdf">
              {t("peraturan_about")}
            </a>
          </Text>
          <Stack mb="3rem" px="4rem" spacing={{base:"1rem", "2xl":"2rem"}}>
            <Text fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>{t("description2_about")}</Text>
            <Divider />
            <Text fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>{t("poin1_about")}</Text>
            <Divider />
            <Text fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>{t("poin2_about")}</Text>
          </Stack>
        </Flex>
        <Flex bgColor="red.600" p="3rem" direction="column">
          <Stack bgColor="red.500" spacing="2rem" p="3rem" mb="1rem">
            <Heading color="white">{t("title_about_red")}</Heading>
            {/* Defisit */}
            <Stack>
              <Stack spacing="2rem" direction="column">
                {t("three_point_about", { returnObjects: true }).map(
                  ({ title, description }) => (
                    <Stack>
                      <Heading color="yellowPrimary" fontSize={{ base: "md", xl: "xl", "2xl": "3xl" }}>
                        {title}
                      </Heading>
                      <Text color="white" fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>
                        {description}
                      </Text>
                    </Stack>
                  )
                )}
              </Stack>
            </Stack>
          </Stack>
          <Image src={tiga_jabatan_kritikal} />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
