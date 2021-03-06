import {
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import facebook from "../../assets/images/logo/facebook.svg";
import twitter from "../../assets/images/logo/twitter.png";
import instagram from "../../assets/images/logo/instagram.png";
import youtube from "../../assets/images/logo/YouTube.png";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Flex
      alignItem="center"
      justifyContent="center"
      py={{ base: "2rem", lg: "4rem" }}
      px={{ base: "2rem", lg: "4rem" }}
      direction="column"
    >
      <Heading mb="2rem" fontSize={{ base: "xl", xl: "4xl", "2xl": "6xl" }}>
        {t("title_contactus")}
      </Heading>
      <SimpleGrid spacing={{base:"2rem", lg:"5rem"}} columns={{ base: 1, md: 2 }}>
        <Flex direction="column">
          <Text fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }} as="b">
            Deputi SDM Aparatur
          </Text>
          <Text fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>
            Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi
          </Text>
          <Text fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>
            Jl. Jend. Sudirman Kav. 69 Jakarta Selatan - 12190 Indonesia
          </Text>
          <Text fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>
            Telp. (+6221) 7398381 - 89
          </Text>
          <Text fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>
            Email Persuratan Kementerian PANRB : persuratan@menpan.go.id
          </Text>
          <Stack
            justifyContent="center"
            mt={{base:"2rem", lg:"4rem"}}
            direction="row"
            spacing="4rem"
          >
            <a href="https://www.facebook.com/kempanrb">
              <Image w={{base:"2rem", lg:"4rem"}} src={facebook} />
            </a>
            <a href="https://twitter.com/kempanrb?lang=id">
              <Image w={{base:"2rem", lg:"4rem"}} src={twitter} />
            </a>
            <a href="https://www.instagram.com/kemenpanrb/">
              <Image w={{base:"2rem", lg:"4rem"}} src={instagram} />
            </a>
            <a href="https://www.youtube.com/channel/UC4Tl2xUO_sjUNs-SfedTmEg">
              <Image w={{base:"2rem", lg:"4rem"}} src={youtube} />
            </a>
          </Stack>
        </Flex>
        <Flex>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2666256285975!2d106.7984574153834!3d-6.228536562734135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d0c325f3a3%3A0x426a2dc97d436ff0!2sKementerian%20Pendayagunaan%20Aparatur%20Negara%20dan%20Reformasi%20Birokrasi%20Republik%20Indonesia!5e0!3m2!1sid!2sid!4v1641405658566!5m2!1sid!2sid"
            width="600"
            height="450"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
