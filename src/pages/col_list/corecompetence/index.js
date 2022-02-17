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
      setLoading(false);
    }
    if (loading) {
      getData();
    }
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Flex direction="column" pt="4rem" px="4rem">
          <Heading mb="2rem">
            Daftar Jabatan Kritikal, Major Project, dan Level Kompetensi
          </Heading>
          <Text mb="1rem" fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>
            Daftar ini memberikan informasi nama jabatan yang mendukung program
            prioritas strategis nasional (major project) dan visi presiden. Nama
            jabatan dibedakan dari jenis jabatannya. Pertama yakni menampilkan
            nama jabatan dengan jenis JPT. Kedua yakni menampilan nama jabatan
            berdasarkan jenis JF yang sudah ditetapkan dalam Permenpan,
            sedangkan ketiga merupakan nama jabatan fungsional yang bersifat
            strategis dan diusulkan menjadi nama jabatan baru untuk memperkuat
            pelaksanaan program prioritas strategis dan visi presiden. Ketiga
            hal ini dapat dilihat melalui sub-menu “JPT Kritikal”, “JF
            Kritikal”, serta “JF Proyektif Kritikal”.
          </Text>
          <Text mb="2rem" fontSize={{ base: "lg", xl: "lg", "2xl": "2xl" }}>
            Penentuan level kompetensi ditentukan dengan 2 jenis kompetensi
            yaitu berdasarkan Permenpan no.38 tahun 2017 dan Penyesuaian
            berdasarkan standar KKNI (SKKNI).
          </Text>
          <List mb="4rem" spacing={3} fontSize={{ base: "lg", xl: "lg", "2xl": "xl" }}>
            <ListItem>
              <ListIcon as={ArrowRightIcon} />
              Untuk level kompetensi JPT berdasarkan Permenpan no. 38 tahun 2017
              masuk ke dalam level kompetensi 4-5 (JPT Pratama dan Madya)
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
        </Flex>
      )}
    </>
  );
}
