import {
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function FAQ() {
  const { t } = useTranslation();

  return (
    <Flex direction="column" py="4rem" px="8rem">
      <Heading mb="2rem">FAQ</Heading>
      <Accordion>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Heading fontSize="2xl">{t("pertanyaan1_faq")}</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} fontSize="xl">
            {t("jawaban1_faq")}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize="2xl">{t("pertanyaan2_faq")}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontSize="xl">
            {t("jawaban2_faq")}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize="2xl">{t("pertanyaan3_faq")}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontSize="xl">
            <List spacing={3}>
              {t("jawaban3_faq", { returnObjects: true }).map((list) => (
                <ListItem fontSize="xl">
                  <ListIcon as={ChevronRightIcon} />
                  {list}
                </ListItem>
              ))}
            </List>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize="2xl">{t("pertanyaan4_faq")}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontSize="xl">
            <Text mb="2rem">
              {t("jawaban4_faq", { returnObjects: true }).title}
            </Text>
            <List spacing={3}>
              {t("jawaban4_faq", { returnObjects: true }).content.map(
                (list) => (
                  <ListItem fontSize="xl">
                    <ListIcon as={ChevronRightIcon} />
                    {list}
                  </ListItem>
                )
              )}
            </List>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize="2xl">{t("pertanyaan5_faq")}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontSize="xl">
            {t("jawaban5_faq")}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize="2xl">{t("pertanyaan6_faq")}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontSize="xl">
            {t("jawaban6_faq")}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading fontSize="2xl">{t("pertanyaan7_faq")}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontSize="xl">
            <Text mb="2rem">
              {t("jawaban7_faq", { returnObjects: true }).title}
            </Text>
            <List spacing={3}>
              {t("jawaban7_faq", { returnObjects: true }).content.map(
                (list) => (
                  <ListItem fontSize="xl">
                    {list}
                  </ListItem>
                )
              )}
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}
