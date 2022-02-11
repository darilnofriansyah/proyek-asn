import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomTable from "../../../components/table";
import Papa from "papaparse";
import LoadingSpinner from "../../../components/loadingspinner";
import ColumnFilter from "../../../components/columnfilter";

export default function JFStrategis() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const response = await fetch("/files/JF_Strategis.csv");
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

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Flex direction="column" pt="4rem" px="4rem">
          <Heading mb="4rem">JF Strategis 2020-2021</Heading>
          <Text fontSize="xl" mb="2rem">
            JF Strategis 2020-2021 merupakan nama-nama jabatan fungsional yang
            sesuai dengan kebutuhan Proyek Prioritas Strategis Nasional. Usulan
            daftar jabatan ini berasal dari focus group discussion dengan para
            K/L pelaksana program prioritas strategis, analisis data peta
            okupasi nasional dan KBJI serta dari kajian literatur terhadap
            increasing demand dari studi World Economic Forum (2020).
          </Text>
          <CustomTable customColumns={columns} customData={data} />
        </Flex>
      )}
    </>
  );
}
