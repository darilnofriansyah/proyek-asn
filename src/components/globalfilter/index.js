import { Input } from "@chakra-ui/react";
import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      <Input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        mb={5}
        width="600px"
        placeholder="Search..."
      />
    </span>
  );
};