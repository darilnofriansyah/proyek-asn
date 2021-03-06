import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import dovetailing from "../../../assets/images/chart/dovetailing.png";

export default function Dovetailing() {
  const { t } = useTranslation();
  return (
    <Flex
      pt={{ base: "2rem", lg: "4rem" }}
      px={{ base: "2rem", lg: "4rem" }}
      direction="column"
    >
      <Heading
        mb="2rem"
        textColor="red.600"
        fontSize={{ base: "xl", xl: "4xl", "2xl": "6xl" }}
      >
        {t("title_dovetailing")}
      </Heading>
      <Text fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>
        {t("description_dovetailing")}
      </Text>
      <Flex
        alignItems="center"
        justifyContent="center"
        pt={{base:"2rem", lg:"4rem"}}
        px={{base:"0rem", lg:"4rem"}}
        direction="column"
        textAlign="center"
      >
        <Heading mb={{base:"2rem", lg:"4rem"}} fontSize={{ base: "lg", xl: "2xl", "2xl": "4xl" }}>
          {t("diagram_dovetailing")}
        </Heading>
        <Image mb="1rem" src={dovetailing} />
        <Text mb={{base:"2rem", lg:"4rem"}} fontSize={{ base: "md", xl: "lg", "2xl": "xl" }}>
          {t("diagram_notes_dovetailing")}
        </Text>
      </Flex>
      <Text mb={{base:"2rem", lg:"4rem"}} fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>
        {t("notes1_dovetailing")}
      </Text>
    </Flex>
  );
}
