import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomTable from "../../../components/table";
import Papa from "papaparse";
import LoadingSpinner from "../../../components/loadingspinner";
import ColumnFilter from "../../../components/columnfilter";

export default function Rekomendasi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const response = await fetch("/files/Rekomendasi_JA_JF.csv");
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
      Header: "Nama JA",
      accessor: "Nama JA",
      disableFilters: true,
    },
    {
      Header: "Tugas",
      accessor: "Tugas",
      disableFilters: true,
    },
    {
      Header: "Rekomendasi JF",
      accessor: "Rekomendasi JF",
      disableFilters: true,
    },
    {
      Header: "Hasil Analisis",
      accessor: "Hasil Analisis",
      disableFilters: true,
    },
  ];

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Flex direction="column" pt="4rem" px="4rem">
          <Heading mb="4rem">Rekomendasi JA ke JF</Heading>
          <Text fontSize="2xl" mb="2rem">
            Berikut ini merupakan Daftar JA yang direkomendasikan untuk
            upgrading ke Jabatan Fungsional yang Ditetapkan.
          </Text>
          <Text fontSize="xl" mb="2rem">
            Daftar rekomendasi JA ke JF berisi nama jabatan yang berpotensi
            untuk digantikan mesin di masa mendatang atau jabatan yang tugasnya
            terdampak dari perkembangan teknologi informasi / digitalisasi
            terhadap jabatan – jabatan yang ada. Jabatan tersebut dapat
            diintegrasikan dan/ atau dikembangkan kompetensinya mengikuti
            perkembangan teknologi informasi / digitalisasi / otomatisasi.
            Setelah dilakukan identifikasi, ditemukan beberapa nama JA yang
            tugasnya beririsan dengan JF yang ada sehingga nama-nama JA tersebut
            dapat dilakukan upgrading jabatan dengan mengakomodir nama jabatan
            fungsional yang tugasnya sama.
          </Text>
          <CustomTable customColumns={columns} customData={data} />
        </Flex>
      )}
    </>
  );
}
