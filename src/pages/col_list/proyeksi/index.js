import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomTable from "../../../components/table";
import Papa from "papaparse";
import LoadingSpinner from "../../../components/loadingspinner";
import ColumnFilter from "../../../components/columnfilter";
import { useTranslation } from "react-i18next";

export default function Proyeksi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const response = await fetch("/files/Proyeksi_Masa_Datang.csv");
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
      const rows = results.data; // array of objects
      setData(rows);
      setLoading(false);
      console.log(rows);
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
      Header: "Bidang",
      accessor: "Bidang",
      Filter: ColumnFilter,
    },
    {
      Header: "Kelompok Jabatan",
      accessor: "Kelompok jabatan",
      Filter: ColumnFilter,
    },
    {
      Header: "Nama Jabatan",
      accessor: "Nama Jabatan",
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
          <Heading mb="4rem">{t("title_daftar_jabatan_proyektif")}</Heading>
          <Text fontSize="xl" mb="2rem">
            {t("description_daftar_jabatan_proyektif")}
          </Text>
          <CustomTable customColumns={columns} customData={data} />
        </Flex>
      )}
    </>
  );
}
