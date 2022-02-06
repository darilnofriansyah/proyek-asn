import { ArrowRightIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import gear from "../../../assets/images/icon/gear.png";
import target from "../../../assets/images/icon/target.png";

export default function Bottomup() {
  const { t } = useTranslation();
  return (
    <Flex pt="4rem" px="4rem" mb="2rem">
      {/* Metodologi Top Down */}
      <Stack spacing="2rem">
        <Heading textColor="red.600" fontSize="6xl">
          {t("title_bottomup")}
        </Heading>
        <Text fontSize="2xl">{t("description1_bottomup")}</Text>
        <List pl="4rem" spacing={3}>
          {t("diagram_bottomup", { returnObjects: true }).map((list) => (
            <ListItem fontSize="2xl">
              <ListIcon mr="2rem" as={ArrowRightIcon} />
              {list}
            </ListItem>
          ))}
        </List>
        <Flex direction="column">
          {t("indikator_bottomup", { returnObjects: true }).map(
            ({ title, content, note, gambar }) => (
              <Flex
                borderRadius="20px"
                mb="1rem"
                color="white"
                bgColor="red.600"
              >
                <Stack
                  borderRadius="20px 0px 0px 20px"
                  p="4rem"
                  alignItems="center"
                  bgColor="red.700"
                >
                  <Image src="https://cdn.kibrispdr.org/data/gambar-gear-png-0.png" width="7rem" />
                  <Heading>{title}</Heading>
                </Stack>
                <Stack py="3rem" px="5rem" spacing="3rem">
                  <List spacing={3}>
                    {content.map((list) => (
                      <ListItem fontSize="2xl">
                        <ListIcon as={ChevronRightIcon} />
                        {list}
                      </ListItem>
                    ))}
                  </List>
                  <Text>
                    {note}
                  </Text>
                </Stack>
              </Flex>
            )
          )}
        </Flex>
        <List spacing={3}>
          {t("description2_bottomup", { returnObjects: true }).map((list) => (
            <ListItem fontSize="2xl">
              <ListIcon mr="2rem" as={ArrowRightIcon} />
              {list}
            </ListItem>
          ))}
        </List>
      </Stack>
    </Flex>
  );
}
