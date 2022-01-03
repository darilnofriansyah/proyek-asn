import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Bottomup() {
  return (
    <Flex pt="4rem" px="2rem">
      {/* Metodologi Top Down */}
      <Stack spacing="2rem">
        <Heading textColor="red.600" fontSize="6xl">
          Pendekatan <Text as="i">Bottom Up</Text>
        </Heading>
        <List spacing={3}>
          <ListItem fontSize="2xl">
            <ListIcon mr="4rem" as={ArrowRightIcon} />
            Bottom Up melengkapi pendekatan top-down untuk menghasilkan bukti
            tambahan.
          </ListItem>
          <ListItem fontSize="2xl">
            <ListIcon mr="4rem" as={ArrowRightIcon} />
            Bottom Up memberikan informasi tekstual untuk hasil analisis yang
            lebih detail.
          </ListItem>
        </List>
        <Flex direction="column">
          <Flex mb="1rem" color="white" bgColor="red.600">
            <Heading bgColor="red.700" p="4rem">
              Tujuan
            </Heading>
            <List p="3rem" spacing={3}>
              <ListItem fontSize="2xl">
                <ListIcon as={ArrowRightIcon} />
                Membangun basis bukti langsung dari pemangku kepentingan
              </ListItem>
              <ListItem fontSize="2xl">
                <ListIcon as={ArrowRightIcon} />
                Membangun pengetahuan kontekstual agar penyusun dapat
                menafsirkan indikator, mengkomunikasikan keputusan dan
                pemantauan Daftar Jabatan Kritikal
              </ListItem>
            </List>
          </Flex>
          <Flex mb="1rem" color="white" bgColor="red.600">
            <Heading bgColor="red.700" p="4rem">
              Proses
            </Heading>
            <List p="3rem" spacing={3}>
              <ListItem fontSize="2xl">
                <ListIcon as={ArrowRightIcon} />
                Bottom Up melengkapi pendekatan top-down untuk menghasilkan
                bukti tambahan.
              </ListItem>
              <ListItem fontSize="2xl">
                <ListIcon as={ArrowRightIcon} />
                Bottom Up memberikan informasi tekstual untuk hasil analisis
                yang lebih detail.
              </ListItem>
            </List>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
}
