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
import gear from "../../../assets/images/icon/gear.png";
import target from "../../../assets/images/icon/target.png";

export default function Bottomup() {
  return (
    <Flex pt="4rem" px="4rem">
      {/* Metodologi Top Down */}
      <Stack spacing="2rem">
        <Heading textColor="red.600" fontSize="6xl">
          Pendekatan <Text as="i">Bottom Up</Text>
        </Heading>
        <List pl="4rem" spacing={3}>
          <ListItem fontSize="2xl">
            <ListIcon mr="2rem" as={ArrowRightIcon} />
            Melengkapi pendekatan <Text as="i">top-down</Text> untuk menghasilkan bukti
            tambahan.
          </ListItem>
          <ListItem fontSize="2xl">
            <ListIcon mr="2rem" as={ArrowRightIcon} />
            Memberikan informasi tekstual untuk hasil analisis yang
            lebih detail.
          </ListItem>
        </List>
        <Flex direction="column">
          <Flex borderRadius="20px" mb="1rem" color="white" bgColor="red.600">
            <Stack
              borderRadius="20px 0px 0px 20px"
              p="4rem"
              alignItems="center"
              bgColor="red.700"
            >
              <Image src={target} width="7rem" />
              <Heading>Target</Heading>
            </Stack>
            <Stack py="3rem" px="5rem" spacing="3rem">
              <List spacing={3}>
                <ListItem fontSize="2xl">
                  <ListIcon as={ChevronRightIcon} />
                  Membangun basis bukti langsung dari pemangku kepentingan
                </ListItem>
                <ListItem fontSize="2xl">
                  <ListIcon as={ChevronRightIcon} />
                  Membangun pengetahuan kontekstual agar penyusun dapat
                  menafsirkan indikator, mengkomunikasikan keputusan dan
                  pemantauan Daftar Jabatan Kritikal
                </ListItem>
              </List>
              <Text>
                Sumber: Kementerian Sumber Manusia Malaysia. (2020). Critical
                Occupations List 2019/2020 Occupation Report Malaysia
              </Text>
            </Stack>
          </Flex>
          <Flex borderRadius="20px" mb="1rem" color="white" bgColor="red.600">
            <Stack
              borderRadius="20px 0px 0px 20px"
              p="4rem"
              alignItems="center"
              bgColor="red.700"
            >
              <Image src={gear} width="7rem" />
              <Heading>Proses</Heading>
            </Stack>
            <Stack py="3rem" px="5rem" spacing="2rem">
              <Flex>
                <Text fontSize="3xl">Call for Evidence (CFE)</Text>
                <Divider mx="4rem" orientation="vertical" />
                <Text fontSize="3xl">
                  Survey kepada employer (pemberi kerja) dan stakeholder
                  terkait.
                </Text>
              </Flex>
              <Flex>
                <Text fontSize="3xl">Stakeholder Consultations</Text>
                <Divider mx="4rem" orientation="vertical" />
                <Text fontSize="3xl">
                  Konsultasi secara mendalam (focus group discussion)
                </Text>
              </Flex>
              <Text>SAMPEL CFE =  Pusat : 20 Kementerian dan 7 LPNK (91 Responden) |  Daerah : 7 Daerah (200 Responden OPD)</Text>
            </Stack>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
}
