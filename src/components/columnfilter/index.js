import { Select } from "@chakra-ui/react";
import React, { useMemo } from "react";

export default function ColumnFilter({ column: { filterValue, setFilter, preFilteredRows, id} }) {
  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);
  return (
    <span>
      <Select
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
            <option key={i} value={option}>
                {option}
            </option>
        ))}
      </Select>
    </span>
  );
}
