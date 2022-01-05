import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function DownloadLaporan() {
  return (
    <Flex direction="column" pt="4rem" px="4rem">
      <Heading fontSize="5xl" mb="2rem">
        Download
      </Heading>
      <Text mb="1rem" fontSize="2xl">
        Silakan download dokumen lengkap melalui tautan berikut:
      </Text>
      <Button width="10rem" bgColor="red.600" color="white" mb="2rem">
        <Link to="/files/laporan.pdf" target="_blank" downwload>
          Download Laporan
        </Link>
      </Button>
    </Flex>
  );
}
