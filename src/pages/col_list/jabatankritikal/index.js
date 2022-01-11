import { Button, Flex, Heading, Link } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomTable from "../../../components/table";
import Papa from "papaparse";
import LoadingSpinner from "../../../components/loadingspinner";

export default function JabatanKritikal() {
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
    },
    {
      Header: "Nama Jabatan",
      accessor: "Nama Jabatan",
    },
    // {
    //   Header: "",
    //   accessor: "button",
    //   Cell: ({ cell }) => {
    //     return (
    //       <Button
    //       // as={Link}
    //       // to={`/candidateselection/detail/${idJobVacancy}/${cell.row.original.id_job_application}`}
    //       // variant="link"
    //       >
    //         Detail
    //       </Button>
    //     );
    //   },
    // },
  ];

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Flex direction="column" pt="4rem" px="4rem">
          <Heading mb="4rem">Daftar Jabatan Kritikal</Heading>
          <CustomTable customColumns={columns} customData={data} />
        </Flex>
      )}
    </>
  );
}
