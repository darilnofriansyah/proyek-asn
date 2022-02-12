import { Image } from "@chakra-ui/image";
import { Flex, Heading, Stack } from "@chakra-ui/layout";
import React from "react";
import logo_panrb from "../../assets/images/logo/logo_panrb.png";
import logo_bkn from "../../assets/images/logo/logo_bkn.png";
import logo_lanri from "../../assets/images/logo/logo_lanri.png";
import logo_kasn from "../../assets/images/logo/logo_kasn.png";
import logo_bappenas from "../../assets/images/logo/logo_bappenas.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Flex bgColor="gray.200" direction="column">
      <Stack m="0">
        <Flex justifyContent="center" p="2rem" bgColor="red.700" color="white">
          <Heading textAlign="center" fontSize={{ base: "md", xl: "lg", "2xl": "xl" }}>
            {t('footer')}
          </Heading>
        </Flex>
        <Flex justifyContent="center" alignItems="center" direction={{ base: "column", md: "row" }}>
          <Stack direction="row" alignItems="center" direction={{ base: "column", md: "row" }}>
            <Image m="4rem" src={logo_panrb} width="16rem" minWidth="5rem" />
            <Image m="4rem" src={logo_kasn} width="7rem" minWidth="3rem" />
          </Stack>
          <Stack direction="row" alignItems="center" direction={{ base: "column", md: "row" }}>
            <Image m="4rem" src={logo_bkn} width="13rem" minWidth="5rem" />
            <Image m="4rem" src={logo_lanri} width="13rem" minWidth="5rem" />
          </Stack>
          <Image m="4rem" src={logo_bappenas} width="16rem" minWidth="5rem" />
        </Flex>
      </Stack>
    </Flex>
  );
}
