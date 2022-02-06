import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import overview from "../../../assets/images/chart/overview.png";

export default function Overview() {
  const {t} = useTranslation();
  return (
    <Flex direction="column" pt="4rem" px="4rem">
      <Stack spacing="2rem">
        <Heading>{t('title_overview')}</Heading>
        <Text fontSize="2xl">
          {t('description_overview')}
        </Text>
        <Heading>{t('diagram_overview')}</Heading>
      </Stack>
      <Flex justifyContent="center">
        <Image src={overview} />
      </Flex>
    </Flex>
  );
}
