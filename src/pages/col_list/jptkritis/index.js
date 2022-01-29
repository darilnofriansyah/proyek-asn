import { Button, Flex, Heading, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomTable from "../../../components/table";
import Papa from "papaparse";
import LoadingSpinner from "../../../components/loadingspinner";
import ColumnFilter from "../../../components/columnfilter";

export default function JPTKritis() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      async function getData() {
        const response = await fetch("/files/JPT_Kritis.csv");
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
        disableFilters: true
      },
      {
        Header: "Nama Jabatan",
        accessor: "Nama Jabatan",
        disableFilters: true
      },
      {
        Header: "Instansi Pengampu",
        accessor: "Instansi Pengampu",
        Filter: ColumnFilter,
      },
      {
        Header: "Level Pemerintahan",
        accessor: "Level Pemerintahan",
        Filter: ColumnFilter,
      },
    ];
  
    return (
      <>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Flex direction="column" pt="4rem" px="4rem">
            <Heading mb="4rem">JPT Kritis</Heading>
            <CustomTable customColumns={columns} customData={data} />
          </Flex>
        )}
      </>
    );
}
