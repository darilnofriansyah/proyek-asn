import { Button, Flex, Heading, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomTable from "../../../components/table";
import Papa from "papaparse";
import LoadingSpinner from "../../../components/loadingspinner";
import ColumnFilter from "../../../components/columnfilter";

export default function CoreCompetence() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const response = await fetch("/files/Core_Competence.csv");
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
      Header: "Bidang",
      accessor: "Bidang",
      Filter: ColumnFilter,
    },
    {
      Header: "Major Project",
      accessor: "Major Project",
      disableFilters: true,
    },
    {
      Header: "Nama Jabatan/Bidang",
      accessor: "Nama Jabatan/Bidang",
      disableFilters: true,
    },
    {
      Header: "Jenis Jabatan",
      accessor: "Jenis Jabatan",
      Filter: ColumnFilter,
    },
    {
      Header: "Tugas",
      accessor: "Tugas",
      disableFilters: true,
    },
    {
      Header: "Level Competency Permenpan 38 Tahun 2017",
      accessor: "Level Competency Permenpan 38 Tahun 2017",
      disableFilters: true,
    },
    {
      Header: "Level Competency SKKNI",
      accessor: "Level Competency SKKNI",
      disableFilters: true,
    },
  ];

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Flex direction="column" pt="4rem" px="4rem">
          <Heading mb="4rem">Core Competence</Heading>
          <CustomTable customColumns={columns} customData={data} />
        </Flex>
      )}
    </>
  );
}
