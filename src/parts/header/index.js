import { ChevronDownIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Spacer, Stack, Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/images/logo/logo_panrb.png";

export default function Header() {
  return (
    <Flex px={{ base: "2rem", lg: "5rem", xl: "10rem" }} py={5}>
      <Box mx="auto">
        <a href="/">
          <Image src={logo} width="210px" minW="210px" />
        </a>
      </Box>
      <Spacer />
      <Stack
        direction="row"
        spacing={{ base: "2rem", xl: "4rem" }}
        justifyContent="center"
        alignItems="center"
      >
        <Menu closeOnBlur="true">
          <MenuButton>
            <Stack
              justifyContent="center"
              alignItems="center"
              spacing={1}
              direction="row"
            >
              <Heading fontSize={{ base: "xl", xl: "2xl" }}>About</Heading>
              <ChevronDownIcon />
            </Stack>
          </MenuButton>
          <MenuList>
            <a href="/about">
              <MenuItem>About COL ASN</MenuItem>
            </a>
          </MenuList>
        </Menu>
        <Menu closeOnBlur="true">
          <MenuButton>
            <Stack
              justifyContent="center"
              alignItems="center"
              spacing={1}
              direction="row"
            >
              <Heading fontSize={{ base: "xl", xl: "2xl" }}>
                Methodology
              </Heading>
              <ChevronDownIcon />
            </Stack>
          </MenuButton>
          <MenuList>
            <a href="/metodologi/topdown">
              <MenuItem>Top Down</MenuItem>
            </a>
            <a href="/metodologi/bottomup">
              <MenuItem>Bottom Up</MenuItem>
            </a>
            <a href="/metodologi/dovetailing">
              <MenuItem>Dovetailing</MenuItem>
            </a>
          </MenuList>
        </Menu>
        <Menu closeOnBlur="true">
          <MenuButton>
            <Stack
              justifyContent="center"
              alignItems="center"
              spacing={1}
              direction="row"
            >
              <Heading fontSize={{ base: "xl", xl: "2xl" }}>COL List</Heading>
              <ChevronDownIcon />
            </Stack>
          </MenuButton>
          <MenuList>
            <MenuItem>COL Matrix</MenuItem>
            <MenuItem>COL Long List</MenuItem>
            <MenuItem>Findings</MenuItem>
          </MenuList>
        </Menu>
        <Heading fontSize={{ base: "xl", xl: "2xl" }}>Kontak</Heading>
        <Heading fontSize={{ base: "xl", xl: "2xl" }}>FAQ</Heading>
        <Heading fontSize={{ base: "xl", xl: "2xl" }}>Download Laporan</Heading>
      </Stack>
    </Flex>
  );
}
