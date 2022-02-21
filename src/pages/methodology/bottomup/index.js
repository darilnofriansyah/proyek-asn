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
    <Flex
      pt={{ base: "2rem", lg: "4rem" }}
      px={{ base: "2rem", lg: "4rem" }}
      mb="2rem"
    >
      {/* Metodologi Top Down */}
      <Stack spacing="2rem">
        <Heading
          textColor="red.600"
          fontSize={{ base: "xl", xl: "4xl", "2xl": "6xl" }}
        >
          {t("title_bottomup")}
        </Heading>
        <Text fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>
          {t("description1_bottomup")}
        </Text>
        <List pl={{ base: "1rem", "2xl": "2rem" }} spacing={3}>
          {t("diagram_bottomup", { returnObjects: true }).map((list) => (
            <ListItem fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>
              <ListIcon
                mr={{ base: "1rem", "2xl": "2rem" }}
                as={ArrowRightIcon}
              />
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
                direction={{base:"column", lg:"row"}}
              >
                <Stack
                  borderRadius={{base:"20px 20px 0px 0px", lg: "20px 0px 0px 20px"}}
                  p={{base:"2rem",lg:"4rem"}}
                  bgColor="red.700"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    src="https://cdn.kibrispdr.org/data/gambar-gear-png-0.png"
                    width={{base:"5rem", lg:"7rem"}}
                  />
                  <Heading fontSize={{ base: "2xl", xl: "4xl", "2xl": "6xl" }}>
                    {title}
                  </Heading>
                </Stack>
                <Stack py="3rem" px={{base:"2rem", lg:"5rem"}} spacing="3rem">
                  <List spacing={3}>
                    {content.map((list) => (
                      <ListItem
                        fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}
                      >
                        <ListIcon as={ChevronRightIcon} />
                        {list}
                      </ListItem>
                    ))}
                  </List>
                  <Text fontSize={{ base: "sm", xl: "md", "2xl": "lg" }}>
                    {note}
                  </Text>
                </Stack>
              </Flex>
            )
          )}
        </Flex>
        <List spacing={3}>
          {t("description2_bottomup", { returnObjects: true }).map((list) => (
            <ListItem fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>
              <ListIcon mr={{ base: "1rem", "2xl": "2rem" }} as={ArrowRightIcon} />
              {list}
            </ListItem>
          ))}
        </List>
      </Stack>
    </Flex>
  );
}
