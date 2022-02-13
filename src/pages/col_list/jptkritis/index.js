import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
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
      disableFilters: true,
    },
    {
      Header: "Nama Jabatan",
      accessor: "Nama Jabatan",
      disableFilters: true,
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
          <Heading mb="4rem">
            Daftar Jabatan Kritikal Jabatan Pimpinan Tinggi
          </Heading>
          <Text mb="1rem" fontSize="xl">
            Data ini merupakan daftar jabatan kritikal jenjang JPT yang
            berkontribusi pada proyek prioritas strategis nasional (Major
            Project) dan visi Presiden. Data dipisahkan atas jenjang JPT dan
            dilengkapi dengan instansi pengampu jabatan pimpinan tinggi pada
            proyek prioritas strategis maupun visi presiden.
          </Text>
          <Text mb="4rem" fontSize="xl">
            Jabatan dengan kategori tertentu artinya diampu oleh
            kementerian/lembaga khusus, jabatan dengan keterangan instansi pusat
            menandakan bahwa jabatan tersebut terdapat pada beberapa K/L di
            Pemerintah Pusat, jabatan dengan keterangan Instansi Daerah
            menandakan bahwa jabatan tersebut terdapat pada beberapa K/L di
            Pemerintah Daerah. Sedangkan jabatan dengan keterangan “instansi
            pusat-instansi daerah” sifatnya terbuka atau kebutuhan akan jabatan
            tersebut tidak hanya di satu instansi tertentu melainkan ada di
            Pemerintah Pusat di Daerah.
          </Text>
          <CustomTable customColumns={columns} customData={data} />
        </Flex>
      )}
    </>
  );
}
