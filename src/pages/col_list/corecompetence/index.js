import {
  Button,
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomTable from "../../../components/table";
import Papa from "papaparse";
import LoadingSpinner from "../../../components/loadingspinner";
import ColumnFilter from "../../../components/columnfilter";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

export default function CoreCompetence() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      setLoading(false);
    }
    if (loading) {
      getData();
    }
  }, []);

  const {t} = useTranslation();

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Flex direction="column" pt="4rem" px="4rem">
          <Heading mb="2rem">
            {t("title_major_project_overview")}
          </Heading>
          <Text mb="1rem" fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>
            {t("description1_major_project_overview")}
          </Text>
          <Text mb="2rem" fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>
            {t("description2_major_project_overview")}
          </Text>
          <List mb="4rem" spacing={3} fontSize={{ base: "lg", xl: "lg", "2xl": "xl" }}>
            <ListItem>
              <ListIcon as={ArrowRightIcon} />
              {t("description3_major_project_overview")}
            </ListItem>
            <ListItem>
              <ListIcon as={ArrowRightIcon} />
              {t("description4_major_project_overview")}
            </ListItem>
          </List>
        </Flex>
      )}
    </>
  );
}
