import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import dovetailing from "../../../assets/images/chart/dovetailing.png";

export default function Dovetailing() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      pt="4rem"
      px="4rem"
      direction="column"
      textAlign="center"
    >
      <Heading mb="4rem">
        Kerangka Klasifikasi Jabatan dalam Proses Dovetailing
      </Heading>
      <Image mb="4rem" src={dovetailing} />
      <Text mb="4rem" fontSize="2xl">
        Kerangka dalam melakukan proses dovetailing mengacu pada beberapa sumber
        kajian Critical Occupation List di berbagai negara, salah satunya
        Malaysia.
      </Text>
      <Text mb="4rem" fontSize="xl">
        *Untuk JPT dianalisis dengan tahapan khusus mengingat karakteristik JPT
        yang berbeda yaitu, meskipun tidak memenuhi kriteria shortage, tetapi
        level jabatannya memenuhi kriteria strategis
      </Text>
    </Flex>
  );
}
