import {
  Box,
  Button,
  Flex,
  Select,
  Spacer,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { GlobalFilter } from "../globalfilter";

export default function CustomTable({ customColumns, customData }) {
  const columns = useMemo(() => customColumns, []);
  const data = useMemo(() => customData, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    setPageSize,
    pageOptions,
    canPreviousPage,
    canNextPage,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <Flex>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </Flex>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroups) => (
            <Tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((column) => (
                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Flex mt="2rem" mb="2rem">
          <Text mr={4} color="#972829">
            {" "}
            <b>Rows per page:</b>
          </Text>
          <Select
            width="8%"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            size="sm"
          >
            {[5, 10, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </Select>
          <Spacer />
          <Box>
            <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
              Previous
            </Button>
            <span>
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <Button onClick={() => nextPage()} disabled={!canNextPage}>
              Next
            </Button>
          </Box>
        </Flex>
    </>
  );
}
