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
    <Flex pt="4rem" px="4rem" mb="3rem">
      <SimpleGrid spacing="5rem" columns={{ base: 1, md: 2 }}>
        <Flex direction="column">
          <Heading
            padding="1rem"
            px="4rem"
            borderRadius="50px"
            bgColor="yellowPrimary"
            fontSize="6xl"
            mb="2rem"
          >
            {t("title_about")}
          </Heading>
          <Text
            mb="3rem"
            mx="4rem"
            fontSize="3xl"
            color="red.600"
            fontWeight="500"
          >
            <a href="https://www.sdm.kemenkeu.go.id/peraturan/doc/PERMENPAN%20NO%203%20TAHUN%202020.pdf">
              {t("peraturan_about")}
            </a>
          </Text>
          <Stack mb="3rem" px="4rem" spacing="2rem">
            <Text fontSize="2xl">{t("description_about")}</Text>
            <Divider />
            <Text fontSize="2xl">{t("poin1_about")}</Text>
            <Divider />
            <Text fontSize="2xl">{t("poin2_about")}</Text>
          </Stack>
        </Flex>
        <Flex bgColor="red.600" p="3rem" direction="column">
          <Stack bgColor="red.500" spacing="2rem" p="3rem" mb="1rem">
            <Heading color="white">{t('title_about_red')}</Heading>
            {/* Defisit */}
            <Stack>
              <Stack spacing="2rem" direction="column">
                {t('three_point_about', { returnObjects: true }).map(({ title, description }) => (
                  <Stack>
                    <Heading color="yellowPrimary" fontSize="3xl">
                      {title}
                    </Heading>
                    <Text color="white" fontSize="2xl">
                      {description}
                    </Text>
                  </Stack>
                ))}
                {/* <Stack>
                  <Heading color="yellowPrimary" fontSize="3xl">
                    DEFISIT (SHORTAGE)
                  </Heading>
                  <Text color="white" fontSize="2xl">
                    Kesenjangan permintaan dan ketersediaan tenaga kerja dengan
                    keterampilan tertentu
                  </Text>
                </Stack>
                <Stack>
                  <Heading color="yellowPrimary" fontSize="3xl">
                    HIGH-SKILLED
                  </Heading>
                  <Text color="white" fontSize="2xl">
                    Jabatan Kritikal mengidentifikasi pekerjaan dengan
                    keterampilan tertentu
                  </Text>
                </Stack>
                <Stack>
                  <Heading color="yellowPrimary" fontSize="3xl">
                    STRATEGIC
                  </Heading>
                  <Text color="white" fontSize="2xl">
                    Keterampilan tertentu yang sesuai dengan tujuan pembangunan
                    strategis negara
                  </Text>
                </Stack> */}
              </Stack>
            </Stack>
          </Stack>
          <Image src={tiga_jabatan_kritikal} />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
