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
import CustomTable from "../../../../components/table";
import Papa from "papaparse";
import LoadingSpinner from "../../../../components/loadingspinner";
import ColumnFilter from "../../../../components/columnfilter";
import { useTranslation } from "react-i18next";

export default function FutureJobs() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const response = await fetch("/files/Core_Competence_FJ.csv");
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
      const rows = results.data; // array of objects
      setData(rows);
      setLoading(false);
    }
    if (loading) {
      getData();
    }
  }, []);

  const columns = [
    {
      Header: "No",
      accessor: "index",
      Cell: (props) => {
        return <div>{props.row.index + 1}</div>;
      },
      disableFilters: true,
    },
    {
      Header: "Bidang Major Project",
      accessor: "Bidang",
      Filter: ColumnFilter,
    },
    {
      Header: "Major Project",
      accessor: "Major Project",
      disableFilters: true,
    },
    {
      Header: "Bidang Jabatan",
      accessor: "Nama Jabatan/Bidang",
      disableFilters: true,
    },
    {
      Header: "Tugas",
      accessor: "Tugas",
      disableFilters: true,
    },
    {
      Header: "Level Kompetensi (Permenpan 38/2017)",
      accessor: "Level Competency Permenpan 38 Tahun 2017",
      disableFilters: true,
    },
    {
      Header: "Level Kompetensi SKKNI",
      accessor: "Level Competency SKKNI",
      disableFilters: true,
    },
  ];

  const {t} = useTranslation();

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Flex direction="column" pt="4rem" px="4rem">
          <Heading mb="2rem">{t("title_daftar_jabatan_fungsional_proyektif_kritikal")}</Heading>
          <Text mb="1rem" fontSize={{ base: "lg", xl: "lg", "2xl": "xl" }}>
            {t("description_daftar_jabatan_fungsional_proyektif_kritikal")}
          </Text>
          <CustomTable customColumns={columns} customData={data} />
        </Flex>
      )}
    </>
  );
}
