import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomTable from "../../../components/table";
import Papa from "papaparse";
import LoadingSpinner from "../../../components/loadingspinner";
import ColumnFilter from "../../../components/columnfilter";
import { useTranslation } from "react-i18next";

export default function LongList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const response = await fetch("/files/Daftar_Jabatan_Kritikal.csv");
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
      Header: "Jabatan",
      accessor: "Nama Jabatan Fungsional",
      disableFilters: true,
    },
    {
      Header: "Jenis",
      accessor: "Jenis",
      Filter: ColumnFilter,
    },
    {
      Header: "Tugas",
      accessor: "Tugas",
      disableFilters: true,
    },
    {
      Header: "Permenpan",
      accessor: "Permenpan",
      disableFilters: true,
    },
    {
      Header: "",
      accessor: "Link_JDIH",
      disableFilters: true,
      Cell: ({ cell }) => (
        <a href={`${cell.row.values.Link_JDIH}`}>
          <Button variant="link">Detail</Button>
        </a>
      ),
    },
  ];

  const {t} = useTranslation();

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Flex direction="column" pt="4rem" px="4rem">
          <Heading mb="4rem">{t("title_daftar_jabatan_kritikal")}</Heading>
          <Text fontSize="xl" mb="2rem">
            {t("description_daftar_jabatan_kritikal")}
          </Text>
          <CustomTable customColumns={columns} customData={data} />
        </Flex>
      )}
    </>
  );
}
