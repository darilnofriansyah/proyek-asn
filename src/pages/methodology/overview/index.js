import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import overview from "../../../assets/images/chart/overview.png";

export default function Overview() {
  const {t} = useTranslation();
  return (
    <Flex direction="column" py="2rem" pt="4rem" px="4rem">
      <Stack mb="2rem" spacing="2rem">
        <Heading textColor="red.600" fontSize={{ base: "xl", xl: "4xl", "2xl": "6xl" }}>{t('title_overview')}</Heading>
        <Text fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>
          {t('description_overview')}
        </Text>
        <Heading fontSize={{ base: "lg", xl: "2xl", "2xl": "4xl" }}>{t('diagram_overview')}</Heading>
      </Stack>
      <Flex justifyContent="center">
        <Image src={overview} />
      </Flex>
    </Flex>
  );
}
