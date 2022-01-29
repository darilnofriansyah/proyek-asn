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
          <Heading mb="2rem">Core Competence</Heading>
          <Text mb="1rem" fontSize="xl">
            Daftar ini memberikan informasi nama jabatan yang mendukung program
            prioritas strategis nasional (major project) dan visi presiden. Nama
            jabatan dibedakan dari jenis jabatannya. Tabel pertama menampilkan
            nama jabatan dengan jenis JPT, tabel kedua menampilan nama jabatan
            berdasarkan jenis JF yang sudah ditetapkan dalam Permenpan,
            sedangkan tabel ketiga merupakan nama jabatan fungsional yang
            bersifat strategis dan diusulkan menjadi nama jabatan baru untuk
            memperkuat pelaksanaan program prioritas strategis dan visi
            presiden.
          </Text>
          <Text mb="2rem" fontSize="xl">
            Dalam Penentuan level kompetensi ditentukan dalam 2 jenis kompetensi
            yaitu berdasarkan Permenpan no.38 tahun 2017 dan Penyesuaian
            berdasarkan standar KKNI.
          </Text>
          <List mb="4rem" spacing={3}>
            <ListItem>
              <ListIcon as={ArrowRightIcon} />
              Untuk level kompetensi JPT berdasarkan Permenpan no. 38 tahun 2017
              masuk kedalam level kompetensi 4-5 (JPT Pratama dan Madya)
              sedangkan level kompetensi SKKNI disetarakan dengan level 8 - 9
              yaitu lulusan Magister Terapan dan Magister paling rendah setara
              dengan jenjang 8; lulusan Doktor Terapan dan Doktor setara dengan
              jenjang 9 dan lulusan pendidikan spesialis setara dengan jenjang 8
              atau 9.
            </ListItem>
            <ListItem>
              <ListIcon as={ArrowRightIcon} />
              Untuk level kompetensi JF dan Future jobs berdasarkan permenpan 38
              tahun 2017 masuk kedalam level kompetensi level 2 - 4 (jenjang
              Pertama s.d Utama) sedangkan level kompetensi SKKNI disetarakan
              dengan level 6-9 yaitu lulusan Diploma 4 atau Sarjana Terapan dan
              Sarjana paling rendah setara dengan jenjang 6; lulusan Magister
              Terapan dan Magister paling rendah setara dengan jenjang 8;
              lulusan Doktor Terapan dan Doktor setara dengan jenjang 9; lulusan
              pendidikan profesi setara dengan jenjang 7 atau 8; lulusan
              pendidikan spesialis setara dengan jenjang 8 atau 9.
            </ListItem>
          </List>
          <CustomTable customColumns={columns} customData={data} />
        </Flex>
      )}
    </>
  );
}
