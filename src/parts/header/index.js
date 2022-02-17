import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Spacer, Stack, Text } from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo_panrb.png";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@chakra-ui/react";

const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
);

const languages = [
  {
    code: "id",
    name: "Indonesia",
    country_code: "id",
  },
  {
    code: "en",
    name: "English",
    country_code: "en",
  },
];

export default function Header() {
  const { t } = useTranslation();
  const [responsive] = useMediaQuery("(min-width: 1000px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex px={{ base: "2rem", xl: "5rem", "2xl": "10rem" }} py={5}>
      <Box mx="auto">
        <a href="/">
          <Image
            src={logo}
            width={{ base: "90px", lg: "150px", "2xl": "210px" }}
            minW="90px"
          />
        </a>
      </Box>
      <Spacer />
      <Stack
        direction="row"
        spacing={{ base: "2rem", xl: "4rem" }}
        justifyContent="center"
        alignItems="center"
      >
        {responsive ? (
          <>
            <Heading fontSize={{ base: "md", xl: "xl", "2xl": "2xl" }}>
              <a href="/about">{t("header_about")}</a>
            </Heading>
            <Menu closeOnBlur="true">
              <MenuButton>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                  direction="row"
                >
                  <Heading fontSize={{ base: "md", xl: "xl", "2xl": "2xl" }}>
                    {t("header_methodology")}
                  </Heading>
                  <ChevronDownIcon />
                </Stack>
              </MenuButton>
              <MenuList>
                <a href="/metodologi/overview">
                  <MenuItem>Ikhtisar</MenuItem>
                </a>
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
                  <Heading fontSize={{ base: "md", xl: "xl", "2xl": "2xl" }}>
                    {t("header_col")}
                  </Heading>
                  <ChevronDownIcon />
                </Stack>
              </MenuButton>
              <MenuList>
                <Link to="/daftar-jabatan-kritikal">
                  <MenuItem>Daftar Jabatan Kritikal</MenuItem>
                </Link>
                {/* <Link to="/rekomendasi-ja-jf">
                  <MenuItem>Rekomendasi JA ke JF</MenuItem>
                </Link> */}
                <Link to="/proyeksi-masa-datang">
                  <MenuItem>Proyeksi Masa Datang</MenuItem>
                </Link>
                <Link to="/jf-strategis">
                  <MenuItem>JF Strategis 2020-2021</MenuItem>
                </Link>
                <Link to="/jpt-kritikal">
                  <MenuItem>JPT Kritikal</MenuItem>
                </Link>
                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text>
                          Daftar Jabatan Kritikal, Major Project, dan Level
                          Kompetensi
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Stack>
                        <Link to="/core-competence">Deskripsi</Link>
                        <Link to="/core-competence/jabatan-pimpinan-tinggi">JPT Kritikal</Link>
                        <Link to="/core-competence/jabatan-fungsional">JF Kritikal</Link>
                        <Link to="/core-competence/future-jobs">JF Proyektif Kritikal</Link>
                      </Stack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                {/* <Menu>
                  <MenuButton>
                    Daftar Jabatan Kritikal, Major Project, dan Level Kompetensi
                  </MenuButton>
                  <MenuList>
                    <Link to="/jpt-kritikal">
                      <MenuItem>Kompetensi Utama JPT Kritikal</MenuItem>
                    </Link>
                    <Link to="/jpt-kritis">
                      <MenuItem>Kompetensi Utama JF Kritikal</MenuItem>
                    </Link>
                    <Link to="/core-competence">
                      <MenuItem>Kompetensi Utama JF Proyektif</MenuItem>
                    </Link>
                  </MenuList>
                </Menu> */}
              </MenuList>
            </Menu>
            <Heading fontSize={{ base: "md", xl: "xl", "2xl": "2xl" }}>
              <a href="/contact">{t("header_contact")}</a>
            </Heading>
            <Heading fontSize={{ base: "md", xl: "xl", "2xl": "2xl" }}>
              <Link to="/FAQ">{t("header_faq")}</Link>
            </Heading>
            <Menu closeOnBlur="true">
              <MenuButton>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                  direction="row"
                >
                  <GlobeIcon />
                  <ChevronDownIcon />
                </Stack>
              </MenuButton>
              <MenuList>
                {languages.map(({ code, name, country_code }) => (
                  <MenuItem
                    onClick={() => {
                      i18next.changeLanguage(code);
                    }}
                    key={country_code}
                  >
                    <a href="#">{name}</a>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </>
        ) : (
          <>
            <Button ref={btnRef} onClick={onOpen}>
              <HamburgerIcon />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>

                <DrawerBody>
                  <Accordion allowToggle>
                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Heading
                            fontSize={{ base: "md", xl: "xl", "2xl": "2xl" }}
                          >
                            <a href="/about">{t("header_about")}</a>
                          </Heading>
                        </Box>
                      </AccordionButton>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Heading fontSize="md">
                            {t("header_methodology")}
                          </Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4} fontSize="md">
                        <List spacing="1rem">
                          <ListItem>Ikhtisar</ListItem>
                          <ListItem>Top Down</ListItem>
                          <ListItem>Bottom Up</ListItem>
                          <ListItem>Dovetailing</ListItem>
                        </List>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Heading fontSize="md">{t("header_col")}</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4} fontSize="md">
                        <List spacing="1rem">
                          <ListItem>Daftar Jabatan Kritikal</ListItem>
                          <ListItem>Rekmoendasi JA ke JF</ListItem>
                          <ListItem>Proyeksi Masa Datang</ListItem>
                          <ListItem>JF Strategis 2020-2021</ListItem>
                          <ListItem>JPT Kritikal</ListItem>
                          <ListItem>Kompensansi Utama JPT Kritikal</ListItem>
                          <ListItem>Kompetensi Utama JF Kritikal</ListItem>
                          <ListItem>Kompetensi Utama JF Proyektif</ListItem>
                        </List>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Heading
                            fontSize={{ base: "md", xl: "xl", "2xl": "2xl" }}
                          >
                            <a href="/contact">{t("header_contact")}</a>
                          </Heading>
                        </Box>
                      </AccordionButton>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Heading
                            fontSize={{ base: "md", xl: "xl", "2xl": "2xl" }}
                          >
                            <a href="/faq">{t("header_faq")}</a>
                          </Heading>
                        </Box>
                      </AccordionButton>
                    </AccordionItem>
                  </Accordion>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )}
      </Stack>
    </Flex>
  );
}
