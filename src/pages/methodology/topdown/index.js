import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import chart_down from "../../../assets/images/icon/chart_down.png"

export default function Topdown() {
  return (
    <Flex pt="4rem" px="4rem">
      {/* Metodologi Top Down */}
      <Stack spacing="2rem">
        <Heading textColor="red.600" fontSize="6xl">
          Pendekatan <Text as="i">Top Down</Text>
        </Heading>
        <Text fontSize="2xl">
          Pendekatan ini memberikan dasar untuk menentukan apakah suatu
          pekerjaan mengalami tingkat Kritis dari segi defisit, keahlian, dan
          strategis
        </Text>
        <Text fontWeight="400" fontSize="4xl">
          Indikator Pendekatan Top Down
        </Text>
        <SimpleGrid px="5rem" spacing={{base: "2rem", xl: "5rem"}} columns={{base: 1, xl: 3}}>
          <Stack
            bgColor="yellowPrimary"
            borderRadius={{base: "10px 10px 10px 10px", xl: "10px 10px 0px 0px"}}
            pb="2rem"
          >
            <Flex
              borderRadius="10px 10px 0px 0px"
              pt="2rem"
              px="4rem"
              bgColor="yellowSecondary"
            >
              <Stack mb="2rem" direction="row">
                {/* <Image src={chart_down} width="3rem" height="auto"/> */}
                <Heading>Defisit</Heading>
              </Stack>
            </Flex>
            <Flex direction="column" px="4rem">
              <Text fontSize="lg" py="1rem">
                Rasio formasi CPNS (JA & JF) dan jumlah pendaftar yang diterima
                / lulus wawancara{" "}
              </Text>
              <Divider colorScheme="black" />
              <Text fontSize="lg" py="1rem">
                Jumlah jabatan JF kosong pada durasi waktu tertentu (2018, 2019,
                2020)
              </Text>
              <Divider />
              <Text fontSize="lg" py="1rem">
                Seleksi terbuka JPT berulang
              </Text>
            </Flex>
          </Stack>
          <Stack
            bgColor="yellowPrimary"
            borderRadius={{base: "10px 10px 10px 10px", xl: "10px 10px 0px 0px"}}
            pb="2rem"
          >
            <Flex
              borderRadius="10px 10px 0px 0px"
              pt="2rem"
              px="4rem"
              bgColor="yellowSecondary"
            >
              <Heading mb="2rem">Keahlian</Heading>
            </Flex>
            <Flex direction="column" px="4rem">
              <Text fontSize="lg" py="1rem">
                Rasio jumlah PNS yang mengikuti uji kompetensi untuk menjadi JF
                dengan jumlah PNS yang lulus
              </Text>
              <Divider colorScheme="black" />
              <Text fontSize="lg" py="1rem">
                Penurunan jenjang pendidikan pada JF tertentu pada tiga tahun
                terakhir
              </Text>
              <Divider />
              <Text fontSize="lg" py="1rem">
                Rasio peserta terdaftar pada seleksi terbuka JPT tetapi tidak
                lulus uji kompetensi (assessment center)
              </Text>
            </Flex>
          </Stack>
          <Stack
            bgColor="yellowPrimary"
            borderRadius={{base: "10px 10px 10px 10px", xl: "10px 10px 0px 0px"}}
            pb="2rem"
            mb={{base: "2rem", xl:"0"}}
          >
            <Flex
              borderRadius="10px 10px 0px 0px"
              pt="2rem"
              px="4rem"
              bgColor="yellowSecondary"
            >
              <Heading mb="2rem">Strategis</Heading>
            </Flex>
            <Flex direction="column" px="4rem">
              <Text fontSize="lg" py="1rem">
                JF baru yang muncul dalam tiga tahun terakhir
              </Text>
              <Divider colorScheme="black" />
              <Text fontSize="lg" py="1rem">
                Persandingan JF dengan jabatan pada peta okupasi nasional dan
                KBJI
              </Text>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Flex>
  );
}
