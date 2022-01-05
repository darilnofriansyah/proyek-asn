import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import tiga_jabatan_kritikal from "../../assets/images/chart/tiga-kriteria.png"

export default function About() {
  return (
    <Flex pt="4rem" px="4rem" mb="3rem">
      <SimpleGrid spacing="5rem" columns={{ base: 1, md: 2 }}>
        <Flex direction="column">
          <Heading
            padding="1rem"
            borderRadius="50px"
            bgColor="yellowPrimary"
            fontSize="6xl"
            mb="2rem"
          >
            Konsep Daftar Jabatan Kritikal
          </Heading>
          <Text mb="2rem" px="4rem" fontSize="3xl">
            Daftar Jabatan Kritikal, adalah peta yang menggambarkan ketersediaan
            tenaga kerja yang terampil dan ketidakseimbangan antara kebutuhan
            dan ketersediaan tenaga kerja terampil.
          </Text>
          <Text
            mb="3rem"
            px="4rem"
            fontSize="3xl"
            color="red.600"
            fontWeight="500"
          >
            Peraturan Menteri PAN-RB Nomor 3 Tahun 2020
          </Text>
          <Stack mb="3rem" px="4rem" spacing="2rem">
            <Text fontSize="2xl">
              Jabatan kritikal merupakan jabatan inti dalam organisasi yang
              memenuhi karakteristik tertentu. Karakteristik jabatan kritikal
              terdiri dari:
            </Text>
            <Divider />
            <Text fontSize="2xl">
              a. Strategis dan berkaitan langsung dengan prioritas nasional; dan
            </Text>
            <Divider />
            <Text fontSize="2xl">
              b. Jabatan yang memerlukan keahlian yang sangat khusus dan/atau
              langka.
            </Text>
          </Stack>
        </Flex>
        <Flex bgColor="red.600" p="3rem" direction="column">
          <Stack bgColor="red.500" spacing="2rem" p="3rem" mb="1rem">
            <Heading color="white">Tiga Kriteria Jabatan Kritikal</Heading>
            {/* Defisit */}
            <Stack>
              <Stack spacing="2rem" direction="column">
                <Stack>
                  <Heading color="yellowPrimary" fontSize="3xl">
                    DEFISIT (SHORTAGE)
                  </Heading>
                  <Text color="white" fontSize="2xl">
                    Kesenjangan permintaan dan ketersediaan tenaga kerja dengan
                    keterampilan tertentu
                  </Text>
                </Stack>
                <Stack>
                  <Heading color="yellowPrimary" fontSize="3xl">
                    HIGH-SKILLED
                  </Heading>
                  <Text color="white" fontSize="2xl">
                    Jabatan Kritikal mengidentifikasi pekerjaan dengan
                    keterampilan tertentu
                  </Text>
                </Stack>
                <Stack>
                  <Heading color="yellowPrimary" fontSize="3xl">
                    STRATEGIC
                  </Heading>
                  <Text color="white" fontSize="2xl">
                    Keterampilan tertentu yang sesuai dengan tujuan pembangunan
                    strategis negara
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Image src={tiga_jabatan_kritikal}/>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
